import styles from './Card.module.css'

export default function Card({children, titulo}) {
    return (
        <article className={styles.card}>
            <h2 className={styles.titulo}>{titulo}</h2>
            {children}
        </article>
    )
}
