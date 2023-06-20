import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState} from 'react'
import { FormContext } from '../../context/ContextoFormulario';
import { getPokemonList, getSpecies } from '../../services/poke_api';
import "./PopUpSpecies.css"

export const PopUpSpecies = () => {
    const { isVisible, togglePopup, updateFormData } = useContext(FormContext);

    const [page, setPage] = useState(1);

    const limit = 20

  const {data: dataSpecies, isLoading: isLoadingSpecies, error: errorSpecies} = useQuery({
    queryKey: ["Species", page, limit],
    queryFn: () => getPokemonList(page, limit)
  })

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };


  if (isLoadingSpecies){
    return <p>Loading....</p>
  }

  if (errorSpecies) {
    return <p>Error: {errorSpecies.message}</p>
  }

  console.log(dataSpecies);

  const onClickSpecies = (e) => {
      e.preventDefault();
      const value = e.target.alt;
      const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
      updateFormData("especie", capitalizedValue);
      console.log(e.target.value);
      togglePopup()
    };

  return (
    <div>
        {isVisible && (
                    <div className='popUpSpecies'>
                    <button onClick={togglePopup}>X</button>
                    <div>
                        {dataSpecies.map(specie => {
                            return <div key={specie.name}>
                                        <button name={specie.name} type="button" onClick={onClickSpecies}>
                                          <img src={specie.details.sprites.front_default} alt={specie.name}></img>
                                        </button>
                                    </div>
                        })}
                    </div>
                    <button onClick={handlePreviousPage} disabled={page === 1}>Anterior</button>
                    <button onClick={handleNextPage}>Siguiente</button>
                </div>
        )}
    </div>    
  )
}
