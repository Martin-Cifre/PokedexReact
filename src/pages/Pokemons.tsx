import styles from "./pokemons.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { fetchPokemon } from "../api/fetchPokemons";
import { Pokemon } from "../types/types";


const Pokemons = () => {
  const [query, SetQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      const allPokemons = await fetchPokemon();
      setPokemons(allPokemons);
    }
    fetchAllPokemons();

  }, []);
  return (
    <>
      <Header query={query} setQuery={SetQuery} />
      <main>
        <nav>
          {pokemons?.slice(0, 151).map((pokemon) => (
            <Link
              key={pokemon.id}
              className={styles.listItem}
              to={`/pokemons/${pokemon.name.toLowerCase()}`}
            >
              <img
                className={styles.listItemIcon}
                src={pokemon.imgSrc}
                alt={pokemon.name}
              />
              <div className={styles.lastItemText}>
                <span>{pokemon.name}</span>
                <span>#{pokemon.id}</span>
              </div>
            </Link>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
