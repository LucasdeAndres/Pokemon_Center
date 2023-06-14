import React from 'react'
import Formulario from '../../components/Formulario/Formulario'
import { Header } from '../../components/Header/Header'
import "./FormPage.css"

/**
 * Página del formulario.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la página del formulario.
 */

export const FormPage = () => {
  return (
    <div className='formPage'>
        <Header></Header>
        <div className='body_formPage'>
            <div className='body_formPage_text'>
                <h1>Solicitud de atencion</h1>
                <h3>Favor de completar el formulario para que se pueda atender a su pokemon</h3>
            </div>
            <Formulario></Formulario>
        </div>
    </div>
  )
}
