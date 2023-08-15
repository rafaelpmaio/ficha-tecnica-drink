import { useContext, useState } from 'react';
import styles from './NewCollectionDiv.module.css';
import pageStyles from '../../pages/DrinkSetupPage/DrinkSetupPage.module.css'
import Input from "components/Input";
import ButtonSubmit from 'components/ButtonSubmit';
import { IDrinksCollection } from 'shared/interfaces/IDrinksCollection';
import { CollectionsContext } from 'context/CollectionContext';
import { useNavigate } from 'react-router-dom';
import { DisplayedHeaderContext } from 'context/DisplayedHeaderContext';
import { IHeader } from 'shared/interfaces/IHeader';

export default function NewCollectionDiv() {
    const [collectionName, setCollectionName] = useState('');
    const [collectionDescription, setCollectionDescription] = useState('');
    const { collectionsList } = useContext(CollectionsContext)
    const { setHeaderInfos } = useContext(DisplayedHeaderContext)
    const navigate = useNavigate();

    let newCollection: IDrinksCollection = {
        id: 9,
        name: collectionName,
        image: 'drink-logo.png',
        description: collectionDescription,
        IDrinksList: []
    }

    let newHeader: IHeader = {
        image: require('assets/images/collections/drink-logo.png'),
        title: collectionName,
        description: collectionDescription
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(newCollection)
        collectionsList.push(newCollection)
        setHeaderInfos(newHeader)
        navigate(`/collection/${9}#${newCollection.name}`);
    }

    return (
        <form className={`${pageStyles.card} ${styles.new_collection}`} onSubmit={handleSubmit}>
            <Input
                id="collection_name"
                labelText="Digite o nome da coleção"
                value={collectionName}
                onChange={valor => setCollectionName(valor)}
            />
            <Input
                id="collection_description"
                labelText="Digite a descrição da coleção"
                value={collectionDescription}
                onChange={valor => setCollectionDescription(valor)}
            />
            <Input
                type='file'
                id="collection_image"
                labelText=""
                value=''
                onChange={() => {}}
            />
            <ButtonSubmit buttonValue='create new collection' />
        </form>
    )
};