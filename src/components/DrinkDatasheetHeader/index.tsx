import styles from './DrinkDatasheetHeader.module.css'
import pageStyles from '../../pages/DrinkPage/DrinkPage.module.css'
import { IDrink } from 'shared/interfaces/IDrink'

interface DrinkDatasheetHeaderProps {
    drink: IDrink;
}

export default function DrinkDatasheetHeader({ drink }: DrinkDatasheetHeaderProps) {
    return (
        <section className={styles.drink_header}>
            <h1 className={styles.drink_name}>{drink.name}</h1>
            <div className={styles.cost_div}>
                <p className={styles.cost_line}>Sell Price: <b className={pageStyles.highlight}> R${drink.sellPrice}</b> </p>
                <p className={styles.cost_line}>Production Cost: <b className={pageStyles.highlight}> R${drink.confectionCost} </b> </p>
                <p className={styles.cost_line}>Cost Percentage: <b className={pageStyles.highlight}>{drink.costPercentage}%</b> </p>
            </div>
        </section>
    )
}