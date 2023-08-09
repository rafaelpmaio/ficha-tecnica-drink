import styles from './CollectionsCard.module.css'
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import SwiperDrinksCollection from "../SwiperDrinksCollection";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CollectionsContext } from 'context/CollectionContext';
import { IDrinksCollection } from 'shared/interfaces/IDrinksCollection';

export default function CollectionsCard() {
    const { collectionsList } = useContext(CollectionsContext);

    let hideDefaultCollection = collectionsList;
    if (collectionsList[0].IDrinksList.length === 0) {
        hideDefaultCollection = collectionsList.filter(collection => collection.id !== 0)
    }

    return (

        <section className={`${pageStyles.card} ${styles.collections_card}`}>
            {collectionsList
                ? <SwiperDrinksCollection collectionsList={hideDefaultCollection} />
                : <Link to='/drink'>
                    <h2>Clique aqui e crie seu primeiro Drink!</h2>
                </Link>
            }
        </section >
    )
};