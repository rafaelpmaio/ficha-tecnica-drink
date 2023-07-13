import Garnish from '../Garnish';
import Glassware from '../Glassware';
import StepsList from '../StepsList';
import './Preparation.css';

import React from 'react';

export default function PreparationCard() {

    return (
        <section className='card preparation'>
            <h2>Modo de Preparo</h2>
            <StepsList />
            <Garnish />
            <Glassware />
        </section>
    )
};