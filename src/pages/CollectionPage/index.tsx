import DrinkDisplay from 'components/DrinkDisplay';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css';
import styles from './CollectionPage.module.css'
import { IDrinksCollection } from 'shared/interfaces/IDrinksCollection';

interface CollectionPageProps {
    drinksCollection?: IDrinksCollection
}

export default function CollectionPage( { drinksCollection } : CollectionPageProps ) {

    return (
       <section className={`${styles.collectionPage} ${pageStyles.card}`}>
        {drinksCollection?.IDrinksList.map(
            drink => <DrinkDisplay drinkImage='assets/images/drink-logo.png' drinkName={drink.name}/>
        )}
       </section>
    )
};