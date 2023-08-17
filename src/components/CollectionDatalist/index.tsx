import styles from './CollectionDatalist.module.css';
import { useContext, useEffect } from 'react';
import DataList from 'components/DataList';
import { CollectionsContext } from 'context/CollectionContext';
import { DrinkCreationContext } from 'context/DrinkCreationContext';
import { DisplayedHeaderContext } from 'context/DisplayedHeaderContext';
import { handleImageFormat } from 'shared/functions/handleImageFormat';

export default function CollectionDatalist() {
    const { collectionsList } = useContext(CollectionsContext);
    const {
        selectedCollection, setSelectedCollection,
        datalistSelectedId, copyDatalistSelectedId,
        inputCollectionName, setInputCollectionName
    } = useContext(DisplayedHeaderContext);
    const { setId, id } = useContext(DrinkCreationContext);

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
        handleChange(inputCollectionName);
    }, [selectedCollection, id])

    return (
        <div className={styles.collection_datalist_div}>
            <img
                className={styles.drink_header_image}
                src={handleImageFormat(selectedCollection.image, 'collections')}
                alt={`image from collection ${selectedCollection.name}`}
            />
            <DataList
                arr={hideDefaultList}
                value={inputCollectionName}
                onChange={handleChange}
                className={styles.input}
            />
        </div>

    )
};