import PropTypes from "prop-types";

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

const photoStyle = {
  width: "100px"
}

const titreCarteStyle ={
  display: "flex",
  justifyContent: "center"
}

function PokemonCard({pokemon}){
   return (
    <>
      <figure style={card}>
        {pokemon.imgSrc ? <img style={photoStyle}src={pokemon.imgSrc}></img> : <p>???</p>}
      </figure>
      <figcaption style={titreCarteStyle}>{pokemon.name}</figcaption>
    </>
   )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
}

export default PokemonCard;
