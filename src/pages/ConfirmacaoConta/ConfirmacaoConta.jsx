import styles from './ConfirmacaoConta.module.css'
import { useContext } from 'react'
import { RBankContext } from '../../contexts/RBankContext'
import Card from '../../components/Card/Card'
import Botao from '../../components/Botao/Botao'
import { useNavigate } from 'react-router-dom'

export default function ConfirmacaoConta() {

    const { contas } = useContext(RBankContext)

    const ultimaConta = contas[contas.length - 1]

    function navegar() {
        useNavigate('/acessar-conta')
    }

    return (
        <div className={styles.container}>
            <h1>Parabéns, sua conta foi criada!</h1>
            <Card titulo='Sua nova conta R'>
                <table className={styles.tabela}>
                    <tbody>
                        <tr>
                            <th>Número da conta</th>
                            <td>{ultimaConta._id}</td>
                       </tr>
                        <tr>
                            <th>Titular</th>
                            <td>{ultimaConta._titular._nome}</td>
                       </tr>
                    </tbody>
                </table>
            </Card>

            <div className={styles.botaoContainer}>
                <Botao aoClicar={navegar}>Acessar sua conta</Botao>
            </div>
        </div>
    )
}
