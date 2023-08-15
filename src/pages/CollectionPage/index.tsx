import DrinkDisplay from 'components/DrinkDisplay';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css';
import styles from './CollectionPage.module.css'
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CollectionsContext } from 'context/CollectionContext';
import Button from 'components/Button';

export default function CollectionPage() {
    const { collectionsList, setInputCollectionName } = useContext(CollectionsContext);
    const params = useParams();

    let collection = collectionsList.find(collection => collection.id.toString() === params.id);
    if (!collection) { collection = collectionsList[0] }
    let drinkList = collection?.IDrinksList
    let collectionId = collection.id;
    let collectionName = collection.name;

    return (
        <>
            <section className={`${styles.collectionPage} ${pageStyles.card}`}>
                {drinkList.length > 0
                    ? drinkList.map(drink =>
                        <DrinkDisplay
                            key={drink.id}
                            collectionId={collectionId}
                            collectionName={collectionName}
                            drinkId={drink.id}
                            drinkName={drink.name}
                            drinkImage={drink.image}
                        />)
                    : <Link to='/new_drink' className={styles.link_first_drink}>
                        <p>let's start with the first drink!</p>
                        <Button
                            value='create drink'
                            aoClickado={() => setInputCollectionName(`${collectionId}. ${collectionName}`)}
                        />
                    </Link>
                }
            </section>
        </>
    )
};