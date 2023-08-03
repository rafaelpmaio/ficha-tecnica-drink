import { useContext } from 'react';
import styles from './DrinkDisplay.module.css';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import { Context } from 'App';
import React from 'react';
import headerInfosGetter from 'components/HomeHeader/headerInfosGetter';

interface DrinkDisplayProps {
    drinkImage: string,
    drinkName: string
}

export default function DrinkDisplay({ drinkImage, drinkName }: DrinkDisplayProps) {
    const [headerInfos, setHeaderInfos] = useContext(Context);
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
            <img src={require(`assets/images/drinks/${drinkImage}`)} alt={`image of drink ${drinkName}`} />
            {/* drinks/${drinkImage} */}
            <h2>{drinkName}</h2>
        </div>
    )
};