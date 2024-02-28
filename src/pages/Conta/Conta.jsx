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
import PainelLateral from './componentes/PainelLateral/PainelLateral'

export default function Conta() {
    const [forceUpdate, setForceUdpate] = useState(false)

    const { contas } = useContext(RBankContext)

    const params = useParams()

    const contaAtual = contas.find(
        conta => (
            conta._id == params.conta
        )
    )

    // 'deposito' | 'saque' | 'transferencia'
    const [operacao, setOperacao] = useState('')

    /* useEffect(() => {
        console.log(contaAtual._extrato)
    }, [contaAtual]) */


    /* if (contas.includes(conta => conta._id === params.conta)) {
        console.error('Conta não encontrada.')
        return <Erro404 />
    } */

    useEffect(() => {
        document.title = `RBank - conta nº ${contaAtual._id}`
    }, [])

    return (
        <>
            <Cabecalho />
            <div className={styles.container}>
                <h2 className={styles.titulo}>Minha conta R</h2>
                <div className={styles.corpo}>
                    <PainelLateral conta={contaAtual} />

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
                                aoClicar={() => setOperacao('transferencia')}
                            >Transferência</Botao>
                        </div>

                        <h3 className={styles.subtitulo}>Extrato</h3>
                        <Extrato contaSelecionada={contaAtual} key={forceUpdate}/>
                    </main>
                </div>
            </div>

            {operacao.length > 0 &&
                <Modal
                    operacao={operacao}
                    aberto={setOperacao}
                    conta={contaAtual}
                    update={forceUpdate}
                    setUpdate={setForceUdpate}
                />
            }
            <Rodape />
        </>
    )
}
