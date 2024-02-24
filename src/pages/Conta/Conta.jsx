import styles from './Conta.module.css'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { RBankContext } from '../../contexts/RBankContext'
import Erro404 from '../Erro404/Erro404'
import Rodape from '../../components/Rodape/Rodape'
import Cabecalho from './componentes/Cabecalho/Cabecalho'
import Extrato from './componentes/Extrato/Extrato'
import Botao from '../../components/Botao/Botao'
import Modal from './componentes/Modal/Modal'

export default function Conta() {
    const params = useParams()
    const { contas } = useContext(RBankContext)

    const conta = contas.find(conta => (
        conta._id == params.conta
    ))

    // 'deposito' | 'saque' | 'transferencia'
    const [operacao, setOperacao] = useState('')

    useEffect(() => {
        console.log(conta)
    }, [conta])

    if (!conta) {
        return <Erro404 />
    }    

    return (
        <>
            <Cabecalho />
            <div className={styles.container}>
                <h2 className={styles.titulo}>Minha conta R</h2>
                <div className={styles.corpo}>
                    <aside className={styles.painelLateral}>
                        <article className={styles.infoConta}>
                            <h3>Conta</h3>
                            <p>nº {conta._id}</p>
                        </article>

                        <article className={styles.infoConta}>
                            <h3>Titular</h3>
                            <p>{conta._titular.nome}</p>
                        </article>

                        <article className={styles.infoConta}>
                            <h3>Saldo</h3>
                            <p>{conta._saldo
                                .toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })}</p>
                        </article>
                    </aside>

                    <main className={styles.main}>

                        <h3 className={styles.subtitulo}>Operações</h3>
                        <div className={styles.operacoes}>
                            <Botao
                                aoClicar={() => setOperacao('deposito')}
                            >Depósito</Botao>

                            <Botao
                                aoClicar={() => setOperacao('saque')}
                            >Saque</Botao>

                            <Botao
                                aoClicar={() => setOperacao('trasferencia')}
                            >Transferência</Botao>
                        </div>

                        <h3 className={styles.subtitulo}>Extrato</h3>
                        <Extrato contaSelecionada={conta} />
                    </main>
                </div>
            </div>

            {operacao.length > 0 &&
                <Modal
                    operacao={operacao}
                    aberto={setOperacao}
                    conta={conta}
                />
            }
            <Rodape />
        </>
    )
}
