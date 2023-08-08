import { useContext, useState } from 'react';
import styles from './CollectionDatalist.module.css'
import logo from 'assets/images/drink-logo.png';
import DataList from 'components/DataList';
import { CollectionsContext } from 'context/CollectionContext';

export default function CollectionDatalist() {
    const { collectionsList, datalistSelectedId, copyDatalistSelectedId } = useContext(CollectionsContext)
    const [inputCollectionName, setInputCollectionName] = useState('');

    let selectedCollection = collectionsList.find(collection => collection.id === datalistSelectedId);

    const handleChange = (value: string) => {
        setInputCollectionName(value);
        let selectedItemId = value.substring(0, value.indexOf('.'));
        copyDatalistSelectedId(Number.parseInt(selectedItemId));
        //( setDrinkId(drinkList[drinkList?.length].id + 1) )
    }
    return (
        <div>
            <img
                className={styles.drinkHeaderImage}
                src={selectedCollection?.image !== undefined ? require(`assets/images/collections/${selectedCollection?.image}`) : logo}
                alt={`Image of ${selectedCollection?.name} collection`}
            />
            <DataList
                arr={collectionsList}
                value={inputCollectionName}
                onChange={handleChange}
            />
        </div>

    )
};