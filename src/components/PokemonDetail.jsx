import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonDetail = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setPokemon(response.data))
      .catch((error) => console.error("Error al cargar el Pokémon:", error));
  }, [url]);

  if (!pokemon) {
    return <p>Cargando...</p>;
  }

  return (
    <div style={{ marginTop: "25px", textTransform: "capitalize" }}>
      <h2>{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        style={{ width: "260px", height: "200px" }}
      />
      <p>
        <strong>Altura:</strong> {pokemon.height / 10} m
      </p>
      <p>
        <strong>Peso:</strong> {pokemon.weight / 10} kg
      </p>
      <p>
        <strong>Tipos:</strong>{" "}
        {pokemon.types.map((type) => type.type.name).join(", ")}
      </p>
    </div>
  );
};

export default PokemonDetail;
