import React, { useContext } from "react";
import Detalle from "../Detalle/Detalle";
import Input from "../Input/Input";
import pokeball from "../../assets/pokeball_logo_home.png"
import user from "../../assets/usuario.png"
import "./Formulario.css"

import { useQuery } from "@tanstack/react-query";
import { getTypes } from "../../services/poke_api";
import { Select } from "../Select/Select";
import { FormContext } from "../../context/ContextoFormulario";



/**
 * Componente de formulario.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa el formulario.
 * 
 */


const Formulario = () => {

  const { togglePopup } = useContext(FormContext);





  const { data : dataTipos, isLoading: isLoadingTipos, error: errorTipos} = useQuery({
    queryKey: ["tipos"],
    queryFn : getTypes
  })

  if(isLoadingTipos) {
    return <p>Loading...</p>
  }

  if(errorTipos) {
    return <p>Error: {errorTipos.message}</p>
  }





  return (
      <div className="formulario_ingreso">
          <div className="inputs">
            <div className="input">
              <div className="nombre_seccion">
                <img src={user} alt="colorfull user icon" />
                <span>Entrenador</span>
              </div>
              <Input name="nombre" label="Nombre" type="text"/>
              <Input name="apellido" label="Apellido" type="text"/>
              <Input name="email" label="Email" type="email"/>
            </div>
            <div className="input">
              <div className="nombre_seccion">
                <img src={pokeball} alt="pokeball icon" />
                <span>Pokemon</span>
              </div>
              <Input name="nombrePokemon" label="Nombre" type="text"/>
              <button className="buttonSpecies" onClick={togglePopup}>Seleccionar Especie</button>
              {/* <Select name="especie" label="Especie" /> */}
              <Select name="tipos" label="tipos" data={dataTipos} />
              <Input name="altura" label="Altura" type="text"/>
              <Input name="edad" label="Edad" type="text"/>
            </div>
          </div>
          <Detalle />
      </div>
  );

};

export default Formulario;
