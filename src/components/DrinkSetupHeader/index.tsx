import styles from './DrinkHeader.module.css';
import pageStyle from 'pages/DrinkSetupPage/DrinkSetupPage.module.css'
import CostDisplay from "../CostDisplay";
import DrinkName from "../DrinkName";
import CollectionDatalist from "../CollectionDatalist";

export default function DrinkSetupHeader() {

    return (
        <header className={`${pageStyle.card} ${styles.cabecalho}`}>
                <CollectionDatalist />
                <DrinkName />
                <CostDisplay />
        </header>
    )
};