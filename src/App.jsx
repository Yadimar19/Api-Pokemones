import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./components/PokemonList";
import SearchBar from "./components/searchBar";
import PokemonDetail from "./components/PokemonDetail";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => setPokemons(response.data.results))
      .catch((error) => console.error("Error al cargar los Pokémon:", error));
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <h1 style={{ textAlign: "center" }}>POKEMON APP</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        {/* Lista de Pokémon */}
        <PokemonList pokemons={filteredPokemons} onPokemonClick={setSelectedPokemon} />

        {/* Detalle del Pokémon en un recuadro */}
        {selectedPokemon && (
          <div
            style={{
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              width: "300px",
              height: "fit-content",
            }}
          >
            <h2>Detalle</h2>
            <PokemonDetail url={selectedPokemon.url} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
