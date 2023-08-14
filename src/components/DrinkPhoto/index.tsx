import styles from './DrinkPhoto.module.css'
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import drinkLogo from 'assets/images/drink-logo.png';
import Input from 'components/Input';


export default function DrinkPhoto() {
    return (
        <div className={`${pageStyles.card} ${styles.drink_photo_div}`}>
            {/* <img src={drinkLogo} alt="" className={styles.drink_photo} /> */}
            {/* <Input 
                className={styles.drink_photo_input} 
                type='file' 
                id='drink-image' 
                labelText='' 
                value='' 
                onChange={() => {}}
            /> */}
        </div>
    )
};