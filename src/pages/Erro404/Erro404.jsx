import styles from './Erro404.module.css'
import Botao from '../../components/Botao/Botao'
import { useNavigate } from 'react-router-dom'

export default function Erro404() {

    const navegar = useNavigate()

    return (
        <div className={styles.container}>
            <h2>Página não encontrada</h2>

            <p>Não foi possível encontrar a página que você está tentando acessar</p>

            <p>Use o campo de busca para procurar os benefícios que só o RBank te dá ou clique em "Acessar conta".</p>

            <Botao aoClicar={()=>navegar('/')}>Voltar à homepage</Botao>
        </div>
    )
}
