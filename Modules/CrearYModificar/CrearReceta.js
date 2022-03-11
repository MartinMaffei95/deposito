const CrearReceta =()=>{
    
    return(
        <>
        <h2>
            Creacion de Receta
        </h2>
            <form>
                <input type="text" placeholder="Nombre"/>
                <input type="text" placeholder="Presentacion"/>
                <input type="number" placeholder="Cantidad por Presentacion"/>
                <input type="number" placeholder="Precio"/>
                <input type="submit"/>
            </form>
        </>
    )

}

export default CrearReceta