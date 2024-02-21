import styles from './Home.module.css'
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import BannerHome from './components/BannerHome/BannerHome'
import Rodape from '../../components/Rodape/Rodape'
import SecServicos from './components/SecServicos/SecServicos'
import SecConta from './components/SecConta/SecConta'
import Beneficios from './components/Beneficios/Beneficios'

export default function Home() {
    return (
        <>
            <Cabecalho />
            <BannerHome />
            <SecServicos />
            <SecConta />
            <Beneficios />
            <Rodape />
        </>
    )
}
