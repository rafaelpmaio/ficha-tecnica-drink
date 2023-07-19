import { IStep } from "../../shared/interfaces/IStep";

export default function createStep(id: number, stepDescription: string) {
    let newStep: IStep = {
        id: id,
        stepDescription: stepDescription
    }
    return newStep;
}