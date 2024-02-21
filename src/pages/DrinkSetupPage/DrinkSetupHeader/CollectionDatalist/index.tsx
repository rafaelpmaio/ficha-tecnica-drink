import styles from './CollectionDatalist.module.css';
import { useContext, useEffect } from 'react';
import DataList from 'components/DataList';
import { CollectionsContext } from 'context/CollectionContext';
import { DynamicHeaderContext } from 'context/DisplayedHeaderContext';
import { handleImageFormat } from 'shared/utils/handleImageFormat';
import hideDefaultCollectionIfEmpty from 'shared/utils/hideDefaultCollectionIfEmpty';

export default function CollectionDatalist() {
    const { collectionsList } = useContext(CollectionsContext);
    const {
        selectedCollection, setSelectedCollection,
        datalistSelectedId, setDatalistSelectedId,
        inputCollectionName, setInputCollectionName
    } = useContext(DynamicHeaderContext);
    
    let treatedCollectionsList = hideDefaultCollectionIfEmpty(collectionsList)
    let collection = collectionsList.find(collection => collection.id === datalistSelectedId);
    if (collection) { setSelectedCollection(collection) }
    
    const handleChange = (value: string) => {
        setInputCollectionName(value);
        let selectedItemId = value.substring(0, value.indexOf('.'));
        setDatalistSelectedId(Number.parseInt(selectedItemId));
    }
    
    useEffect(() => {
        handleChange(inputCollectionName);
    }, [])
    
    return (
        <div className={styles.collection_datalist_div}>
            <img
                className={`${styles.drink_header_image} ${selectedCollection.id === 0 ? styles.default_img : styles.collection_img}`}
                src={handleImageFormat(selectedCollection.image, 'collections')}
                alt={`${selectedCollection.name}`}
            />
            <DataList
                arr={treatedCollectionsList ? treatedCollectionsList : collectionsList}
                value={inputCollectionName}
                onChange={handleChange}
                className={styles.input}
            />
        </div>

    )
};


            // const { setId, id } = useContext(DrinkCreationContext);
            // let drinkList = selectedCollection.IDrinksList;
            // let lastDrink = drinkList[drinkList.length - 1];
            // lastDrink ? setId(lastDrink.id + 1) : setId(1);