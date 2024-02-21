import styles from './DrinkPage.module.css';
import pageStyles from '../DrinkSetupPage/DrinkSetupPage.module.css'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CollectionsContext } from 'context/CollectionContext';
import { handleImageFormat } from 'shared/utils/handleImageFormat';
import DrinkDatasheetHeader from 'pages/DrinkPage/DrinkDatasheetHeader';
import DrinkDatasheetIngredients from 'pages/DrinkPage/DrinkDatasheetIngredients';
import DrinkDatasheetPreparation from 'pages/DrinkPage/DrinkDatasheetPreparation';

export default function DrinkPage() {
    const { collectionsList } = useContext(CollectionsContext)
    const params = useParams();
    let collection = collectionsList.find(collection => collection.id.toString() === params.collectionId);
    let drink = collection?.drinksList.find(drink => drink.id.toString() === params.drinkId)
    if (!drink) { drink = collectionsList[0].drinksList[0] }

    return (
        <main className={`${pageStyles.card} ${styles.drink_page} `}>
            <DrinkDatasheetHeader drink={drink} />
            <section className={styles.drink_datasheet}>
                <DrinkDatasheetIngredients drink={drink} />
                <DrinkDatasheetPreparation drink={drink} />
            </section>
            <img src={handleImageFormat(drink.image, 'drinks')} alt="" className={styles.drink_image} />
        </main>
    )
};