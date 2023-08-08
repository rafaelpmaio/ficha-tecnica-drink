import styles from './DrinkDisplay.module.css';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import React, { useContext } from 'react';
import headerInfosGetter from 'components/HomeHeader/headerInfosGetter';
import { DisplayedHeaderContext } from 'context/DisplayedHeaderContext';

interface DrinkDisplayProps {
    drinkImage: string,
    drinkName: string,
}

export default function DrinkDisplay({ drinkImage, drinkName }: DrinkDisplayProps) {
    const {setHeaderInfos} = useContext(DisplayedHeaderContext);
    const cardDisplayRef = React.useRef(null);
    const handleMouseHover = () => {
        const newHeader = headerInfosGetter(cardDisplayRef);
        return setHeaderInfos !== undefined
            ? setHeaderInfos(newHeader)
            : null
    }

    return (
        <div
            className={`${pageStyles.card} ${styles.drinkDisplay}`}
            ref={cardDisplayRef}
            onMouseEnter={handleMouseHover}
        >
            <picture>
                <source type='image/webp' srcSet={ require(`assets/images/drinks/${drinkImage}`)} />
                <img src={ require(`assets/images/drinks/${drinkImage}`)} alt={`image of drink ${drinkName}`} />
            </picture>
            <h2>{drinkName}</h2>
        </div>
    )
};