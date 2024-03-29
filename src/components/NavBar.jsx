function NavBar({ pokemonListing, displayPokemon }) {
  return (
    <div>
      {pokemonListing.map((eachPokemon, index) => (
        <button key={eachPokemon.name} onClick={() => displayPokemon(index)}>
          {eachPokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
