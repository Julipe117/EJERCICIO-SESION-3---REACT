import React, {useState} from 'react'
import PropTypes from 'prop-types'

function ComponenteB(estado) {
    const [conectado, setConectado] = useState(estado)

    return (
        <div>
            {/* <p> {conectado === false ? "Contacto En Línea":"Contacto No Disponible"}</p>  */}
            <p> {conectado ? "Contacto En Línea":"Contacto No Disponible"}</p> 
            <button onClick={() => setConectado(!conectado)}>{conectado ? "Desconectado":"Conectado"}</button>
        </div>
    )
}

ComponenteB.propTypes = {
    estado: PropTypes.bool,
}

export default ComponenteB
