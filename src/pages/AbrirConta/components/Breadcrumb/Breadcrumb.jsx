import { Link } from 'react-router-dom'
import styles from './Breadcrumb.module.css'
import { NavLink } from 'react-router-dom'

export default function Breadcrumb({passo}) {
    return (
        <nav className={styles.breadcrumb}>
            <Link to='/'>Inicio</Link>
            <span>&gt;</span>
            <NavLink
                to='/abrir-conta/passo1'
                className={({ isActive }) => `
                    ${isActive ? styles.linkDestacado : ''}
                `}
            >Abrir Conta</NavLink>
            {passo >= 2 && 
                <>
                    <span>&gt;</span>
                    <NavLink
                        to='/abrir-conta/passo2'
                        className={({ isActive }) => `
                            ${isActive ? styles.linkDestacado : ''}
                        `}
                    >Abrir Conta</NavLink>
                </>
            }
        </nav>
    )
}
