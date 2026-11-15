import Link from "next/link";
import styles from "@/components/PokemonCard/PokemonCard.module.css";

const PokemonCard = ({ pokemon }) => {
  return (
    // O card inteiro é clicável e leva para a página de detalhes
    <Link href={`/pokemon/${pokemon.id}`} className={styles.card}>
      <span className={styles.number}>#{String(pokemon.id).padStart(3, "0")}</span>
      <img src={pokemon.image} alt={pokemon.name} loading="lazy" />
      <h3>{pokemon.name}</h3>
    </Link>
  );
};

export default PokemonCard;
