import styles from './DrinkDisplay.module.css';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { handleImageFormat } from 'shared/functions/handleImageFormat';

interface DrinkDisplayProps {
    collectionId: number,
    collectionName: string,
    drinkId: number,
    drinkName: string,
    drinkImage: string,
}

export default function DrinkDisplay({ collectionId, collectionName, drinkId, drinkName, drinkImage }: DrinkDisplayProps) {
    let drinkNameWithoutSpecialChars = drinkName.replace(/[^\w]/g, '');
    const cardDisplayRef = React.useRef(null);

    return (
        <Link to={`/drink/${collectionId}/${drinkId}#${drinkNameWithoutSpecialChars}`}>
            <div
                className={`${pageStyles.card} ${styles.drinkDisplay}`}
                ref={cardDisplayRef}
            >
                <img
                    className={styles.drink_image}
                    src={handleImageFormat(drinkImage, 'drinks')}
                    alt={`image of drink ${drinkName}`}
                />
                <h2 className={styles.drink_name}>{drinkName}</h2>
            </div>
        </Link>
    )
};