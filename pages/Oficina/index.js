import { useState } from "react"

import Header from "../../Modules/Header"
import OficinaSeccion from "../../Modules/OficinaSeccion"


const Oficina = ()=>{
    const[seccion, setSeccion] = useState('CrearArticulo')


    return(
        <>
        <Header/>
        <ul className="SelectorSeccion">
            <li onClick={()=>{setSeccion('CrearArticulo')}}>
                <a>Crear Articulos</a>
            </li>
            <li onClick={()=>{setSeccion('ModificarArticulo')}}>
                <a>Modificar Articulos</a>
            </li>
            <li onClick={()=>{setSeccion('CrearReceta')}}>
                <a>Crear Recetas</a>
            </li>
            <li onClick={()=>{setSeccion('ModificarReceta')}}>
                <a>Modificar Recetas</a>
            </li>
            <li onClick={()=>{setSeccion('VerDatos')}}>
                <a>Ver Datos</a>
            </li>
        </ul>
        <OficinaSeccion seccion={seccion}/>
        </>
    )
}

export default Oficina