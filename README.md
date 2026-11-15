# dw3-atividade-02-consumo-api-react

Atividade DW3 - 2º bimestre | Fatec Registro - DSM - Desenvolvimento Web III

Aplicação front-end em **React + Next.js** que consome a **[PokéAPI](https://pokeapi.co)** e exibe os dados em formato de catálogo.

## Funcionalidades

- **Página principal (`/`)**: consome o endpoint de listagem e exibe um catálogo de cards (imagem, número e nome) dos 151 Pokémon da 1ª geração, com busca por nome ou número. Cada card é clicável e leva à página de detalhes.
- **Página de detalhes (`/pokemon/[id]`)**: busca os dados do Pokémon pelo identificador recebido na rota e exibe imagem, tipos, altura, peso, experiência base, habilidades, status base e sprites (normal e shiny). Possui botão para voltar ao catálogo e navegação anterior/próximo.
- Tela de carregamento, tratamento de erro e layout responsivo.

## Endpoints utilizados

| Uso | Endpoint |
| --- | --- |
| Listagem | `https://pokeapi.co/api/v2/pokemon?limit=151` |
| Detalhe por id | `https://pokeapi.co/api/v2/pokemon/{id}` |

## Tecnologias

- Next.js 14 (Pages Router)
- React 18 (useState, useEffect)
- Axios
- React Icons
- CSS Modules

## Como executar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura

```
src/
├── components/
│   ├── CatalogContent/   # Catálogo (consome a listagem)
│   ├── Container/
│   ├── DetailsContent/   # Detalhes (consome o endpoint por id)
│   ├── Footer/
│   ├── Loading/
│   ├── Menu/
│   └── PokemonCard/      # Card clicável
├── pages/
│   ├── pokemon/[id].js   # Rota de detalhes
│   ├── _app.js
│   ├── _document.js
│   └── index.js          # Rota principal
└── styles/globals.css
```
