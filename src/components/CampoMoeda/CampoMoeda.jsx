import styles from './CampoMoeda.module.css'

export default function CampoMoeda({ label, valor, setValor, autofoco = false }) {
    
    function aoMudar(evt) {
        let entrada = evt.target.value

        entrada = entrada.replace(/[^0-9,]/g, '')
        entrada = entrada.replace(',','.')

        setValor(Number(entrada))
    }

    return (
        <div className={styles.campo}>
            <div className={styles.label}>{label}</div>

            <label className={styles.inputContainer}>
                <input
                    type='number'
                    className={styles.inputOculto}
                    value={valor}
                    onChange={aoMudar}
                    autoFocus={autofoco}
                />
                
                <div
                    className={styles.input}
                    style={{opacity: valor === 0 ? '0.5' : '1'}}
                >
                    {valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                </div>
            </label>
        </div>
    )
}
