import styles from './Home.module.css'
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import SwiperDrinksCollection from "pages/Home/SwiperDrinksCollection";
import { useContext } from 'react';
import { CollectionsContext } from 'context/CollectionContext';

export default function CollectionsCard() {
    const { collectionsList } = useContext(CollectionsContext);

    let hideDefaultCollection = collectionsList;
    if (collectionsList[0].IDrinksList.length === 0) {
        hideDefaultCollection = collectionsList.filter(collection => collection.id !== 0)
    }

    return (

        <section className={`${pageStyles.card} ${styles.collections_card}`}>
            <SwiperDrinksCollection collectionsList={hideDefaultCollection} />
        </section >
    )
};