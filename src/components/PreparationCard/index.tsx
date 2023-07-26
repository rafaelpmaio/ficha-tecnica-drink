import styles from './Preparation.module.css';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import Garnish from '../Garnish';
import Glassware from '../Glassware';
import StepsList from '../StepsList';
import React from 'react';
import { IStep } from 'shared/interfaces/IStep';

interface PreparationCardProps {
    stepsList: IStep[],
    setStepsList: (array: IStep[]) => void,
    garnish: string,
    setGarnish: (garnish: string) => void,
    glassware: string,
    setGlassware: (glassware: string) => void
}

export default function PreparationCard({ stepsList, setStepsList, garnish, setGarnish, glassware, setGlassware} :PreparationCardProps ) {

    return (
        <section className={`${styles.preparation} ${pageStyles.card}`} >
            <h2>Modo de Preparo</h2>
            <StepsList stepsList={stepsList} setStepsList={setStepsList}/>
            <Garnish garnish={garnish} setGarnish={setGarnish}/>
            <Glassware glassware={glassware} setGlassware={setGlassware}/>
        </section>
    )
};