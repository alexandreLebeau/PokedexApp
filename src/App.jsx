import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import { useEffect } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const displayPokemon = (index) => setPokemonIndex(index);
  useEffect(() => {
    console.log("Hello Pokemon trainer !");
  }, []);
  if (pokemonIndex == 24) {
    console.log("pika pika");
  }
  return (
    <div className="globalDisplay">
      <NavBar
        className="navBtn"
        pokemonListing={pokemonList}
        displayPokemon={displayPokemon}
      />
      <PokemonCard className="pokeCard" pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}
export default App;

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc: "https://www.pokepedia.fr/images/e/ef/Bulbizarre-RFVF.png",
  },
  {
    name: "Ivysaur",
    imgSrc: "https://www.pokepedia.fr/images/4/44/Herbizarre-RFVF.png",
  },
  {
    name: "Venusaur",
    imgSrc: "https://www.pokepedia.fr/images/4/42/Florizarre-RFVF.png",
  },
  {
    name: "Charmander",
    imgSrc: "https://www.pokepedia.fr/images/8/89/Salam%C3%A8che-RFVF.png",
  },
  {
    name: "Charmeleon",
    imgSrc: "https://www.pokepedia.fr/images/3/3b/Reptincel-RFVF.png",
  },
  {
    name: "Charizard",
    imgSrc: "https://www.pokepedia.fr/images/9/9b/Dracaufeu-RFVF.png",
  },
  {
    name: "Squirtle",
    imgSrc: "https://www.pokepedia.fr/images/9/98/Carapuce-RFVF.png",
  },
  {
    name: "Wartortle",
    imgSrc: "https://www.pokepedia.fr/images/5/53/Carabaffe-RFVF.png",
  },
  {
    name: "Blastoise",
    imgSrc: "https://www.pokepedia.fr/images/4/42/Tortank-RFVF.png",
  },
  {
    name: "Caterpie",
    imgSrc: "https://www.pokepedia.fr/images/6/61/Chenipan-RFVF.png",
  },
  {
    name: "Metapod",
    imgSrc: "https://www.pokepedia.fr/images/8/8b/Chrysacier-RFVF.png",
  },
  {
    name: "Butterfree",
    imgSrc: "https://www.pokepedia.fr/images/8/8a/Papilusion-RFVF.png",
  },
  {
    name: "Weedle",
    imgSrc: "https://www.pokepedia.fr/images/f/f9/Aspicot-RFVF.png",
  },
  {
    name: "Kakuna",
    imgSrc: "https://www.pokepedia.fr/images/2/2d/Coconfort-RFVF.png",
  },
  {
    name: "Beedrill",
    imgSrc: "https://www.pokepedia.fr/images/4/4e/Dardargnan-RFVF.png",
  },
  {
    name: "Pidgey",
    imgSrc: "https://www.pokepedia.fr/images/7/71/Roucool-RFVF.png",
  },
  {
    name: "Pidgeotto",
    imgSrc: "https://www.pokepedia.fr/images/e/e5/Roucoups-RFVF.png",
  },
  {
    name: "Pidgeot",
    imgSrc: "https://www.pokepedia.fr/images/0/06/Roucarnage-RFVF.png",
  },
  {
    name: "Rattata",
    imgSrc: "https://www.pokepedia.fr/images/1/16/Rattata-RFVF.png",
  },
  {
    name: "Raticate",
    imgSrc: "https://www.pokepedia.fr/images/a/a8/Rattatac-RFVF.png",
  },
  {
    name: "Spearow",
    imgSrc: "https://www.pokepedia.fr/images/5/5c/Piafabec-RFVF.png",
  },
  {
    name: "Fearow",
    imgSrc: "https://www.pokepedia.fr/images/8/89/Rapasdepic-RFVF.png",
  },
  {
    name: "Ekans",
    imgSrc: "https://www.pokepedia.fr/images/f/fc/Arbok-RFVF.png",
  },
  {
    name: "Arbok",
    imgSrc: "https://www.pokepedia.fr/images/0/05/Arbok-RFVF.png",
  },
  {
    name: "Pikachu",
    imgSrc: "https://www.pokepedia.fr/images/0/0d/Pikachu-RFVF.png",
  },
  {
    name: "Raichu",
    imgSrc: "https://www.pokepedia.fr/images/8/89/Raichu-RFVF.png",
  },
  {
    name: "Sandshrew",
    imgSrc: "https://www.pokepedia.fr/images/4/4d/Sabelette-RFVF.png",
  },
  {
    name: "Sandslash",
    imgSrc: "https://www.pokepedia.fr/images/0/02/Sablaireau-RFVF.png",
  },
  {
    name: "Nidoran♀",
    imgSrc: "https://www.pokepedia.fr/images/8/83/Nidoran_F-RFVF.png",
  },
  {
    name: "Nidorina",
    imgSrc: "https://www.pokepedia.fr/images/9/94/Nidorina-RFVF.png",
  },
  {
    name: "Nidoqueen",
    imgSrc: "https://www.pokepedia.fr/images/d/da/Nidoqueen-RFVF.png",
  },
  {
    name: "Nidoran♂",
    imgSrc: "https://www.pokepedia.fr/images/7/7a/Nidoran_M-RFVF.png",
  },
  {
    name: "Nidorino",
    imgSrc: "https://www.pokepedia.fr/images/2/28/Nidorino-RFVF.png",
  },
  {
    name: "Nidoking",
    imgSrc: "https://www.pokepedia.fr/images/7/74/Nidoking-RFVF.png",
  },
  {
    name: "Clefairy",
    imgSrc: "https://www.pokepedia.fr/images/f/fd/M%C3%A9lodelfe-RFVF.png",
  },
  {
    name: "Clefable",
    imgSrc: "https://www.pokepedia.fr/images/a/a0/Grodoudou-RFVF.png",
  },
  {
    name: "Vulpix",
    imgSrc: "https://www.pokepedia.fr/images/5/5b/Goupix-RFVF.png",
  },
  {
    name: "Ninetales",
    imgSrc: "https://www.pokepedia.fr/images/9/9e/Fourbe_RFVF.png",
  },
  {
    name: "Jigglypuff",
    imgSrc: "https://www.pokepedia.fr/images/3/35/Rondoudou-RFVF.png",
  },
  {
    name: "Wigglytuff",
    imgSrc: "https://www.pokepedia.fr/images/3/33/Grodoudou-RFVF.png",
  },
  {
    name: "Zubat",
    imgSrc: "https://www.pokepedia.fr/images/0/0b/Nosferapti-RFVF.png",
  },
  {
    name: "Golbat",
    imgSrc: "https://www.pokepedia.fr/images/4/44/Nosferalto-RFVF.png",
  },
  {
    name: "Oddish",
    imgSrc: "https://www.pokepedia.fr/images/4/45/Mystherbe-RFVF.png",
  },
  {
    name: "Gloom",
    imgSrc: "https://www.pokepedia.fr/images/1/1a/Ortide-RFVF.png",
  },
  {
    name: "Vileplume",
    imgSrc: "https://www.pokepedia.fr/images/0/08/Rafflesia-RFVF.png",
  },
  {
    name: "Paras",
    imgSrc: "https://www.pokepedia.fr/images/4/49/Paras-RFVF.png",
  },
  {
    name: "Parasect",
    imgSrc: "https://www.pokepedia.fr/images/a/a3/Parasect-RFVF.png",
  },
  {
    name: "Venonat",
    imgSrc: "https://www.pokepedia.fr/images/7/79/Mimitoss-RFVF.png",
  },
  {
    name: "Venomoth",
    imgSrc: "https://www.pokepedia.fr/images/5/55/A%C3%A9romite-RFVF.png",
  },
  {
    name: "Diglett",
    imgSrc: "https://www.pokepedia.fr/images/2/2a/Taupiqueur-RFVF.png",
  },
  {
    name: "Dugtrio",
    imgSrc: "https://www.pokepedia.fr/images/f/f5/Triopikeur-RFVF.png",
  },
  {
    name: "Meowth",
    imgSrc: "https://www.pokepedia.fr/images/2/27/Miaouss-RFVF.png",
  },
  {
    name: "Persian",
    imgSrc: "https://www.pokepedia.fr/images/7/75/Persian-RFVF.png",
  },
  {
    name: "Psyduck",
    imgSrc: "https://www.pokepedia.fr/images/a/a6/Psykokwak-RFVF.png",
  },
  {
    name: "Golduck",
    imgSrc: "https://www.pokepedia.fr/images/3/36/Akwakwak-RFVF.png",
  },
  {
    name: "Mankey",
    imgSrc: "https://www.pokepedia.fr/images/7/7b/F%C3%A9rosinge-RFVF.png",
  },
  {
    name: "Primeape",
    imgSrc: "https://www.pokepedia.fr/images/1/1b/Colossinge-RFVF.png",
  },
  {
    name: "Growlithe",
    imgSrc: "https://www.pokepedia.fr/images/0/03/Caninos-RFVF.png",
  },
  {
    name: "Arcanine",
    imgSrc: "https://www.pokepedia.fr/images/9/94/Arcanin-RFVF.png",
  },
  {
    name: "Poliwag",
    imgSrc: "https://www.pokepedia.fr/images/4/42/Ptitard-RFVF.png",
  },
  {
    name: "Poliwhirl",
    imgSrc: "https://www.pokepedia.fr/images/7/74/T%C3%A9tarte-RFVF.png",
  },
  {
    name: "Poliwrath",
    imgSrc: "https://www.pokepedia.fr/images/8/83/Tartard-RFVF.png",
  },
  {
    name: "Abra",
    imgSrc: "https://www.pokepedia.fr/images/3/36/Abra-RFVF.png",
  },
  {
    name: "Kadabra",
    imgSrc: "https://www.pokepedia.fr/images/a/a7/Kadabra-RFVF.png",
  },
  {
    name: "Alakazam",
    imgSrc: "https://www.pokepedia.fr/images/5/5e/Alakazam-RFVF.png",
  },
  {
    name: "Machop",
    imgSrc: "https://www.pokepedia.fr/images/7/7b/Machoc-RFVF.png",
  },
  {
    name: "Machoke",
    imgSrc: "https://www.pokepedia.fr/images/3/32/Machopeur-RFVF.png",
  },
  {
    name: "Machamp",
    imgSrc: "https://www.pokepedia.fr/images/9/9b/Mackogneur-RFVF.png",
  },
  {
    name: "Bellsprout",
    imgSrc: "https://www.pokepedia.fr/images/0/0f/Ch%C3%A9tiflor-RFVF.png",
  },
  {
    name: "Weepinbell",
    imgSrc: "https://www.pokepedia.fr/images/2/2b/Boustiflor-RFVF.png",
  },
  {
    name: "Victreebel",
    imgSrc: "https://www.pokepedia.fr/images/9/9b/Empiflor-RFVF.png",
  },
  {
    name: "Tentacool",
    imgSrc: "https://www.pokepedia.fr/images/9/92/Tentacool-RFVF.png",
  },
  {
    name: "Tentacruel",
    imgSrc: "https://www.pokepedia.fr/images/3/36/Tentacruel-RFVF.png",
  },
  {
    name: "Geodude",
    imgSrc: "https://www.pokepedia.fr/images/f/fd/Racaillou-RFVF.png",
  },
  {
    name: "Graveler",
    imgSrc: "https://www.pokepedia.fr/images/e/e0/Gravalanch-RFVF.png",
  },
];
