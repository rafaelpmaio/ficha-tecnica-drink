import styles from './DrinkPhoto.module.css'
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import React from 'react';
import logo from './drink-logo.png';


export default function DrinkPhoto() {
    return (
        <img src={logo} alt="" className={`${pageStyles.card} ${styles.drink_photo}`} />
    )
};