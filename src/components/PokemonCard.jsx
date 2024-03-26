const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  let pokemon = pokemonList[1];
  <figure>
        {pokemonList[1].imgSrc ? <img src={pokemonList[1].imgSrc}></img> : <p>???</p>}
      </figure>
      <figcaption>{pokemon.name}</figcaption>
    </>
    );
  }
}
export default PokemonCard;
