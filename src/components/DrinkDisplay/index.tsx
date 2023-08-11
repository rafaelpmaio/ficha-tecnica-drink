import styles from './DrinkDisplay.module.css';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import React, { useContext } from 'react';
import headerInfosGetter from 'components/DynamicMainHeader/headerInfosGetter';
import { DisplayedHeaderContext } from 'context/DisplayedHeaderContext';
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
    const { setHeaderInfos } = useContext(DisplayedHeaderContext);
    const cardDisplayRef = React.useRef(null);
    const handleMouseHover = () => {
        const newHeader = headerInfosGetter(cardDisplayRef);
        return setHeaderInfos !== undefined
            ? setHeaderInfos(newHeader)
            : null
    }

    return (
        <Link to={`/drink/${collectionId}/${drinkId}#${drinkNameWithoutSpecialChars}`}>
            <div
                className={`${pageStyles.card} ${styles.drinkDisplay}`}
                ref={cardDisplayRef}
                onMouseEnter={handleMouseHover}
            >
                <picture>
                    <source type='image/webp' srcSet={require(`assets/images/drinks/${drinkImage}`)} />
                    <img src={require(`assets/images/drinks/${drinkImage}`)} alt={`image of drink ${drinkName}`} />
                </picture>
                <h2>{drinkName}</h2>
            </div>
        </Link>
    )
};