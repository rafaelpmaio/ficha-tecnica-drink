import { useContext } from 'react';
import styles from './DrinkDisplay.module.css';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import { HeaderContext } from 'App';
import React from 'react';
import headerInfosGetter from 'components/HomeHeader/headerInfosGetter';

interface DrinkDisplayProps {
    drinkImage: string,
    drinkName: string,
}

export default function DrinkDisplay({ drinkImage, drinkName }: DrinkDisplayProps) {
    const [headerInfos, setHeaderInfos] = useContext(HeaderContext);
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
                <source type='image/webp' srcSet={require(`assets/images/drinks/${drinkImage}`)} />
                <img src={require(`assets/images/drinks/${drinkImage}`)} alt={`image of drink ${drinkName}`} />
            </picture>
            <h2>{drinkName}</h2>
        </div>
    )
};