import { useState } from "react";
import PokemonCard from "./components/PokemonCard"

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
    name: "mew",
  },
];



function App () {
const [pokemonIndex, setPokemonIndex] = useState(0);
const handleClickS = () => { 
  setPokemonIndex(pokemonIndex + 1);}
const handleClickP = () => { 
  setPokemonIndex(pokemonIndex - 1);}
const buttonPOff = pokemonIndex > 0
const buttonSOff = pokemonIndex < pokemonList.length - 1
  return (
    <div className="globalDisplay">
      <button onClick={handleClickP} disabled={!buttonPOff } >Précedent
</button>

     <PokemonCard pokemon={pokemonList[pokemonIndex]} />
     <button onClick={handleClickS} disabled={!buttonSOff }>Suivant</button>

    </div>
  );

}
export default App;


