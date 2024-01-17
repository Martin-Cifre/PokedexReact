import styles from "./pokemons.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Pokemons = () => {
  const [query, SetQuery] = useState("");
  return (
    <>
      <Header query={query} setQuery={SetQuery} />
      <main>
        <nav>
          <Link className={styles.listItem} to="./">
            <img
              className={styles.listItemIcon}
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif"
              alt="bulbasaur"
            />
            <div className={styles.lastItemText}>
              <span>Bulbasaur</span>
              <span>#001</span>
            </div>
          </Link>

          <Link className={styles.listItem} to="./">
            <img
              className={styles.listItemIcon}
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/2.gif"
              alt="bulbasaur"
            />
            <div className={styles.lastItemText}>
              <span>Ivisaur</span>
              <span>#002</span>
            </div>
          </Link>

          <Link className={styles.listItem} to="./">
            <img
              className={styles.listItemIcon}
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/3.gif"
              alt="bulbasaur"
            />
            <div className={styles.lastItemText}>
              <span>Venaasaur</span>
              <span>#003</span>
            </div>
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
