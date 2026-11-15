import styles from "@/components/Loading/Loading.module.css";
import { MdCatchingPokemon } from "react-icons/md";

const Loading = ({ loading }) => {
  return (
    <div className={loading ? styles.loading : styles.done}>
      <MdCatchingPokemon className={styles.icon} />
      <p>Carregando...</p>
    </div>
  );
};

export default Loading;
