import { useContext, useState } from 'react';
import styles from './CollectionDatalist.module.css'
import logo from './drink-logo.png';
import DataList from 'components/DataList';
import drinksCollections from 'shared/records/DrinksCollection.json'
import { DatalistCollectionIdContext } from 'pages/DrinkSetupPage';
import { generateDrinkId } from 'pages/DrinkSetupPage/generateDrinkId';

export default function CollectionDatalist() {
    const [collectionName, setCollectionName] = useState('');
    const [datalistSelectedId, copyDatalistSelectedId] = useContext(DatalistCollectionIdContext);

    let selectedCollection = drinksCollections.find(collection => collection.id === datalistSelectedId);
    const handleChange = (value: string) => {
        setCollectionName(value);
        let itemId = value.substring(0, value.indexOf('.'));
        return copyDatalistSelectedId ? copyDatalistSelectedId(Number.parseInt(itemId)) : '';
    }
    // const newId = generateDrinkId(selectedCollection)

    return (
        <div>
            <img
                className={styles.drinkHeaderImage}
                src={selectedCollection?.image !== undefined ? require(`assets/images/collections/${selectedCollection?.image}`) : logo}
                alt={`Image of ${selectedCollection?.name} collection`}
            />
            <DataList
                arr={drinksCollections}
                value={collectionName}
                onChange={handleChange}
            />
        </div>

    )
};