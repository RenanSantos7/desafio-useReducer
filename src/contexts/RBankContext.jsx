import { createContext, useCallback, useEffect, useReducer, useState } from "react"
import { transacoesReducer } from "../app/reducers";
import { Conta, Transacao } from "../app/models";
import { carregarDoLocalStorage } from '../utils/gerenciarLS'
import { salvarNoLocalStorage } from '../utils/gerenciarLS'

export const RBankContext = createContext();
RBankContext.displayName = "RBank"

export const RBankProvider = ({ children }) => {
    const [transacoes, setTransacoes] = useState([])

    const conta1 = new Conta(6878, { nome: 'Fulano de Tal' })
    const contasLocalSt = carregarDoLocalStorage("contas") || []
    const estadoInicial = [conta1, contasLocalSt]
    const [contas, dispatch] = useReducer(transacoesReducer, estadoInicial)

    function geraIdUnico(tipo) {
        let idGerado = 0

        if (tipo === 'conta') {
            do {
                idGerado = Math.floor(Math.random() * 1000)
            } while (contas.some(conta => conta.id === idGerado))
        }

        if (tipo === 'transacao') {
            do {
                idGerado = Math.floor(Math.random() * 100000)
            } while (transacoes.some(transacao => transacao.id === idGerado))
        }

        return idGerado
    }

    function existeConta(id) {
        return contas.some(conta => conta._id === id)
    }

    const criarConta = useCallback(pessoa => {
        dispatch({
            tipo: 'criarConta',
            id: geraIdUnico('conta'),
            titular: pessoa
        })
    },[contas, dispatch])

    // % Depósito
    const depositar = useCallback((valor, id) => {
        const novaTransacao = new Transacao(
            geraIdUnico('transacao'),
            valor,
            'Depósito',
            id
        )

        if (!existeConta(id)) {
            console.error('Conta não encontrada. Verifique o ID informado')
        } else {
            dispatch({
                tipo: 'deposito',
                valor: valor,
                idOrigem: id
            })

            setTransacoes(prev => [...prev, novaTransacao])
            //console.log(transacoes)
        }

    }, [contas, dispatch, transacoes])

    // % Saque
    const sacar = useCallback((valor, id) => {
        const novaTransacao = new Transacao(
            geraIdUnico('transacao'),
            valor,
            'Saque',
            id
        )

        if (!existeConta(id)) {
            console.error('Conta não encontrada. Verifique o ID informado')
        } else {
            dispatch({
                tipo: 'saque',
                valor: valor,
                idOrigem: id
            })
            setTransacoes(prev => [...prev, novaTransacao])
            //console.log(transacoes)
        }

    }, [contas, dispatch, transacoes])

    // % Transferência
    const transferir = useCallback((valor, idOrigem, idDestino) => {
        const novaTransacao = new Transacao(
            geraIdUnico('transacao'),
            valor,
            'Transferência',
            idOrigem,
            idDestino
        )

        if (!existeConta(idOrigem)) {
            console.error('Conta de origem não encontrada. Verifique o ID informado')
        } else if (!existeConta(idDestino)) {
            console.error('Conta de destino não encontrada. Verifique o ID informado')
        } else {
            dispatch({
                tipo: 'trasferencia',
                valor: valor,
                idOrigem: idOrigem,
                idDestino: idDestino
            })
            setTransacoes(prev => [...prev, novaTransacao])
            console.log(transacoes)
        }

    }, [contas, dispatch, transacoes])

    // % Efeitos
    useEffect(() => {
        dispatch({
            tipo: 'extrato',
            transacoes: transacoes
        })
    }, [transacoes])

    useEffect(() => {
        salvarNoLocalStorage('contas', contas)
    }, [contas])


    // % Retornos
    return (
        <RBankContext.Provider value={{
            criarConta,
            depositar,
            sacar,
            transferir,
            contas,
            transacoes
        }}>
            {children}
        </RBankContext.Provider>
    )
}
