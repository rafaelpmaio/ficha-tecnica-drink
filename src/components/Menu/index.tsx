import styles from "./Menu.module.css";
import React from "react";
import MenuLink from "../MenuLink";

export default function Menu() {

    return (
        <header>
            <nav className={styles.nav}>
                <MenuLink hrefPage="/" > Collections </MenuLink>
                <MenuLink hrefPage="/drink"> New Drink </MenuLink>
            </nav>
        </header>
    )
}