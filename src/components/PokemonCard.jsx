

const card = {
  width: "200px",
  padding: "1rem",
  backgroundColor: "#90c8ad",
  borderRadius: "5px",
  boxShadow: "0px 0px 5px gray",
  color: "white",
  fontSize: "1.6rem",
  textAlign: "center",
  textShadow: "0px 0px 5px gray",
}

function PokemonCard({pokemon}){
   return (
    <>
      <figure>
        {pokemon.imgSrc ? <img src={pokemon.imgSrc}></img> : <p>???</p>}
      </figure>
      <figcaption>{pokemon.name}</figcaption>
    </>
   )
}


export default PokemonCard;
