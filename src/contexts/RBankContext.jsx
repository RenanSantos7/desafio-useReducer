import { createContext, useCallback, useEffect, useMemo, useReducer, useState } from "react"
import { transacoesReducer } from "../app/reducers";
import { Transacao } from "../app/models";
import { carregarDoLocalStorage } from '../utils/gerenciarLS'
import { salvarNoLocalStorage } from '../utils/gerenciarLS'

export const RBankContext = createContext();
RBankContext.displayName = "RBank"

export const RBankProvider = ({ children }) => {
    let transacoes = useMemo(() => [], [])

    //const estadoInicial = carregarDoLocalStorage("contas") || []

    const conta1 = {_id: 68780, _saldo: 0, _extrato: [], _titular:{nome: 'Fulano de Tal'}}

    const estadoInicial = [conta1]

    const [contas, dispatch] = useReducer(transacoesReducer, estadoInicial)

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

    const criarConta = useCallback(pessoa => {
        dispatch({
            tipo: 'criarConta',
            id: geraIdUnico('conta'),
            titular: pessoa
        })
    }, [])

    // % Depósito
    const depositar = useCallback((valor, id) => {
        const novaTransacao = new Transacao(
            geraIdUnico('transacao'),
            valor,
            'Depósito',
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

    // % Saque
    const saque = useCallback((valor, id) => {
        const novaTransacao = new Transacao(
            geraIdUnico('transacao'),
            valor,
            'Saque',
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

    // % Transferência
    const trasferencia = useCallback((valor, idOrigem, idDestino) => {
        const novaTransacao = new Transacao(
            geraIdUnico('transacao'),
            valor,
            'Transferência',
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

    // % Efeitos
    useEffect(() => {
        dispatch({
            tipo: 'extrato',
            transacoes: transacoes
        })
    }, [transacoes])

    /* 
    useEffect(() => {
        salvarNoLocalStorage('contas', contas)
    }, [contas]) 
    */

    // % Retornos
    return (
        <RBankContext.Provider value={{
            criarConta,
            depositar,
            saque,
            trasferencia,
            contas,
            transacoes
        }}>
            {children}
        </RBankContext.Provider>
    )
}
