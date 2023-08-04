import { HeaderContext } from 'App';
import styles from './HomeHeader.module.css'
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css';
import { useContext } from 'react';

export default function HomeHeader() {

    const [headerInfos, setHeaderInfos] = useContext(HeaderContext);

    return (
        <section className={`${pageStyles.card} ${styles.header}`} >
            <img
                className={styles.header_img}
                src={headerInfos?.image}
                alt={`Photo of collection ${headerInfos?.title}`}
            />
            <span>
                <h1>{headerInfos?.title}</h1>
                <p>{headerInfos?.description}</p>
            </span>
        </section>
    )
};