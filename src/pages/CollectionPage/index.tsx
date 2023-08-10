import DrinkDisplay from 'components/DrinkDisplay';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css';
import styles from './CollectionPage.module.css'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CollectionsContext } from 'context/CollectionContext';

export default function CollectionPage() {
    const { collectionsList } = useContext(CollectionsContext);
    const params = useParams();

    let collection = collectionsList.find(collection => collection.id.toString() === params.id);
    if(!collection) {collection = collectionsList[0]}
    let drinkList = collection?.IDrinksList
    let collectionId = collection.id;
    let collectionName = collection.name;

    return (
        <>
            <section className={`${styles.collectionPage} ${pageStyles.card}`}>
                {drinkList.map(drink =>
                    <DrinkDisplay
                        key={drink.id}
                        collectionId={collectionId}
                        collectionName={collectionName}
                        drinkId={drink.id}
                        drinkName={drink.name}
                        drinkImage={drink.image}
                    />)
                }
            </section>
        </>
    )
};