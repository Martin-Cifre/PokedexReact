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
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
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
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
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
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
              alt="bulbasaur"
            />
            <div className={styles.lastItemText}>
              <span>Venaasaur</span>
              <span>#003</span>
            </div>
          </Link>

          <Link className={styles.listItem} to="./">
            <img
              className={styles.listItemIcon}
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
              alt="bulbasaur"
            />
            <div className={styles.lastItemText}>
              <span>Charmander</span>
              <span>#004</span>
            </div>
          </Link>

          <Link className={styles.listItem} to="./">
            <img
              className={styles.listItemIcon}
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
              alt="bulbasaur"
            />
            <div className={styles.lastItemText}>
              <span>Charmeleon</span>
              <span>#005</span>
            </div>
          </Link>

          <Link className={styles.listItem} to="./">
            <img
              className={styles.listItemIcon}
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
              alt="bulbasaur"
            />
            <div className={styles.lastItemText}>
              <span>Charizard</span>
              <span>#006</span>
            </div>
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
