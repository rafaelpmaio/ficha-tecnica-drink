import styles from './Preparation.module.css';
import pageStyles from '../../pages/PaginaInicial.module.css'

import Garnish from '../Garnish';
import Glassware from '../Glassware';
import StepsList from '../StepsList';
import React from 'react';

interface PreparationCardProps {
    listaSteps: string[],
    setListaSteps: (array: string[]) => void,
    garnish: string[],
    setGarnish: (array: string[]) => void,
    glassware: string[],
    setGlassware: (array: string[]) => void
}

export default function PreparationCard({ listaSteps, setListaSteps, garnish, setGarnish, glassware, setGlassware} :PreparationCardProps ) {

    return (
        <section className={`${styles.preparation} ${pageStyles.card}`} >
            <h2>Modo de Preparo</h2>
            <StepsList listaSteps={listaSteps} setListaSteps={setListaSteps}/>
            <Garnish garnish={garnish} setGarnish={setGarnish}/>
            <Glassware glassware={glassware} setGlassware={setGlassware}/>
        </section>
    )
};