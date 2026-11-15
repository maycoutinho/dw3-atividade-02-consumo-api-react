import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import styles from "@/components/DetailsContent/DetailsContent.module.css";
import Loading from "../Loading";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Tradução e cor de cada tipo
const types = {
  normal: { name: "Normal", color: "#A8A77A" },
  fire: { name: "Fogo", color: "#EE8130" },
  water: { name: "Água", color: "#6390F0" },
  electric: { name: "Elétrico", color: "#F7D02C" },
  grass: { name: "Planta", color: "#7AC74C" },
  ice: { name: "Gelo", color: "#96D9D6" },
  fighting: { name: "Lutador", color: "#C22E28" },
  poison: { name: "Venenoso", color: "#A33EA1" },
  ground: { name: "Terra", color: "#E2BF65" },
  flying: { name: "Voador", color: "#A98FF3" },
  psychic: { name: "Psíquico", color: "#F95587" },
  bug: { name: "Inseto", color: "#A6B91A" },
  rock: { name: "Pedra", color: "#B6A136" },
  ghost: { name: "Fantasma", color: "#735797" },
  dragon: { name: "Dragão", color: "#6F35FC" },
  dark: { name: "Sombrio", color: "#705746" },
  steel: { name: "Aço", color: "#B7B7CE" },
  fairy: { name: "Fada", color: "#D685AD" },
};

// Tradução dos status base
const statNames = {
  hp: "HP",
  attack: "Ataque",
  defense: "Defesa",
  "special-attack": "Atq. Especial",
  "special-defense": "Def. Especial",
  speed: "Velocidade",
};

const DetailsContent = ({ id }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError(false);
      try {
        // Endpoint de DETALHE: busca o Pokémon pelo identificador da rota
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setPokemon(response.data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  const currentId = Number(id);

  return (
    <div className={styles.detailsContent}>
      {/* Botão para voltar ao catálogo */}
      <Link href="/" className={`btnPrimary ${styles.backBtn}`}>
        <FaArrowLeft /> Voltar ao catálogo
      </Link>

      <Loading loading={loading} />

      {!loading && error && (
        <p className={styles.message}>Pokémon não encontrado.</p>
      )}

      {!loading && !error && pokemon && (
        <div className={styles.card}>
          {/* COLUNA DA IMAGEM */}
          <div className={styles.imageArea}>
            <span className={styles.number}>
              #{String(pokemon.id).padStart(3, "0")}
            </span>
            <img
              src={
                pokemon.sprites.other["official-artwork"].front_default ||
                pokemon.sprites.front_default
              }
              alt={pokemon.name}
            />
            <h1>{pokemon.name}</h1>
            <div className={styles.types}>
              {pokemon.types.map(({ type }) => (
                <span
                  key={type.name}
                  style={{ backgroundColor: types[type.name]?.color }}
                >
                  {types[type.name]?.name || type.name}
                </span>
              ))}
            </div>

            {/* Sprites normal e shiny */}
            <div className={styles.sprites}>
              <figure>
                <img src={pokemon.sprites.front_default} alt="Sprite normal" />
                <figcaption>Normal</figcaption>
              </figure>
              {pokemon.sprites.front_shiny && (
                <figure>
                  <img src={pokemon.sprites.front_shiny} alt="Sprite shiny" />
                  <figcaption>Shiny</figcaption>
                </figure>
              )}
            </div>
          </div>

          {/* COLUNA DAS INFORMAÇÕES */}
          <div className={styles.infoArea}>
            <h2>Informações</h2>
            <ul className={styles.info}>
              {/* A API retorna altura em decímetros e peso em hectogramas */}
              <li>
                <strong>Altura</strong>
                {(pokemon.height / 10).toLocaleString("pt-br")} m
              </li>
              <li>
                <strong>Peso</strong>
                {(pokemon.weight / 10).toLocaleString("pt-br")} kg
              </li>
              <li>
                <strong>Experiência base</strong>
                {pokemon.base_experience ?? "-"}
              </li>
            </ul>

            <h2>Habilidades</h2>
            <div className={styles.abilities}>
              {pokemon.abilities.map(({ ability, is_hidden }) => (
                <span key={ability.name}>
                  {ability.name.replace("-", " ")}
                  {is_hidden && " (oculta)"}
                </span>
              ))}
            </div>

            <h2>Status base</h2>
            <ul className={styles.stats}>
              {pokemon.stats.map(({ stat, base_stat }) => (
                <li key={stat.name}>
                  <span className={styles.statName}>
                    {statNames[stat.name] || stat.name}
                  </span>
                  <span className={styles.statValue}>{base_stat}</span>
                  <div className={styles.bar}>
                    <div
                      style={{ width: `${Math.min(base_stat / 2, 100)}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Navegação entre Pokémon */}
      {!loading && !error && pokemon && (
        <div className={styles.navigation}>
          <Link
            href={`/pokemon/${currentId - 1}`}
            className={`btnPrimary ${currentId <= 1 ? styles.hidden : ""}`}
          >
            <FaChevronLeft /> Anterior
          </Link>
          <Link
            href={`/pokemon/${currentId + 1}`}
            className={`btnPrimary ${currentId >= 151 ? styles.hidden : ""}`}
          >
            Próximo <FaChevronRight />
          </Link>
        </div>
      )}
    </div>
  );
};

export default DetailsContent;
