import styles from './CollectionDisplay.module.css';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import headerInfosGetter from '../DynamicMainHeader/headerInfosGetter';
import { DisplayedHeaderContext } from 'context/DisplayedHeaderContext';

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

    const handleImageFormat = (collectionImage: string) => {
        return String(collectionImage).includes('data:image')
            ? collectionImage
            : require(`assets/images/collections/${collectionImage}`)
    }

    return (
        <Link to={`/collection/${collectionId}#${collectionNameWithoutSpecialChars}`}>
            <div
                className={`${pageStyles.card} ${styles.collection_display}`}
                ref={cardDisplayRef}
                onMouseEnter={handleMouseHover}
            >
                <picture>
                    <source type='image/webp' srcSet={handleImageFormat(collectionImg)} />
                    <img
                        className={styles.collection_img}
                        src={handleImageFormat(collectionImg)}
                        alt={`image from collection ${collectionName}`}
                    />
                </picture>
                <h2>{collectionName}</h2>
                <p>{collectionDescription}</p>
            </div>
        </Link>
    )
};