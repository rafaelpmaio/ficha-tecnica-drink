import styles from './DrinkDisplay.module.css';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'

interface DrinkDisplayProps{
    drinkImage: string,
    drinkName: string
}

export default function DrinkDisplay( {drinkImage, drinkName }: DrinkDisplayProps){
    return (
        <div className={`${pageStyles.card} ${styles.drinkDisplay}`}>
            <img src={require(`assets/images/drinks/${drinkImage}`)} alt="" />
            <h2>{drinkName}</h2>
        </div>
    )
};