import styles from './AbrirConta.module.css'
import Banner from '../../components/Banner/Banner'
import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import CampoForm from './components/CampoForm/CampoForm'
import Ciente from './components/Ciente/Ciente'
import Botao from '../../components/Botao/Botao'
import { useState } from 'react'

export default function AbrirConta() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [rg, setRg] = useState('')
    const [cpf, setCpf] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [ciente, setCiente] = useState(false)

    return (
        <>
            <Banner />
            <div className={styles.container}>
                <Breadcrumb />

                <section className={styles.formulario}>
                    <div className={styles.formContainer}>
                        <img
                            src="/img/status-1.png"
                            alt="Etapa um de três"
                        />
                        <h2 className={styles.titulo}>Preencha os campos abaixo para criar sua conta corrente!</h2>
                    </div>

                    <form>
                        <CampoForm
                            titulo='Nome'
                            valor={nome}
                            setValor={setNome}
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
                        />

                        <Ciente />

                        <Botao type='submit' className={styles.botao}>Criar Conta</Botao>
                    </form>
                </section>
            </div>
        </>
    )
}
