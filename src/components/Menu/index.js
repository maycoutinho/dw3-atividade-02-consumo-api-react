import { useState } from "react";
import Link from "next/link";
import styles from "@/components/Menu/Menu.module.css";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdCatchingPokemon } from "react-icons/md";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <MdCatchingPokemon />
          <span>Pokédex</span>
        </Link>
      </div>
      <div className={styles.menu}>
        <ul className={`${styles.menuItems} ${isActive ? styles.active : ""}`}>
          <li>
            <Link href="/" onClick={() => setIsActive(false)}>Catálogo</Link>
          </li>
          <li>
            <a href="https://pokeapi.co" target="_blank" rel="noreferrer">PokéAPI</a>
          </li>
        </ul>
      </div>
      <div className={styles.menuBtn}>
        <i onClick={() => setIsActive(!isActive)}>
          {isActive ? <IoClose /> : <FaBars />}
        </i>
      </div>
    </nav>
  );
};

export default Menu;
