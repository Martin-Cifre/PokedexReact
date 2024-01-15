import styles from './header.module.css';

const Header = () => {
return (
    <header className={styles.pepe}>
        <input placeholder="Busca un pokemon" type="text"/>
    </header>

)
}

export default Header;