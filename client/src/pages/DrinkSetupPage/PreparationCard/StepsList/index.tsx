import React, { useContext, useState } from "react";
import styles from "./StepsList.module.css";
import pageStyles from "pages/DrinkSetupPage/DrinkSetupPage.module.css";
import Input from "components/Input";
import Button from "components/Button";
import { DrinkCreationContext } from "context/DrinkCreationContext";
import handleDelete from "shared/utils/handleDelete";

export default function StepsList() {
  const [id, setId] = useState(0);
  const [stepInput, setStepInput] = useState("");

  const { steps, setSteps } = useContext(DrinkCreationContext);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    let newStep = {
      id,
      step: stepInput,
    };
    setSteps([...steps, newStep]);
    setId(id + 1);
    setStepInput("");
  };

  return (
    <>
      <h3>Describe the steps</h3>
      <ul>
        {steps.map((step, index) => (
          <li key={step.id} className={styles.steps_list}>
            <b className={styles.step_prefix}>{`Step ${index + 1}:  `}</b>
            {step.step}
            <Button type="delete"  onClick={() => handleDelete(step.id, steps, setSteps)}>x</Button>
          </li>
        ))}
      </ul>
      <span className={pageStyles.input_button_align}>
        <Input
          id="step"
          labelText="Next Step"
          value={stepInput}
          onChange={setStepInput}
          className={styles.input}
        />
        <Button  onClick={handleClick} >+</Button>
      </span>
    </>
  );
}
