import Head from "next/head";
import Menu from "@/components/Menu";
import Container from "@/components/Container";
import CatalogContent from "@/components/CatalogContent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokédex | Catálogo</title>
        <meta name="description" content="Catálogo de Pokémon consumindo a PokéAPI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <Container>
          <CatalogContent />
        </Container>
      </main>
      <Footer />
    </>
  );
}
