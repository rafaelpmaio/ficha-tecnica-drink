import styles from './CollectionDisplay.module.css';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import React from "react";
import { Link } from "react-router-dom";


interface CollectionDisplayProps {
    collectionName: string,
    collectionImg: string
}

export default function CollectionDisplay({ collectionName, collectionImg }: CollectionDisplayProps) {
    let collectionNameWithoutSpecialChars = collectionName.replace(/[^\w]/g, '');

    return (
        <Link to={`/collection/${collectionNameWithoutSpecialChars}`}>
            <div className={`${pageStyles.card} ${styles.collection_display}`}>
                <img
                    className={styles.collection_img}
                    src={require(`assets/images/drink-logo.png`)}
                    alt={`image from collection ${collectionImg}`}
                />
                <h2>{collectionName}</h2>
            </div>
        </Link>
    )
};