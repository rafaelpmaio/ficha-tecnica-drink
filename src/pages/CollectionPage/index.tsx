import DrinkDisplay from 'components/DrinkDisplay';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css';
import styles from './CollectionPage.module.css'
import { IDrinksCollection } from 'shared/interfaces/IDrinksCollection';
import { useParams } from 'react-router-dom';

interface CollectionPageProps {
    drinksCollections?: IDrinksCollection[]
}

export default function CollectionPage({ drinksCollections }: CollectionPageProps) {
    const params = useParams();

    let collection =
        drinksCollections
            ? drinksCollections.find(collection => collection.id.toString() === params.id)?.IDrinksList
            : []

    return (
        <>
            <section className={`${styles.collectionPage} ${pageStyles.card}`}>
                {collection?.map(drink =>
                    <DrinkDisplay drinkImage='assets/images/drink-logo.png' drinkName={drink.name} />)
                }
            </section>
        </>
    )
};