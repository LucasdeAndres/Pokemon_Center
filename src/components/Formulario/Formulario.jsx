import React, { useEffect, useState } from "react";
import Detalle from "../Detalle/Detalle";
import Input from "../Input/Input";
import pokeball from "../../assets/pokeball_logo_home.png"
import user from "../../assets/usuario.png"
import "./Formulario.css"
import axios from "axios";

/**
 * Componente de formulario.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa el formulario.
 * 
 */


const Formulario = () => {

  const [types, setTypes] = useState([])

  console.log(types);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type/")
      .then(response => {
        setTypes(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
              <Input name="especie" label="Especie" type="text"/>
              <select name="tipos" label="Tipos" >
                <option value="">Seleccione tipo</option>
                {types.map(type =>{
                  return <option key={type.name} value={type.name}>{type.name}</option>
                })}
              </select>
              <Input name="altura" label="Altura" type="text"/>
              <Input name="edad" label="Edad" type="text"/>
            </div>
          </div>
          <Detalle />
      </div>
  );

};

export default Formulario;
