import styles from './Botao.module.css'

export default function Botao({children, type='button', aoClicar}) {
    return (
        <button
            type={type}
            className={styles.botao}
            onClick={aoClicar}
        >
            {children}
        </button>
    )
}
