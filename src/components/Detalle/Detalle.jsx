import React, { useContext } from "react";
import { FormContext } from "../../context/ContextoFormulario";
import {Button} from "../Button/Button"
import "./Detalle.css"


/**
 * Componente de Detalle que muestra una vista previa de la solicitud.
 * @returns {JSX.Element} Elemento del componente Detalle.
 */

const Detalle = () => {

  const { formData } = useContext(FormContext)

  return (
    <div className="detalle_formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos_cliente">
        <h4>Datos del Entrenador</h4>
        <div className="filas">
          <div className="fila1">
            <p>Nombre:</p>
            <p>Apellido:</p>
            <p>Email:</p>
          </div>
          <div className="fila2">
              <p>{formData.nombre === "" ? "TBA" : formData.nombre}</p>
              <p>{formData.apellido === "" ? "TBA" : formData.apellido}</p>
              <p>{formData.email === "" ? "TBA" : formData.email}</p>
        </div>
        </div>
      </section>
      <section className="datos_cliente">
        <h4>Datos del Pokémon</h4>
          <div className="filas">
              <div className="fila1">
              <p>Nombre:</p>
              <p>Especie:</p>
              <p>Tipo:</p>
              <p>Altura:</p>
              <p>Edad:</p>
              </div>
            <div className="fila2">
                <p>{formData.nombrePokemon === "" ? "TBA" : formData.nombrePokemon }</p>
                <p>{formData.especie === "" ? "TBA" : formData.especie }</p>
                <p>{formData.tipos === "" ? "TBA" : formData.tipos }</p>
                <p>{formData.altura === "" ? "TBA" : formData.altura }</p>
                <p>{formData.edad === "" ? "TBA" : formData.edad }</p>
            </div>
        </div>
      </section>
      <div className="button_container">
        <Button text="Enviar Solicitud" nameClass="detalle_button"></Button>
      </div>
    </div>
  );
};

export default Detalle;
