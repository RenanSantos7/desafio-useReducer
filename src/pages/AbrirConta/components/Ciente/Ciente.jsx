import styles from './Ciente.module.css'

export default function Ciente({valor, setValor}) {
    
    return (
        <fieldset className={styles.ciente}>
            <input
                type='checkbox'
                checked={valor}
                onChange={() => setValor(!valor)}
                required
            />
            <div className={styles.texto}>
                <p>Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco.</p>
                <p className={styles.mensagemErro}>Você deve aceitar nossos termos antes de continuar.</p>
            </div>
        </fieldset>
    )
}
