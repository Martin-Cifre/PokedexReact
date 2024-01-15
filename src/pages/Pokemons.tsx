import { useState } from "react";
import Header from "../components/header";

const Pokemons = () => {
    const [query, SetQuery] = useState("");
    return (
      <>
        <Header query={query} setQuery={SetQuery} />
        <main>
          <h1>POKEMON</h1>
        </main>
        <footer>
          <h2>footer</h2>
        </footer>
      </>
    );
 };

export default Pokemons;