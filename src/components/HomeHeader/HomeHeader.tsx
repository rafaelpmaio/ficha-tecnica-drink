import React from "react";
import pageStyles from '../../pages/Home.module.css'
import styles from './HomeHeader.module.css'
import collectionPhoto from './drink-logo.png'

export default function HomeHeader() {
    return (
        <section className={`${pageStyles.card} ${styles.header}`} >
            <img className={styles.header_img} src={collectionPhoto} alt="Photo of the selected collection" />
            <span>
                <h1>Collection Name</h1>
                <p>Descrição da coleção aqui</p>
            </span>
        </section>
    )
};