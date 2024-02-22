import { useContext } from 'react'
import styles from './Extrato.module.css'
import { RBankContext } from '../../../../contexts/RBankContext'

export default function Extrato({ contaSelecionada }) {

    const { transacoes } = useContext(RBankContext)
    const transacoesFiltradas = [...transacoes.filter(transacao => (
        transacao._idDestino == contaSelecionada._id
        ||
        transacao._idOrigem == contaSelecionada._id
    ))]

    return (
        <>
            <table className={styles.extrato}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Valor</th>
                        <th>Tipo</th>
                        <th>Conta Origem</th>
                        <th>Conta Destino</th>
                    </tr>
                </thead>
                <tbody>
                    {transacoesFiltradas.length > 0
                        ? transacoesFiltradas.map(transacao => (
                            <tr>
                                <td>{transacao._id}</td>
                                <td>{transacao._valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                <td>{transacao._tipo}</td>
                                <td>{transacao._idOrigem}</td>
                                <td>{transacao._idDestino || '-'}</td>
                            </tr>
                        ))

                        : <tr>
                            <td colSpan={5}> Nenhuma transação encontrada para esta conta </td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}


/*

export class Transacao {
    constructor(id, valor, idOrigem, idDestino) {
        this._id = id
        this._valor = valor
        this._idOrigem = idOrigem
        this._idDestino = idDestino
    }
}

*/