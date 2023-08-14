import styles from './CollectionDatalist.module.css';
import { useContext, useEffect, useState } from 'react';
import DataList from 'components/DataList';
import { CollectionsContext } from 'context/CollectionContext';
import { DrinkCreationContext } from 'context/DrinkCreationContext';

export default function CollectionDatalist() {
    const { collectionsList, selectedCollection, setSelectedCollection, datalistSelectedId, copyDatalistSelectedId } = useContext(CollectionsContext);
    const { setId, id } = useContext(DrinkCreationContext);
    const [inputCollectionName, setInputCollectionName] = useState('');
    let hideDefaultList = collectionsList;
    if (collectionsList[0].IDrinksList.length === 0) {
        hideDefaultList = collectionsList.filter(collection => collection.id !== 0)
    }
    let searchCollection = collectionsList.find(collection => collection.id === datalistSelectedId);
    if (searchCollection) { setSelectedCollection(searchCollection) }
    let drinkList = selectedCollection.IDrinksList;

    const handleChange = (value: string) => {
        setInputCollectionName(value);
        let selectedItemId = value.substring(0, value.indexOf('.'));
        copyDatalistSelectedId(Number.parseInt(selectedItemId));
    }

    useEffect(() => {
        let lastDrink = drinkList[drinkList.length - 1];
        lastDrink ? setId(lastDrink.id + 1) : setId(1);
    }, [selectedCollection, id])

    return (
        <div className={styles.collection_datalist_div}>
            <img
                className={styles.drink_header_image}
                src={require(`assets/images/collections/${selectedCollection.image}`)}
                alt={`Image of ${selectedCollection.name} collection`}
            />
            <DataList
                arr={hideDefaultList}
                value={inputCollectionName}
                onChange={handleChange}
            />
        </div>

    )
};