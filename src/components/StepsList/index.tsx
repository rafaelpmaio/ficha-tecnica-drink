import React, { useContext, useState } from 'react';
import styles from './StepsList.module.css';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import Input from '../Input';
import Button from '../Button';
import createStep from './createStep';
import DeleteButton from '../ButtonDelete';
import { DrinkCreationContext } from 'context/DrinkCreationContext';

export default function StepsList() {
    const { stepsList, setStepsList } = useContext(DrinkCreationContext);
    const [stepId, setStepId] = useState(0);
    const [passoInput, setPassoInput] = useState('');
    const functionsExecutedOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setStepsList([...stepsList, newStep]);
        setStepId(stepId + 1);
        setPassoInput('')
    }
    let newStep = createStep(stepId, passoInput);

    return (
        <>
            <h3>Descreva o Passo a Passo</h3>
            <ul>
                {stepsList.map((step, index) =>
                    <li key={step.id} className={styles.steps_list}>
                        <b className={styles.step_prefix}>{`${index + 1}º Passo: `}</b>{step.stepDescription}
                        <DeleteButton
                            itemId={step.id}
                            list={stepsList}
                            setList={setStepsList}
                        />
                    </li>
                )}
            </ul>
            <span className={pageStyles.input_button_align}>
                <Input
                    id='step'
                    labelText='Digite o próximo passo'
                    value={passoInput}
                    onChange={valor => setPassoInput(valor)}
                    className={styles.input}
                />
                <Button value='+' aoClickado={functionsExecutedOnClick} />
            </span>
        </>
    )
};