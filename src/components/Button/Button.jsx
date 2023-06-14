import React from 'react'
import PropTypes from 'prop-types';
import "./Button.css"

/**
 * Componente de botón reutilizable.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.text - Texto que se mostrará en el botón.
 * @param {string} props.nameClass - Clase CSS para estilizar el botón.
 * @returns {JSX.Element} Elemento JSX que representa el botón.
 */

export const Button = ({text, nameClass}) => {
  return (
        <button className={nameClass}>
          {text}
        </button>

  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  nameClass: PropTypes.string.isRequired,
};
