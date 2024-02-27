import styles from './Home.module.css'
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import SwiperDrinksCollection from "pages/Home/SwiperDrinksCollection";
import { useContext } from 'react';
import { CollectionsContext } from 'context/CollectionContext';
import hideDefaultCollectionIfEmpty from 'shared/functions/collection/hideDefaultCollectionIfEmpty';

export default function CollectionsCard() {
    const { collectionsList } = useContext(CollectionsContext);

    let treatedCollectionsList = hideDefaultCollectionIfEmpty(collectionsList);

    return (

        <section className={`${pageStyles.card} ${styles.collections_card}`}>
            <SwiperDrinksCollection collectionsList={treatedCollectionsList ? treatedCollectionsList : collectionsList } />
        </section >
    )
};
