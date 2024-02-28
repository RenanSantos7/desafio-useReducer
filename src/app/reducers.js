import { Conta } from "./models"

export function transacoesReducer(contas, operacao) {
    const contaOrigem = contas.find(conta => conta._id == operacao.idOrigem)
    const contaDestino = contas.find(conta => conta._id == operacao.idDestino)
    
    switch (operacao.tipo) {
        case 'criarConta': {
            const novaConta = new Conta(
                operacao.id,
                operacao.titular
            )
            contas = [...contas, novaConta]
            return contas
        }
        case 'deposito':
            contaOrigem._saldo += Number(operacao.valor)
            break
        case 'saque':
            contaOrigem._saldo -= Number(operacao.valor)
            break
        case 'transferencia':
            contaOrigem._saldo -= operacao.valor
            contaDestino._saldo += operacao.valor
            break
        case 'extrato':
            contas.map(conta => {
                conta._extrato = operacao.transacoes.filter(transacao => (
                    (transacao._idOrigem || transacao._idDestino) === conta._id
                ))
            })
            break
    }

    return contas
}
