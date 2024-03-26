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
  return (
    <div>
     <PokemonCard pokemon={pokemonList[0]} />
     <PokemonCard pokemon={pokemonList[1]} />
     <PokemonCard pokemon={pokemonList[2]} />
    </div>
  );
}

export default App;