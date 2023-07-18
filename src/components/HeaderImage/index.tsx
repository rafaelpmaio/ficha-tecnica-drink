import styles from './HeaderImage.module.css'
import React from "react";
import logo from './drink-logo.png';


export default function HeaderImage() {
    return (
        <img className={styles.img} src={logo} alt="Logo do aplicativo de drinks" />
    )
};