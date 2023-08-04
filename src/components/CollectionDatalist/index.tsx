import { useState } from 'react';
import styles from './CollectionDatalist.module.css'
import logo from './drink-logo.png';
import DataList from 'components/DataList';
import drinksCollections from 'shared/records/DrinksCollection.json'

export default function CollectionDatalist() {
    const [ collectionName, setCollectionName ] = useState('');
    const [ selectedId, copySelectedId ] = useState(0);

    let selectedCollection = drinksCollections.find(collection => collection.id === selectedId);
    
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
                setValue={setCollectionName}
                copyId={copySelectedId}/>
        </div>

    )
};