import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/footer";
import styles from './pokemon.module.css';
/*import { fetchPokemon } from "../api/fetchPokemons";*/

const Pokemon = () => {
  const { name } = useParams();
  const navigate = useNavigate();
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
          <div>#004</div>
          <img
            className={styles.pokemonImg}
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
            alt="charmander"
          />

          <div> Tipo: fuego </div>
          <div> Altura: 60 cm </div>
          <div> Peso: 8,5 kg </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Pokemon;
