import styles from './CampoForm.module.css'

export default function CampoForm({
    tipo = 'texto',
    titulo,
    valor,
    setValor
}) {
    return (
        <fieldset className={styles.campo}>
            <label>
                <span className={styles.etiqueta}>{titulo}</span>
                <input
                    type={tipo}
                    minLength={5}
                    required
                    className={styles.input}
                    value={valor}
                    onChange={evt => setValor(evt.target.value)}
                />
            </label>
            <div className={styles.mensagemErro}></div>
        </fieldset>
    )
}
