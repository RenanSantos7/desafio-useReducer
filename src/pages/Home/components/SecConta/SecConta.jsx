import { Link } from 'react-router-dom'
import styles from './SecConta.module.css'

export default function SecConta() {
    return (
        <section className={styles.conta}>
            <div className={styles.container}>
                <div></div>
                <div className={styles.wrapper}>
                    <h3 className={styles.subtitulo}>Criar sua conta com a gente é fácil, rápido e sem burocracias. Na tela do seu computador ou celular!</h3>
                    
                    <Link to='/abrir-conta' className={styles.botao}>Quero abrir a minha conta!</Link>
                </div>
            </div>
        </section>
    )
}
