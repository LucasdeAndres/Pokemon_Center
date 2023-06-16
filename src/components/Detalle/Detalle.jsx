import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { FormContext } from "../../context/ContextoFormulario";
import "./Detalle.css"


/**
 * Componente de Detalle que muestra una vista previa de la solicitud.
 * @returns {JSX.Element} Elemento del componente Detalle.
 */

const Detalle = () => {

  const enviarFormulario = async (data) => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/todos", data, {
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      if (response.status === 201) {
        alert("Solicitud enviada :)");
        return response.data;
      }
    } catch (error) {
      console.error(error);
      alert(`Ocurrio el siguiente error ${error}`)
    }
  };

  const { formData } = useContext(FormContext)

  console.log(formData);

  const mutation = useMutation(enviarFormulario)

  console.log(mutation);

  

  function verificarObjeto(obj) {
    for (let key in obj) {
      console.log(key);
      if (obj[key] === "") {
        return false;
      }
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataForm = verificarObjeto(formData)

    if (dataForm){
      mutation.mutate(formData)
    }else{
      alert(`Por favor completar los datos faltantes`)
    }
  }

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
        <button className="detalle_button" onClick={handleSubmit}>{mutation.isLoading ? "Enviando..." : "Enviar Solicitud"}</button>
      </div>
    </div>
  );
};

export default Detalle;
