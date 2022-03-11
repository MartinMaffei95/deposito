import CrearArticulos from "./CrearYModificar/CrearArticulos"
import CrearReceta from "./CrearYModificar/CrearReceta"
import ModificarArticulos from "./CrearYModificar/ModificarArticulos"
import ModificarReceta from "./CrearYModificar/ModificarReceta"
import VerDatos from "./VerDatos"

const OficinaSeccion = ({seccion})=>{

    const cargarSeccion = (seccion)=>{
        switch (seccion) {
            case 'CrearArticulo':
                return(<CrearArticulos/>)                
           case 'ModificarArticulo':
                return(<ModificarArticulos/>)
            case 'CrearReceta':
                return(<CrearReceta/>)
            case 'ModificarReceta':
                return(<ModificarReceta/>)
            case 'VerDatos':
                return(<VerDatos/>)
            default:
                <p>Selecciona una opcion</p>
                break;
        }
    }
    
    
    return(
        <>
            {seccion ? (cargarSeccion(seccion)) : (<p>cargando</p>)}
        </>
    )
}

export default OficinaSeccion