import styles from "@/components/Footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContent}>
      <p>Dados fornecidos pela PokéAPI</p>
      <p>Pokédex &copy; 2026 - DW3 Fatec Registro</p>
    </footer>
  );
};

export default Footer;
