import Head from "next/head";
import { useRouter } from "next/router";
import Menu from "@/components/Menu";
import Container from "@/components/Container";
import DetailsContent from "@/components/DetailsContent";
import Footer from "@/components/Footer";

export default function PokemonDetails() {
  const router = useRouter();
  // Identificador recebido pela rota dinâmica: /pokemon/25
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Pokédex | Detalhes</title>
        <meta name="description" content="Detalhes do Pokémon consumindo a PokéAPI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <Container>
          {/* Só renderiza quando o id já estiver disponível na rota */}
          {id && <DetailsContent id={id} />}
        </Container>
      </main>
      <Footer />
    </>
  );
}
