import { Conta } from "./models"

export function transacoesReducer(state, operacao) {
    const contaOrigem = state.find(conta => conta.id === operacao.idOrigem)
    const contaDestino = state.find(conta => conta.id === operacao.idDestino)
    
    switch (operacao.tipo) {
        case 'criarConta': {
            const novaConta = new Conta(
                operacao.id,
                operacao.titular
            )
            state = [...state, novaConta]
            return state
        }
        case 'deposito':
            contaOrigem.saldo += operacao.valor
            break
        case 'saque':
            contaOrigem.saldo -= operacao.valor
            break
        case 'transferência':
            contaOrigem.saldo -= operacao.valor
            contaDestino.saldo += operacao.valor
            break
        case 'extrato':
            state.map(conta => {
                conta.extrato = operacao.transacoes.filter(transacao => (
                    (transacao.idOrigem || transacao.idDestino) === conta.id
                ))
            })
    }

    return state
}
