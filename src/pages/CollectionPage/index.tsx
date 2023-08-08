import DrinkDisplay from 'components/DrinkDisplay';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css';
import styles from './CollectionPage.module.css'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CollectionsContext } from 'context/CollectionContext';

export default function CollectionPage() {
    const { collectionsList } = useContext(CollectionsContext);
    const params = useParams();

    let collection = collectionsList.find(collection => collection.id.toString() === params.id)?.IDrinksList;

    return (
        <>
            <section className={`${styles.collectionPage} ${pageStyles.card}`}>
                {collection?.map(drink =>
                    <DrinkDisplay key={drink.id} drinkImage={drink.image} drinkName={drink.name} />)
                }
            </section>
        </>
    )
};