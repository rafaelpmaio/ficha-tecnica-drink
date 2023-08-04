import styles from './CollectionsCard.module.css'
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import { IDrinksCollection } from "shared/interfaces/IDrinksCollection";
import SwiperDrinksCollection from "../SwiperDrinksCollection";
import { Link } from "react-router-dom";

interface CollectionCardProps {
    DrinksCollection?: IDrinksCollection[]
}
export default function CollectionsCard({ DrinksCollection }: CollectionCardProps) {

    return (

        <section className={`${pageStyles.card} ${styles.collections_card}`}>
            {DrinksCollection
                ? <SwiperDrinksCollection DrinksCollection={DrinksCollection}/>
                : <Link to='/drink'>
                    <h2>Clique aqui e crie seu primeiro Drink!</h2>
                </Link>
            }
        </section >
    )
};