import React from "react";
import pageStyles from '../../pages/Home.module.css';
import styles from './CollectionDisplay.module.css';


interface CollectionDisplayProps {
    collectionName: string,
    collectionImg: string
}

export default function CollectionDisplay( { collectionName, collectionImg } : CollectionDisplayProps) {
    return (
        <div className={`${pageStyles.card} ${styles.collection_display}`}>
            <img 
                className={styles.collection_img} 
                src={require('../../assets/images/drink-logo.png')} 
                alt={`image from collection ${collectionImg}`} 
            />
            <h2>{collectionName}</h2>
        </div>
    )
};