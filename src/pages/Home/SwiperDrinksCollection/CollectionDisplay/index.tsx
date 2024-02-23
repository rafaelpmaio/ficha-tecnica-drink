import styles from './CollectionDisplay.module.css';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import headerInfosGetterFromDiv from 'components/MainHeader/DynamicHeader/headerInfosGetterFromDiv';
import { DynamicHeaderContext } from 'context/DynamicHeaderContext';
import { handleImageFormat } from 'shared/utils/handleImageFormat';
import { ICollection } from 'shared/interfaces/Collection';
import removeSpecialCharsFromString from 'shared/utils/removeSpecialCharsFromString';


export default function CollectionDisplay({ name, image, id, description }: ICollection) {

    const { setHeaderData: setHeaderInfos } = useContext(DynamicHeaderContext);
    const collectionHtmlDivElement = React.useRef<HTMLDivElement>(null);
    
    const handleMouseHover = () => {
        const header = headerInfosGetterFromDiv(collectionHtmlDivElement);
        setHeaderInfos(header)
    }

    return (
        <Link to={`/collection/${id}#${removeSpecialCharsFromString(name)}`}>
            <div
                className={`${pageStyles.card} ${styles.collection_display}`}
                ref={collectionHtmlDivElement}
                onMouseEnter={handleMouseHover}
            >
                <picture>
                    <source type='image/webp' srcSet={handleImageFormat(image, 'collections')} />
                    <img
                        className={`${styles.collection_img} ${id === 0 ? styles.default_img : styles.selected_collection_img}`}
                        src={handleImageFormat(image, 'collections')}
                        alt={`${name}`}
                    />
                </picture>
                <h2 className={styles.collection_name}>{name}</h2>
                <p>{description}</p>
            </div>
        </Link>
    )
};