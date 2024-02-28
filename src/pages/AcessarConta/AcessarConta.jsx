import styles from './AcessarConta.module.css'
import Botao from '../../components/Botao/Botao'
import Card from '../../components/Card/Card'
import CampoForm from '../../components/CampoForm/CampoForm'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function AcessarConta() {

    const [contaAtual, setContaAtual] = useState()

    const navegar = useNavigate()

    function aoSubmeter(evt) {
        evt.preventDefault()
        navegar(`/conta/${contaAtual}`)
    }


    return (
        <div className={styles.container}>
            <Card titulo='Acessar Conta'>
                <form className={styles.form} onSubmit={aoSubmeter}>
                    <CampoForm
                        titulo='Número da conta'
                        valor={contaAtual}
                        setValor={setContaAtual}
                        min={1}
                    />

                    <CampoForm
                        titulo='Senha'
                        tipo='password'
                        placeholder='Não precisa da senha ela está aqui só por estética'
                        obrigatorio={false}
                    />

                    <div className={styles.botaoContainer}>
                        <Botao type='submit'>Acessar sua conta</Botao>
                    </div>
                </form>
            </Card>

        </div>
    )
}
