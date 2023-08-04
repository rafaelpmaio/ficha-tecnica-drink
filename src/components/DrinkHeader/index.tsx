import styles from './DrinkHeader.module.css';
import pageStyle from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import CostDisplay from "../CostDisplay";
import { IIngredient } from "shared/interfaces/IIngredient";
import DrinkName from "../DrinkName";
import HeaderCollection from "../HeaderCollection";

interface HeaderProps {
    listaIngredientes?: IIngredient[],
    drinkName: string,
    setDrinkName: (name: string) => void
    precoVenda: string,
    setPrecoVenda: (preco: string) => void
}

export default function DrinkHeader({ listaIngredientes, drinkName, setDrinkName, precoVenda, setPrecoVenda }: HeaderProps) {

    return (
        <header className={`${pageStyle.card} ${styles.cabecalho}`}>
            <HeaderCollection />
            <DrinkName drinkName={drinkName} setDrinkName={setDrinkName} />
            <CostDisplay listaItens={listaIngredientes} precoVenda={precoVenda} setPrecoVenda={setPrecoVenda} />
        </header>
    )
};