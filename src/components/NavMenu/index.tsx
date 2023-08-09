import styles from "./NavMenu.module.css";
import MenuLink from "../MenuLink";

export default function NavMenu() {

    return (
        <header>
            <nav className={styles.nav}>
                <MenuLink hrefPage="/" > Collections </MenuLink>
                <MenuLink hrefPage="/new_drink" onClick={() => window.location.href='/new_drink'}> New Drink </MenuLink>
            </nav>
        </header>
    )
}