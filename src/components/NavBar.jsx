function NavBar({ pokemonList}) {
    return (
        <div>
            {pokemonList.map((pokemonList) => (
                <button key={pokemonList.name}
                /*onClick={}*/>
                {pokemonList.name} 
                </button>))}
        </div>
     )} ;


export default NavBar;