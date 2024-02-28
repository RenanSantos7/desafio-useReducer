import styles from './Modal.module.css'
import CampoForm from '../../../../components/CampoForm/CampoForm'
import Botao from '../../../../components/Botao/Botao'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState, useEffect } from 'react'
import { RBankContext } from '../../../../contexts/RBankContext'
import CampoMoeda from '../../../../components/CampoMoeda/CampoMoeda'

export default function Modal({ operacao, aberto, conta }) {

    /* useEffect(() => {
        console.log(conta)
    }, []) */

    const [valorOperacao, setValorOperacao] = useState(0)
    const [destino, setDestino] = useState(0)

    const {
        depositar,
        sacar,
        transferir,
    } = useContext(RBankContext)

    function fechar() {
        aberto('')
    }

    function fazerDeposito(evt) {
        evt.preventDefault()
        depositar(valorOperacao, conta._id)
        console.log(`Depósito de R$ ${valorOperacao} na conta nº ${conta._id}`)
        fechar()
    }

    function fazerSaque(evt) {
        evt.preventDefault()
        sacar(valorOperacao, conta._id)
        fechar()
    }

    function fazerTransferencia(evt) {
        evt.preventDefault()
        transferir(valorOperacao, conta._id, destino)
        fechar()
    }
    
    useEffect(() => {
        return () => {
            setValorOperacao(0)
            setDestino(0)
        }
    }, [])

    return (
        <div className={styles.modalContainer}>
            <div
                className={styles.sombra}
                onClick={fechar}
            ></div>
            <dialog className={styles.modal} open>
                <FontAwesomeIcon
                    icon={faXmark}
                    className={styles.sair}
                    onClick={fechar}
                />

                {operacao === 'deposito'
                    ? <>
                        <h3 className={styles.titulo}>Depósito</h3>
                        <form className={styles.form} onSubmit={fazerDeposito}>
                            <CampoMoeda
                                label='Valor do depósito'
                                valor={valorOperacao}
                                setValor={setValorOperacao}
                                autofoco={true}
                            />

                            <Botao
                                type='submit'
                            >Depositar</Botao>
                        </form>
                    </>
                    : operacao === 'saque'
                        ? <>
                            <h3 className={styles.titulo}>Saque</h3>
                            <form className={styles.form} onSubmit={fazerSaque}>
                                <CampoMoeda
                                    titulo='Valor'
                                    valor={valorOperacao}
                                    setValor={setValorOperacao}
                                    autofoco={true}
                                />

                                <Botao
                                    type='submit'
                                >Sacar</Botao>
                            </form>
                        </>
                        : operacao === 'transferencia'
                            ? <>
                                <h3 className={styles.titulo}>Transferência</h3>
                                <form className={styles.form} onSubmit={fazerTransferencia}>
                                    <CampoMoeda
                                        titulo='Valor'
                                        valor={valorOperacao}
                                        setValor={setValorOperacao}
                                        autofoco={true}
                                    />

                                    <CampoForm
                                        min={1}
                                        titulo='Conta de destino'
                                        placeholder='Digite o número da conta de destino'
                                        valor={destino}
                                        setValor={setDestino}
                                    />

                                    <Botao
                                        type='submit'
                                    >Transferir</Botao>
                                </form>
                            </>
                            : null
                }
            </dialog>
        </div>

    )
}
