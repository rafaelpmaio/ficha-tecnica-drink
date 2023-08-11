import { DisplayedHeaderContext } from 'context/DisplayedHeaderContext';
import styles from './DynamicMainHeader.module.css'
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css';
import { useContext } from 'react';

export default function DynamicMainHeader() {

    const {headerInfos} = useContext(DisplayedHeaderContext);

    return (
        <section className={`${pageStyles.card} ${styles.header}`} >
            <img
                className={styles.header_img}
                src={headerInfos?.image}
                alt={`Photo of collection ${headerInfos?.title}`}
            />
            <span className={styles.header_infos}>
                <h1>{headerInfos?.title}</h1>
                <p>{headerInfos?.description}</p>
            </span>
        </section>
    )
};