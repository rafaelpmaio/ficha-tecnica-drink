import styles from './DrinkPhoto.module.css'
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import React from 'react';
import drinkLogo from 'assets/images/drink-logo.png';


export default function DrinkPhoto() {
    return (
        <div className={`${pageStyles.card} ${styles.drink_photo_div}`}>
            <img src={drinkLogo} alt="" className={styles.drink_photo} />
        </div>
    )
};