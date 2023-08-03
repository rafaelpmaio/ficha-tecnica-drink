import styles from './CollectionDisplay.module.css';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import headerInfosGetter from '../HomeHeader/headerInfosGetter';
import { Context } from 'App';

interface CollectionDisplayProps {
    collectionName: string,
    collectionImg: string,
    collectionId: number
}

export default function CollectionDisplay({ collectionName, collectionImg, collectionId }: CollectionDisplayProps) {
    let collectionNameWithoutSpecialChars = collectionName.replace(/[^\w]/g, '');

    const [headerInfos, setHeaderInfos] = useContext(Context);

    const cardDisplayRef = React.useRef<HTMLDivElement>(null);
    const handleMouseHover = () => {
        const newHeader = headerInfosGetter(cardDisplayRef);
        return setHeaderInfos !== undefined
            ? setHeaderInfos(newHeader)
            : null
    }

    return (
        <Link to={`/collection/${collectionId}#${collectionNameWithoutSpecialChars}`}>
            <div
                className={`${pageStyles.card} ${styles.collection_display}`}
                ref={cardDisplayRef}
                onMouseEnter={handleMouseHover}
            >
                <img
                    className={styles.collection_img}
                    src={require(`assets/images/collections/${collectionImg}`)}
                    alt={`image from collection ${collectionName}`}
                // collections/${collectionImg}
                />
                <h2>{collectionName}</h2>
            </div>
        </Link>
    )
};