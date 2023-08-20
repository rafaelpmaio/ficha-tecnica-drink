import { DisplayedHeaderContext } from 'context/DisplayedHeaderContext';
import styles from './DynamicMainHeader.module.css'
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css';
import { useContext } from 'react';
import { handleImageFormat } from 'shared/functions/handleImageFormat';

export default function DynamicMainHeader() {
    const {headerInfos} = useContext(DisplayedHeaderContext);

    return (
        <section className={`${pageStyles.card} ${styles.header}`} >
            <img
                className={`${styles.header_img} ${headerInfos.id === 0 ? styles.default_img : styles.collection_img}`}
                src={handleImageFormat(headerInfos.image, 'collections')}
                alt={`Photo of collection ${headerInfos.title}`}
            />
            <span className={styles.header_infos}>
                <h1 className={styles.collection_name}>{headerInfos.title}</h1>
                <p className={styles.collection_description}>{headerInfos.description}</p>
            </span>
        </section>
    )
};