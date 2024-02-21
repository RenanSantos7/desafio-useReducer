import Cabecalho from '../components/Cabecalho/Cabecalho'
import Rodape from '../components/Rodape/Rodape'
import { Outlet } from "react-router-dom"

export default function () {
    return (
        <>
            <Cabecalho />
            <Outlet />
            <Rodape />
        </>
    )
}
