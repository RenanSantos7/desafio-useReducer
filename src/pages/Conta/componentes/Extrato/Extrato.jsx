import { useContext, useEffect, useMemo } from 'react'
import styles from './Extrato.module.css'
import { RBankContext } from '../../../../contexts/RBankContext'

export default function Extrato({ contaSelecionada }) {

    useEffect(() => {
        console.log('extrato');
        console.log(contaSelecionada._extrato)
    }, [contaSelecionada._extrato])

    return (
        <>
            <table className={styles.extrato}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tipo</th>
                        <th>Valor</th>
                        <th>Conta Origem</th>
                        <th>Conta Destino</th>
                    </tr>
                </thead>
                <tbody>
                    {contaSelecionada._extrato.length > 0
                        ? contaSelecionada._extrato.map((transacao, i) => (
                            <tr key={i}>
                                <td>{transacao._id}</td>
                                <td>{transacao._tipo}</td>
                                <td>{Number(transacao._valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
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
