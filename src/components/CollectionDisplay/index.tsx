import styles from './CollectionDisplay.module.css';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import headerInfosGetter from '../DynamicMainHeader/headerInfosGetter';
import { DisplayedHeaderContext } from 'context/DisplayedHeaderContext';
import { handleImageFormat } from 'shared/functions/handleImageFormat';

interface CollectionDisplayProps {
    collectionName: string,
    collectionImg: string,
    collectionId: number,
    collectionDescription?: string
}

export default function CollectionDisplay({ collectionName, collectionImg, collectionId, collectionDescription }: CollectionDisplayProps) {
    let collectionNameWithoutSpecialChars = collectionName.replace(/[^\w]/g, '');
    const { setHeaderInfos } = useContext(DisplayedHeaderContext);

    const cardDisplayRef = React.useRef<HTMLDivElement>(null);
    const handleMouseHover = () => {
        const newHeader = headerInfosGetter(cardDisplayRef);
        setHeaderInfos(newHeader)
    }

    return (
        <Link to={`/collection/${collectionId}#${collectionNameWithoutSpecialChars}`}>
            <div
                className={`${pageStyles.card} ${styles.collection_display}`}
                ref={cardDisplayRef}
                onMouseEnter={handleMouseHover}
            >
                <picture>
                    <source type='image/webp' srcSet={handleImageFormat(collectionImg, 'collections')} />
                    <img
                        className={`${styles.collection_img} ${collectionId === 0 ? styles.default_img : styles.selected_collection_img}`}
                        src={handleImageFormat(collectionImg, 'collections')}
                        alt={`image from collection ${collectionName}`}
                    />
                </picture>
                <h2 className={styles.collection_name}>{collectionName}</h2>
                <p>{collectionDescription}</p>
            </div>
        </Link>
    )
};