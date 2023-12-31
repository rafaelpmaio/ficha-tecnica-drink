import styles from '../PreparationCard/Preparation.module.css';
import { useContext, useEffect, useState } from 'react';
import Input from '../Input';
import { DrinkCreationContext } from 'context/DrinkCreationContext';

export default function Glassware() {
    const { glassware, setGlassware } = useContext(DrinkCreationContext);
    const [glasswareInput, setGlasswareInput] = useState('');

    useEffect(() => setGlassware(glasswareInput))

    return (
        <>
            <h3>Glassware <b className={styles.garnish_glassware_typed}>{glassware}</b></h3> 
            <Input
                id='glassware'
                labelText='Wich glassware will be used?'
                value={glasswareInput}
                onChange={valor => setGlasswareInput(valor)}
                required
                className={styles.input}
            />
        </>
    )
};