import styles from './Botao.module.css'

export default function Botao({children, type='button'}) {
    return (
        <button type={type} className={styles.botao}>
            {children}
        </button>
    )
}
