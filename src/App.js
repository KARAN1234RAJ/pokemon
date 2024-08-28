// import ApiDemo from "./ApiDemo/ApiDemo";
import PokeThumnail from "./pokemon/PokeThumnail";
import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState({});
  const getAllPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await response.json();
    // console.log("data==", data);
    setLoadPoke(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        // const resp = await fetch(` ${pokemon.url}`);
        const resp = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await resp.json();
        // console.log(data);
        setAllPokemons((current) => [...current, data]);
      });
    }

    createPokemonObject(data.results);
    // console.log("allPokemons", allPokemons);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div id="parent content">
      <div className="app-container">
        <div id="section">
          <div className="content">
            <h2>Pokemon</h2>
            <h2>Pokemon</h2>
          </div>
          <div className="content2">
            <h2>KingDom</h2>
            <h2>KingDom</h2>
          </div>
        </div>
        <div className="app-container">
          <div className="pokemon-container">
            <div className="all-container">
              {/* <PokeThumnail /> */}
              {allPokemons.map((pokemon, index) => (
                <PokeThumnail
                  height={pokemon.height}
                  weight={pokemon.weight}
                  id={pokemon.id}
                  name={pokemon.name}
                  type={pokemon.types[0].type.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                  stat1={pokemon.stats[0].stat.name}
                  stat2={pokemon.stats[1].stat.name}
                  stat3={pokemon.stats[2].stat.name}
                  stat4={pokemon.stats[3].stat.name}
                  stat5={pokemon.stats[4].stat.name}
                  stat6={pokemon.stats[5].stat.name}
                  bs1={pokemon.stats[0].base_stat}
                  bs2={pokemon.stats[1].base_stat}
                  bs3={pokemon.stats[2].base_stat}
                  bs4={pokemon.stats[3].base_stat}
                  bs5={pokemon.stats[4].base_stat}
                  bs6={pokemon.stats[5].base_stat}
                />
              ))}
            </div>
          </div>
        </div>
        <button className="load-more" onClick={() => getAllPokemons()}>
          loadMore...
        </button>
      </div>
    </div>
  );
}

export default App;
