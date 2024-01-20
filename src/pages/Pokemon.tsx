import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPokemon } from "../api/fetchPokemon";
import Footer from "../components/footer";
import styles from "./pokemon.module.css";
import { pokemonDetails } from "../types/types";


const Pokemon = () => {
  const [pokemon, setPokemon] = useState<pokemonDetails>();
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getPokemon() {
      const fetchedPokemon = await fetchPokemon(name as string);
      setPokemon(fetchedPokemon);
    }
    getPokemon();
  }, [name]);

  const convertToKilograms = (weightInDecigrams: number): string => {
    const weightInKilograms = weightInDecigrams * 0.1;
    return weightInKilograms.toFixed(2);
  };

  const convertToMeters = (heightInDecimeters: number): string => {
    const heightInMeters = heightInDecimeters * 0.1;
    return heightInMeters.toFixed(2);
  };

  return (
    <>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <img
          className={styles.pokedexImg}
          width="50"
          height="50"
          src="https://img.icons8.com/officel/80/pokedex.png"
          alt="pokedex"
        />
        Volver
      </button>
      <div className={styles.pokemon}>
        <main className={styles.pokemonInfo}>
          <div className={styles.pokemonName}>{name}</div>
          <div>#{pokemon?.id}</div>
          <img
            className={styles.pokemonImg}
            src={pokemon?.imgSrc}
            alt={pokemon?.name}
          />

          <div> {pokemon?.tipo} </div>
          <div> Altura: {pokemon ? convertToMeters(pokemon.altura) : ""} m</div>
          <div> Peso: {pokemon ? convertToKilograms(pokemon.peso) : ""} kg</div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Pokemon;
