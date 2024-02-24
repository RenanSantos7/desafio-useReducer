import styles from './AbrirConta.module.css'
import Banner from '../../components/Banner/Banner'
import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import CampoForm from '../../components/CampoForm/CampoForm'
import Ciente from './components/Ciente/Ciente'
import Botao from '../../components/Botao/Botao'
import { Cliente } from '../../app/models'
import { useContext, useState } from 'react'
import { RBankContext } from '../../contexts/RBankContext'
import { useNavigate } from 'react-router-dom'

export default function AbrirConta() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [rg, setRg] = useState('')
    const [cpf, setCpf] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [ciente, setCiente] = useState(false)

    const { criarConta } = useContext(RBankContext)
    
    const navegar = useNavigate()

    function submeter(evt) {
        evt.preventDefault()
        const novoCliente = new Cliente(
            nome,
            email,
            rg,
            cpf,
            nascimento,
            ciente
        )
        criarConta(novoCliente)
        navegar('/abrir-conta/confirmacao')
    }

    return (
        <>
            <Banner />
            <div className={styles.container}>
                <Breadcrumb />

                <section className={styles.formulario}>
                    <div className={styles.formCabecalho}>
                        <img
                            src="/img/status-1.png"
                            alt="Etapa um de três"
                        />
                        <h2 className={styles.titulo}>Preencha os campos abaixo para criar sua conta corrente!</h2>
                    </div>

                    <form onSubmit={submeter} className={styles.form}>
                        <CampoForm
                            titulo='Nome'
                            valor={nome}
                            setValor={setNome}
                            obrigatorio = {true}
                        />

                        <CampoForm
                            titulo='Email'
                            tipo='email'
                            valor={email}
                            setValor={setEmail}
                        />

                        <CampoForm
                            titulo='RG'
                            valor={rg}
                            setValor={setRg}
                        />

                        <CampoForm
                            titulo='CPF (só números)'
                            valor={cpf}
                            setValor={setCpf}
                        />

                        <CampoForm
                            titulo='Data de nascimento'
                            valor={nascimento}
                            setValor={setNascimento}
                            tipo='date'
                        />

                        <Ciente
                            valor={ciente}
                            setValor={setCiente}
                        />

                        <div className={styles.botaoSubmeter}>
                            <Botao type='submit'>Criar Conta</Botao>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}
