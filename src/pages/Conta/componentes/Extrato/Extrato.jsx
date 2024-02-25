import styles from './Extrato.module.css'

export default function Extrato({ contaSelecionada }) {

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
