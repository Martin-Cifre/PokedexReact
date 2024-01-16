import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <Link className={styles.footerLink} to="/Pokemons">
          <img
            className={styles.Icon}
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/bullbasaur.png"
            alt="bullbasaur"
          />
          Pokemons
        </Link>

        <Link to="/Items">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/open-pokeball--v2.png"
            alt="open-pokeball--v2"
          />
          Items
        </Link>
        <Link to="/Map">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/pointer.png"
            alt="pointer"
          />
          Mapa
        </Link>
      </footer>
    );
};

export default Footer;

