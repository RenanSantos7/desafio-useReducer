import styles from './Beneficios.module.css'

export default function Beneficios() {
    return (
       <>
            <section className={styles.beneficios}>
                <h2 className={styles.titulo}>Mais vantagens do nosso banco:</h2>
                <ul className={styles.lista}>
                    <li className={styles.item}>
                        <span className={`
                            ${styles.icone} 
                            ${styles.iconePresente}
                        `}></span>
                        <h3 className={styles.subtitulo}>Conta e cartão gratuitos</h3>
                        <p>Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.</p>
                    </li>
    
                    <li className={styles.item}>
                        <span className={`
                            ${styles.icone} 
                            ${styles.iconeSaque}
                        `}></span>
                        <h3 className={styles.subtitulo}>Saques sem custo</h3>
                        <p>Você pode sacar gratuitamente quantas vezes quiser de qualquer Banco 24h.</p>
                    </li>
    
                    <li className={styles.item}>
                        <span className={`
                            ${styles.icone} 
                            ${styles.iconeEstrela}
                        `}></span>
                        <h3 className={styles.subtitulo}>Programa de pontos</h3>
                        <p>Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!</p>
                    </li>
    
                    <li className={styles.item}>
                        <span className={`
                            ${styles.icone} 
                            ${styles.iconeGato}
                        `}></span>
                        <h3 className={styles.subtitulo}>Seguro Pet</h3>
                        <p>Seus pets seguros e protegidos por uma mensalidade simbólica, além de descontos em petshops por todo o país.</p>
                    </li>
                </ul>
            </section>
       </>
    )
}
