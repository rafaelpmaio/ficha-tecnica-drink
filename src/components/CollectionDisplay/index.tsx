import styles from './CollectionDisplay.module.css';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import React from "react";
import { Link } from "react-router-dom";


interface CollectionDisplayProps {
    collectionName: string,
    collectionImg: string,
    collectionId: number
}

export default function CollectionDisplay({ collectionName, collectionImg, collectionId }: CollectionDisplayProps) {
    let collectionNameWithoutSpecialChars = collectionName.replace(/[^\w]/g, '');

    return (
        <Link to={`/collection/${collectionId}#${collectionNameWithoutSpecialChars}`}>
            <div className={`${pageStyles.card} ${styles.collection_display}`}>
                <img
                    className={styles.collection_img}
                    src={require(`assets/images/collections/${collectionImg}`)}
                    alt={`image from collection ${collectionName}`}
                />
                <h2>{collectionName}</h2>
            </div>
        </Link>
    )
};