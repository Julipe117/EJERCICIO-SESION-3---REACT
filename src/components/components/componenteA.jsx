import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto.class'
import ComponenteB from './componenteB'

function ComponenteA({contacto}) {
  return (
    <div>
        <h1>CONTACTO</h1>
        <p>Nombre: {contacto.nombre}</p>
        <p>Apellido: {contacto.apellido}</p>
        <p>Email: {contacto.email}</p>
        <ComponenteB estado={false}></ComponenteB>
    </div>
  )
}

ComponenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
}

export default ComponenteA
