import styles from './DrinkPhoto.module.css'
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import React from 'react';
import drinkLogo from 'assets/images/drink-logo.png';


export default function DrinkPhoto() {
    return (
        <img src={drinkLogo} alt="" className={`${pageStyles.card} ${styles.drink_photo}`} />
    )
};