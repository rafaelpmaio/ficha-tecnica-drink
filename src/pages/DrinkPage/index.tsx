import styles from './DrinkPage.module.css';
import pageStyles from '../DrinkSetupPage/DrinkSetupPage.module.css'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CollectionsContext } from 'context/CollectionContext';

export default function DrinkPage() {
    const { collectionsList } = useContext(CollectionsContext)
    const params = useParams();
    let collection = collectionsList.find(collection => collection.id.toString() === params.collectionId);
    let drink = collection?.IDrinksList.find(drink => drink.id.toString() === params.drinkId)

    return (
        <main className={`${pageStyles.card} ${styles.drink_page} `}>
            <h1 className={styles.drink_name}>{drink?.name}</h1>
            <div className={styles.cost_div}>
                <p>Sell Price: <b className={styles.highlight}> R${drink?.sellPrice}</b> </p>
                <p>Production Cost: <b className={styles.highlight}> R${drink?.confectionCost} </b> </p>
                <p>Cost Percentage: <b className={styles.highlight}>{drink?.costPercentage}%</b> </p>
            </div>
            <section className={styles.drink_datasheet}>
                <div className={styles.drink_ingredients_div}>
                    <h3>INGREDIENTS</h3>
                    <span className={`${styles.highlight} ${styles.ingredients_row}`}>
                        <b className={styles.amount_column}>QTD</b>
                        <b className={styles.measure_unit_column}>UN</b>
                        <b className={styles.ingredient_column}>Ingrediente</b>
                        <b className={styles.cost_column}>COST</b>
                    </span>
                    <ul className={styles.list}>
                        {drink?.ingredients.map(ingredient =>
                            <li className={styles.ingredients_row}>
                                <b className={styles.amount_column}>{ingredient.quantidade}</b>
                                <b className={styles.measure_unit_column}>{ingredient.medida}</b>
                                <b className={styles.ingredient_column}>{ingredient.ingrediente}</b>
                                <b className={styles.cost_column}>{ingredient.custo}</b>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={styles.drink_preparation_div}>
                    <h3>STEPS</h3>
                    <ul className={styles.list}>
                        {drink?.steps.map((step, index) => <li><b className={styles.highlight}>{`${index + 1}º Passo: `}</b>{step.stepDescription}</li>)}
                    </ul>
                </div>
                <span className={styles.decoration_row}>
                    <h3 className={styles.decoration_title}>GARNISH</h3>
                    <span>{drink?.garnish}</span>
                </span>
                <span className={styles.decoration_row}>
                    <h3 className={styles.decoration_title}>GLASSWARE</h3>
                    <span> {drink?.glassware} </span>
                </span>
            </section>
            <img src={require(`assets/images/drinks/${drink?.image}`)} alt="" className={styles.drink_image} />
        </main>
    )
};