import styles from './PainelLateral.module.css'

export default function PainelLateral({conta}) {
    return (
        <aside className={styles.painelLateral}>
            <article className={styles.infoConta}>
                <h3>Conta</h3>
                <p>nº {conta._id}</p>
            </article>

            <article className={styles.infoConta}>
                <h3>Titular</h3>
                <p>{conta._titular.nome}</p>
            </article>

            <article className={styles.infoConta}>
                <h3>Saldo</h3>
                <p>{conta._saldo
                    .toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}</p>
            </article>
        </aside>
    )
}
