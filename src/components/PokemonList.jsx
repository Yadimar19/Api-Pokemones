import React from "react";

const PokemonList = ({ pokemons, onPokemonClick }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.name}
          onClick={() => onPokemonClick(pokemon)}
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`}
            alt={pokemon.name}
            style={{ width: "100px", height: "100px" }}
          />
          <p style={{ textTransform: "capitalize" }}>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
