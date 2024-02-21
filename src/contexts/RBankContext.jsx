import { createContext, useCallback, useEffect, useReducer, useState } from "react"
import { transacoesReducer } from "../app/reducers";
import { Transacao } from "../app/models";

export const RBankContext = createContext();
RBankContext.displayName = "RBank"

export const RBankProvider = ({ children }) => {
    const transacoes = useMemo(() => [], [])

    const [contas, dispatch] = useReducer(transacoesReducer, [])

    const geraIdUnico = useCallback(tipo => {
        let idGerado = 0

        if (tipo === 'conta') {
            do {
                idGerado = Math.floor(Math.random() * 1000)
            } while (contas.some(conta => conta.id === idGerado))
        }

        if (tipo === 'transacao') {
            do {
                idGerado = Math.floor(Math.random() * 1000)
            } while (transacoes.some(transacao => transacao.id === idGerado))
        }

        return idGerado
    }, [contas, transacoes])

    const existeConta = useCallback(id => {
        return contas.some(conta => conta.id === id)
    }, [contas, transacoes])

    const criarConta = useCallback(nome => {
        dispatch({
            tipo: 'criarConta',
            id: geraIdUnico('conta'),
            titular: nome
        })
    }, [])

    const depositar = useCallback((valor, id) => {
        const novaTransacao = new Transacao(
            geraIdUnico('transacao'),
            valor,
            id
        )

        if (!existeConta(id)) {
            console.error('Conta não encontrada')
        } else {
            dispatch({
                tipo: 'deposito',
                valor: valor,
                idOrigem: id
            })
            transacoes = [...transacoes, novaTransacao]
        }

    }, [contas, transacoes])

    const saque = useCallback((valor, id) => {
        const novaTransacao = new Transacao(
            geraIdUnico('transacao'),
            valor,
            id
        )

        if (!existeConta(id)) {
            console.error('Conta não encontrada')
        } else {
            dispatch({
                tipo: 'saque',
                valor: valor,
                idOrigem: id
            })
            transacoes = [...transacoes, novaTransacao]
        }

    }, [contas, transacoes])

    const trasferencia = useCallback((valor, idOrigem, idDestino) => {
        const novaTransacao = new Transacao(
            geraIdUnico('transacao'),
            valor,
            idOrigem,
            idDestino
        )

        if (!existeConta(idOrigem)) {
            console.error('Conta de origem não encontrada')
        } else if (!existeConta(idDestino)) {
            console.error('Conta de destino não encontrada')
        } else {
            dispatch({
                tipo: 'trasferencia',
                valor: valor,
                idOrigem: idOrigem,
                idDestino: idDestino
            })
            transacoes = [...transacoes, novaTransacao]
        }

    }, [contas, transacoes])

    useEffect(() => {
        dispatch({
            tipo: 'extrato',
            transacoes: transacoes
        })
    }, [transacoes])

    return (
        <RBankContext.Provider value={{
            criarConta,
            depositar,
            saque
        }}>
            {children}
        </RBankContext.Provider>
    )
}