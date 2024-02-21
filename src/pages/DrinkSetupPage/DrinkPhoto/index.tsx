import styles from './DrinkPhoto.module.css'
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import InputFile from 'components/InputFile';
import { useContext } from 'react';
import { DrinkCreationContext } from 'context/DrinkCreationContext';


export default function DrinkPhoto() {

    const { setImage } = useContext(DrinkCreationContext);

    return (
        <InputFile
            classNameSelectionLabel={`${pageStyles.card} ${styles.drink_photo_div}`}
            classNameImage={styles.image}
            classNameInput={styles.input}
            setImage={setImage}
            pictureImageTxt='choose an image'
        />
    )
};