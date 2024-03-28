import { useState } from "react";
import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "ivysaur",
    imgSrc:"https://www.pokepedia.fr/images/4/44/Herbizarre-RFVF.png"
  },
  {
    name: "Venusaur",
    imgSrc:"https://www.pokepedia.fr/images/4/42/Florizarre-RFVF.png"
  },
  {
    name: "mew",
  }
];



function App () {
const [pokemonIndex, setPokemonIndex] = useState(0);
const displayPokemon = (index)=> setPokemonIndex(index)  
  return (
    <div className="globalDisplay">
    <NavBar
    pokemonListing={pokemonList}
    displayPokemon={displayPokemon}/>
    <PokemonCard 
    pokemon={pokemonList[pokemonIndex]} />
    </div>
  );

}
export default App;


