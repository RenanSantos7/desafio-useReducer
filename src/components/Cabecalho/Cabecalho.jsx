import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import Logo from '../Logo/Logo'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to='/'>
                <h1 className={styles.logo}>
                    <Logo />
                </h1>
            </Link>
            <ul className={styles.cabecalhoLista}>
                <li>
                    <a>Sobre</a>
                </li>
                <li>
                    <Link to='/servicos'>Serviços</Link>
                </li>
                <li>
                    <input
                        className={styles.pesquisa}
                        type="search"
                        placeholder="Busque aqui"
                    />
                </li>
                <li>
                    <Link
                        to='/abrir-conta/passo1'
                        className={`${styles.botao} ${styles.botaoAzul}`}
                    >Abrir conta</Link>
                </li>
                <li>
                    <Link to='/acessar-conta'>Acessar conta</Link>
                </li>
            </ul>
        </header>
    )
}
