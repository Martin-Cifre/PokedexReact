import styles from './header.module.css';
import pokeFinder from '../assets/logo.png';

type HeaderProps = {
    query: string;
    setQuery: (query: string) => void;
}

const Header = ({ query, setQuery }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={pokeFinder} alt="logo" />
      <input
        className={styles.input}
        placeholder="Busca un pokemon"
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </header>
  );
};

export default Header;