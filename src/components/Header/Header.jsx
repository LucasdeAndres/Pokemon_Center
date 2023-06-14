import React from 'react'
import { Link } from 'react-router-dom'
import  logo  from "../../assets/logo_principal.png"
import { Button } from '../Button/Button'
import "./Header.css"

/**
 * Componente de encabezado.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa el encabezado.
 */


export const Header = () => {
  return (
    <div className='header'>
        <div className='header_image'>
            <img src={logo} alt="pokemon center logo with a pokeball"/>
        </div>
        <Link to="/">
        <Button nameClass="home_button_header" text="Home"></Button>
        </Link>
    </div>
  )
}
