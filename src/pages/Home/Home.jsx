import React from "react";
import pokebola from "../../assets/pokeball_logo_home.png";
import logoHome from "../../assets/logo_home.png";
import { Button } from "../../components/Button/Button";
import "./Home.css"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="container_home">
       <div className="home_red"></div>
        <img className="pokeball" alt="logo" src={pokebola} />
        <h1><img className="logo_home" alt="logo Pokemon center" src={logoHome}/></h1>
        <Link to="/formularioIngreso">
        <Button nameClass="button_home" text="Ingresar Pokemon"></Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
