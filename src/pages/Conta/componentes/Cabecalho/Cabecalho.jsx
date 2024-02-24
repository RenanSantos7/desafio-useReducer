import styles from './Cabecalho.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../../../components/Logo/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to='/'>
                <h1 className={styles.logo}>
                    <Logo />
                </h1>
            </Link>

            <Link
                to='/'
                title='Sair da conta e voltar para a home'
            >
                <FontAwesomeIcon
                    className={styles.sair}
                    icon={faArrowRightToBracket}
                />
            </Link>
        </header>
    )
}
