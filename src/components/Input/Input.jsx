import React, { useContext, useState } from "react";
import { FormContext } from "../../context/ContextoFormulario";
import PropTypes from "prop-types";

import "./Input.css"



/**
 * Componente de Input reutilizable.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.name - Nombre del input.
 * @param {string} props.label - Etiqueta del input.
 * @param {string} [props.type="text"] - Tipo del input (por defecto: "text").
 * @returns {JSX.Element} Elemento del componente Input.
 */

const Input = ({ name, label, type }) => {


  const { formData, updateFormData } = useContext(FormContext)

  console.log(formData);


    const [input, setInput] = useState("")
    
    console.log(input);
  const onChange = (e) => {
    setInput(e.target.value)
    console.log(e.target.value);
  };

  const onBlur = (e) => {
    e.preventDefault();

    console.log(e.target.id);
    console.log(e.target.value);

    updateFormData(e.target.id, e.target.value)
  };

  return (
    <div className="input_contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={input}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );

};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "email"]),
};

Input.defaultProps = {
  type: "text",
};

export default Input;
