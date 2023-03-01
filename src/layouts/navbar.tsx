import Link from "next/link";
import styles from "src/styles/navbar.module.css";

const Navbar = () => {
    return (<>
        <header className={styles.navbar}>
            <Link href="/" className={styles.homeLink}>
                <img src="/icon.png"/>
                <h2>Impage</h2>
            </Link>
            <Link href="/optimizar" className={styles.link}>Optimizar</Link>
        </header>
    </>);
}

export default Navbar;