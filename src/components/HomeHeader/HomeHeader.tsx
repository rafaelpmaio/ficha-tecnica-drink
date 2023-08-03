import { Context } from 'App';
import styles from './HomeHeader.module.css'
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css';
import { useContext } from 'react';

export default function HomeHeader() {

    const [headerInfos, setHeaderInfos] = useContext(Context);

    return (
        <section className={`${pageStyles.card} ${styles.header}`} >
            <img
                className={styles.header_img}
                src={headerInfos?.image}
                alt="Photo of the selected collection"
            />
            <span>
                <h1>{headerInfos?.title}</h1>
                <p>Descrição da coleção aqui</p>
            </span>
            {/* : <h1>COLLECTIONS</h1>} */}

        </section>
    )
};