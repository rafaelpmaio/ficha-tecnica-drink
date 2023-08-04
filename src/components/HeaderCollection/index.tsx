import { useState } from 'react';
import styles from './HeaderCollection.module.css'
import logo from './drink-logo.png';
import DataList from 'components/DataList';
import drinksCollections from 'shared/records/DrinksCollection.json'



export default function HeaderCollection() {
    const [ collectionName, setCollectionName ] = useState('');
    const [ selectedId, copySelectedId ] = useState(0);

    let selectedCollection = drinksCollections.find(collection => collection.id === selectedId);
    console.log(selectedId)
    

    return (
        <div>
            <img 
                className={styles.drinkHeaderImage} 
                src={selectedCollection?.image} 
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