import styles from './BannerHome.module.css'

export default function BannerHome() {
    return (
        <section className={styles.banner}>
            <div className={styles.bannerWrapper}>
                <h3 className={styles.titulo}>Autonomia e tranquilidade no controle da sua vida financeira!</h3>
            </div>
        </section>
    )
}
