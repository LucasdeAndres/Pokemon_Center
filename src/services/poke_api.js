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