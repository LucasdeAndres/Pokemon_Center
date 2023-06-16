import axios from "axios";

export const getTypes = () => {  
     return axios.get("https://pokeapi.co/api/v2/type/")
        .then(response => {
         return response.data.results;
        })
        .catch(error => {
          console.log(error);
        });
}

export const getSpecies = () => {  
    return axios.get("https://pokeapi.co/api/v2/pokemon-species/")
       .then(response => {
        return response.data.results;
       })
       .catch(error => {
         console.log(error);
       });
}