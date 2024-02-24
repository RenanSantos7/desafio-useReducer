import { createContext, useEffect, useReducer } from "react"
import { transacoesReducer } from "../app/reducers";
import { Transacao } from "../app/models";
import { carregarDoLocalStorage } from '../utils/gerenciarLS'
import { salvarNoLocalStorage } from '../utils/gerenciarLS'

export const RBankContext = createContext();
RBankContext.displayName = "RBank"

export const RBankProvider = ({ children }) => {
    let transacoes = []

    const conta1 = { _id: 68780, _saldo: 0, _extrato: [], _titular: { nome: 'Fulano de Tal' } }
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
                idGerado = Math.floor(Math.random() * 1000)
            } while (transacoes.some(transacao => transacao.id === idGerado))
        }

        return idGerado
    }

    function existeConta(id) {
        return contas.some(conta => conta._id === id)
    }

    function criarConta(pessoa) {
        dispatch({
            tipo: 'criarConta',
            id: geraIdUnico('conta'),
            titular: pessoa
        })
    }

    // % Depósito
    function depositar(valor, id) {
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

            transacoes = [...transacoes, novaTransacao]
            console.log(transacoes)
        }

    }

    // % Saque
    function sacar(valor, id) {
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
            transacoes = [...transacoes, novaTransacao]
            console.log(transacoes)
        }

    }

    // % Transferência
    function transferir(valor, idOrigem, idDestino) {
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
            transacoes = [...transacoes, novaTransacao]
            console.log(transacoes)
        }

    }

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
