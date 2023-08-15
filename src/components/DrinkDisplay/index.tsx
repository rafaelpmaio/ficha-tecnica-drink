import styles from './DrinkDisplay.module.css';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import React from 'react';
import { Link } from 'react-router-dom';

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
    const handleFormat = (drinkImage: string) => {
        return String(drinkImage).includes('data:image')
            ? drinkImage
            : require(`assets/images/drinks/${drinkImage}`)
    }


    return (
        <Link to={`/drink/${collectionId}/${drinkId}#${drinkNameWithoutSpecialChars}`}>
            <div
                className={`${pageStyles.card} ${styles.drinkDisplay}`}
                ref={cardDisplayRef}
            >
                <picture>
                    <source
                        type='image/webp'
                        srcSet={handleFormat(drinkImage)}
                    />
                    <img src={handleFormat(drinkImage)} alt={`image of drink ${drinkName}`}
                    />
                </picture>
                <h2>{drinkName}</h2>
            </div>
        </Link>
    )
};