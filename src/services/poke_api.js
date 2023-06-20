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

// export const getSpecies = () => {  
//     return axios.get("https://pokeapi.co/api/v2/pokemon-species/")
//        .then(response => {
//         return response.data.results;
//        })
//        .catch(error => {
//          console.log(error);
//        });
// }

export const getPokemonList = async (page,limit) => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon-species/', {
        params: {
          offset: (page - 1) * limit,
          limit: limit
        }
      }); // Hacer la solicitud a la primera API para obtener la lista de Pokémon
      const pokemonList = response.data.results; // Obtener la lista de Pokémon de la respuesta
  
      const pokemonDetailsPromises = pokemonList.map(async (pokemon) => {
        const pokemonDetailResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`); // Utilizar el nombre del Pokémon como identificador único en la segunda API
        const pokemonDetails = pokemonDetailResponse.data; // Obtener los detalles del Pokémon de la respuesta
        return {
          name: pokemon.name,
          details: pokemonDetails
        };
      });
  
      const combinedData = await Promise.all(pokemonDetailsPromises); // Esperar a que se completen todas las solicitudes individuales
  
      return combinedData; // Devolver el array de objetos combinados
    } catch (error) {
      console.error('Error al obtener la lista de Pokémon:', error);
      throw error;
    }
  };