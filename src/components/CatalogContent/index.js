import { useState, useEffect } from "react";
import axios from "axios";
import styles from "@/components/CatalogContent/CatalogContent.module.css";
import Loading from "../Loading";
import PokemonCard from "../PokemonCard";

const CatalogContent = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        // Endpoint de LISTAGEM: retorna nome e url de cada Pokémon
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );

        // A url vem como ".../pokemon/25/", então o id é extraído dela
        const list = response.data.results.map((pokemon) => {
          const id = pokemon.url.split("/").filter(Boolean).pop();
          return {
            id,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          };
        });

        setPokemons(list);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  // Filtro de busca por nome ou número
  const filteredPokemons = pokemons.filter(
    (pokemon) =>
      pokemon.name.includes(search.toLowerCase().trim()) ||
      pokemon.id === search.trim()
  );

  return (
    <div className={styles.catalogContent}>
      <div className={styles.title}>
        <h1>Catálogo de Pokémon</h1>
        <p>Os 151 Pokémon da primeira geração</p>
      </div>

      <div className={styles.search}>
        <input
          type="text"
          className="inputPrimary"
          placeholder="Buscar por nome ou número..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Loading loading={loading} />

      {error && (
        <p className={styles.message}>
          Não foi possível carregar os dados. Tente novamente mais tarde.
        </p>
      )}

      {!loading && !error && filteredPokemons.length === 0 && (
        <p className={styles.message}>Nenhum Pokémon encontrado.</p>
      )}

      <div className={styles.cards}>
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default CatalogContent;
