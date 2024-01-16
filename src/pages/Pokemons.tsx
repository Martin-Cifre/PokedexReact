import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import pikaEsta from "../assets/esta.jpg";

const Pokemons = () => {
    const [query, SetQuery] = useState("");
    return (
      <>
        <Header query={query} setQuery={SetQuery} />
        <main>
          <img src={pikaEsta} alt="paraTito" />
        </main>
        <Footer />
      </>
    );
 };

export default Pokemons;