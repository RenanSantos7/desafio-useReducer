import styles from './SecServicos.module.css'

export default function SecServicos() {
    return (
        <section className={styles.servicos}>
            <h2 className={styles.titulo}>Serviços</h2>
            
            <ul className={styles.listaServicos}>
                <li>
                    <img
                        className={styles.imagem}
                        src="img/cartao.png"
                        alt="uma mulher segurando um cartão de crédito"
                    />
                    <h3 className={styles.subtitulo}>Cartão de crédito</h3>
                </li>
                
                <li>
                    <img
                        className={styles.imagem}
                        src="img/conta_corrente.png"
                        alt="um homem sentado com o notebook em seu colo"
                    />
                    <h3 className={styles.subtitulo}>Conta corrente</h3>
                </li>
                
                <li>
                    <img
                        className={styles.imagem}
                        src="img/conta_pj.png"
                        alt="uma mulher segurando um tablet e uma caneta"
                    />
                    <h3 className={styles.subtitulo}>Conta PJ</h3>
                </li>
            </ul>
        </section>
    )
}
