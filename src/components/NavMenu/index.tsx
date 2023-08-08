import styles from "./NavMenu.module.css";
import MenuLink from "../MenuLink";

export default function NavMenu() {

    return (
        <header>
            <nav className={styles.nav}>
                <MenuLink hrefPage="/" > Collections </MenuLink>
                <MenuLink hrefPage="/drink"> New Drink </MenuLink>
            </nav>
        </header>
    )
}