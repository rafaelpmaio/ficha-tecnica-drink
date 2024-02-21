import React, { useContext, useState } from 'react';
import styles from './StepsList.module.css';
import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import Input from 'components/Input';
import Button from 'components/Button';
import createStep from './createStep';
import DeleteButton from 'components/ButtonDelete';
import { DrinkCreationContext } from 'context/DrinkCreationContext';

export default function StepsList() {
    const { steps: stepsList, setSteps } = useContext(DrinkCreationContext);
    const [stepId, setStepId] = useState(0);
    const [passoInput, setPassoInput] = useState('');
    const functionsExecutedOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setSteps([...stepsList, newStep]);
        setStepId(stepId + 1);
        setPassoInput('')
    }
    let newStep = createStep(stepId, passoInput);

    return (
        <>
            <h3>Describe the steps</h3>
            <ul>
                {stepsList.map((step, index) =>
                    <li key={step.id} className={styles.steps_list}>
                        <b className={styles.step_prefix}>{`Step ${index + 1}:  `}</b>{step.stepDescription}
                        <DeleteButton
                            itemId={step.id}
                            list={stepsList}
                            setList={setSteps}
                        />
                    </li>
                )}
            </ul>
            <span className={pageStyles.input_button_align}>
                <Input
                    id='step'
                    labelText='Next Step'
                    value={passoInput}
                    onChange={valor => setPassoInput(valor)}
                    className={styles.input}
                />
                <Button value='+' aoClickado={functionsExecutedOnClick} />
            </span>
        </>
    )
};