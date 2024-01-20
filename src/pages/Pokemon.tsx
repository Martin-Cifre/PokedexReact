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
    return (weightInDecigrams * 0.1).toFixed(2);
  };

  const convertToMeters = (heightInDecimeters: number): string => {
    return (heightInDecimeters * 0.1).toFixed(2);
  };

  const getPaddedId = (id: number): string => {
    return id.toString().padStart(3, "0");
  };

  const getTypeClass = (type: string | undefined): string => {
    if (!type) {
      return styles.pokemonType;
    }
    const lowercasedType = type.toLowerCase();
    return styles[lowercasedType] || styles.pokemonType;
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
          <div className={styles.pokemonId}>
            #{pokemon ? getPaddedId(pokemon.id) : ""}
          </div>

          <img
            className={styles.pokemonImg}
            src={pokemon?.imgSrc}
            alt={pokemon?.name}
          />

          <div className={getTypeClass(pokemon?.tipo)}>{pokemon?.tipo}</div>
        <div className={styles.otrosDatos}>
          <div> <b>Altura:</b> {pokemon ? convertToMeters(pokemon.altura) : ""} m</div>
          <div> <b>Peso:</b> {pokemon ? convertToKilograms(pokemon.peso) : ""} kg</div>
        </div>  
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Pokemon;
