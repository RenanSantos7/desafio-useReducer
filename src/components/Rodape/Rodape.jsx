import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import styles from './Rodape.module.css'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <section>
                <h2 className={styles.titulo}>O Rbank</h2>
                <ul className={styles.lista}>
                    <li>
                        <a href='${urlPaginas}sobre.html' className={styles.link}>Sobre</a>
                    </li>
                    <li>
                        <a href='${urlPaginas}faq.html' className={styles.link}>Perguntas frequentes</a>
                    </li>
                    <li>
                        <a href='${urlPaginas}carreira.html' className={styles.link}>Carreira</a>
                    </li>
                </ul>
            </section>

            <section className={styles.servicos}>
                <h2 className={styles.titulo}>Serviços</h2>
                <ul className={styles.lista}>
                    <li>
                        <Link to='/conta' className={styles.link}>Conta corrente</Link>
                    </li>
                    <li>
                        <a href='/conta' className={styles.link}>Conta PJ</a>
                    </li>
                    <li>
                        <a href='/cartao' className={styles.link}>Cartão de crédito</a>
                    </li>
                </ul>
            </section>
            <section>
                <h2 className={styles.titulo}>Contato</h2>
                <ul className={styles.lista}>
                    <li>
                        <a href='#' className={styles.link}>0800 040 25 08</a>
                    </li>
                    <li>
                        <a href='#' className={styles.link}>meajuda@rbank.com.br</a>
                    </li>
                    <li>
                        <a href='#' className={styles.link}>ouvidoria@rbank.com.br</a>
                    </li>
                </ul>
            </section>
            
            <section>
                <h2 className={styles.titulo}>Acesse nossas redes</h2>
                <ul className={`
                    ${styles.lista} 
                    ${styles.redesSociais}
                `}>
                    <li>
                        <img src='../../../public/img/Facebook.png' alt='ícone do facebook' />
                    </li>
                    <li>
                        <img src='../../../public/img/Youtube.png' alt='ícone do youtube' />
                    </li>
                    <li>
                        <img src='../../../public/img/Whatsapp.png' alt='ícone do whatsapp' />
                    </li>
                    <li>
                        <img src='../../../public/img/Instagram.png' alt='ícone do instagram' />
                    </li>
                </ul>
                <h2 className={styles.logo}>
                    <Logo />
                </h2>
            </section>
        </footer>
    )
}
