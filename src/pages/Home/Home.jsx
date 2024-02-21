import BannerHome from './components/BannerHome/BannerHome'
import SecServicos from './components/SecServicos/SecServicos'
import SecConta from './components/SecConta/SecConta'
import Beneficios from './components/Beneficios/Beneficios'

export default function Home() {
    return (
        <>
            <BannerHome />
            <SecServicos />
            <SecConta />
            <Beneficios />
        </>
    )
}
