import styles from './DrinkDatasheetPreparation.module.css';
import pageStyle from 'pages/DrinkPage/DrinkPage.module.css';
import { IDrink } from 'shared/interfaces/IDrink';

interface DrinkDatasheetPreparationProps {
    drink: IDrink;
}

export default function DrinkDatasheetPreparation({ drink }: DrinkDatasheetPreparationProps) {
    return (
        <div>
            <h3>STEPS</h3>
            <ul className={styles.list}>
                {drink.steps.map((step, index) =>
                    <li className={styles.step_list_item}>
                        <b className={pageStyle.highlight}>{`Step ${index + 1}: `}</b>{step.step}
                    </li>)}
            </ul>
            <span className={styles.decoration_row}>
                <h3 className={styles.decoration_title}>GARNISH</h3>
                <span>{drink.garnish}</span>
            </span>
            <span className={styles.decoration_row}>
                <h3 className={styles.decoration_title}>GLASSWARE</h3>
                <span> {drink.glassware} </span>
            </span>
        </div>
    )
}