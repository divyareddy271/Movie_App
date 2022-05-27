import styles from "../styles/Navbar.module.css";

const Navbar = () => {
return (
    <div className={styles.navbar}>
        <div className={styles.searchcontainer}>
            <input>
            </input>
            <button id={styles.searchBtn}>search</button>
        </div>
    </div>
)
}
export default Navbar;
