import styles from './SecServicos.module.css'
import cartao from './cartao.png'
import contaCorrente from './conta_corrente.png'
import contaPj from './conta_pj.png'

export default function SecServicos() {
    return (
        <section className={styles.servicos} id='servicos'>
            <h2 className={styles.titulo}>Serviços</h2>
            
            <ul className={styles.listaServicos}>
                <li>
                    <img
                        className={styles.imagem}
                        src={cartao}
                        alt="uma mulher segurando um cartão de crédito"
                    />
                    <h3 className={styles.subtitulo}>Cartão de crédito</h3>
                </li>
                
                <li>
                    <img
                        className={styles.imagem}
                        src={contaCorrente}
                        alt="um homem sentado com o notebook em seu colo"
                    />
                    <h3 className={styles.subtitulo}>Conta corrente</h3>
                </li>
                
                <li>
                    <img
                        className={styles.imagem}
                        src={contaPj}
                        alt="uma mulher segurando um tablet e uma caneta"
                    />
                    <h3 className={styles.subtitulo}>Conta PJ</h3>
                </li>
            </ul>
        </section>
    )
}
