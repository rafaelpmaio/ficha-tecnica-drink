import { useContext, useEffect, useState } from 'react';
import styles from './NewCollectionDiv.module.css';
import pageStyles from '../../pages/DrinkSetupPage/DrinkSetupPage.module.css'
import Input from "components/Input";
import ButtonSubmit from 'components/ButtonSubmit';
import { IDrinksCollection } from 'shared/interfaces/IDrinksCollection';
import { CollectionsContext } from 'context/CollectionContext';
import { useNavigate } from 'react-router-dom';
import { DisplayedHeaderContext } from 'context/DisplayedHeaderContext';
import { IHeader } from 'shared/interfaces/IHeader';
import InputFile from 'components/InputFile';

export default function NewCollectionDiv() {
    const {
        collectionsList,
        collectionId, setCollectionId,
        collectionName, setCollectionName,
        collectionDescription, setCollectionDescription,
        collectionImage, setCollectionImage
    } = useContext(CollectionsContext)
    const { setHeaderInfos } = useContext(DisplayedHeaderContext)
    const navigate = useNavigate();

    let newCollection: IDrinksCollection = {
        id: collectionId,
        name: collectionName,
        image: collectionImage,
        description: collectionDescription,
        IDrinksList: []
    }

    let newHeader: IHeader = {
        image: collectionImage,
        title: collectionName,
        description: collectionDescription
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        collectionsList.push(newCollection)
        setHeaderInfos(newHeader)
        navigate(`/collection/${collectionId}#${newCollection.name}`);
    }

    useEffect(() => setCollectionId(collectionsList.length))

    return (
        <form className={`${pageStyles.card} ${styles.new_collection}`} onSubmit={handleSubmit}>
            <Input
                id="collection_name"
                labelText="Digite o nome da coleção"
                value={collectionName}
                onChange={valor => setCollectionName(valor)}
                className={styles.input}
            />
            <Input
                id="collection_description"
                labelText="Digite a descrição da coleção"
                value={collectionDescription}
                onChange={valor => setCollectionDescription(valor)}
                className={styles.input}
            />
            <InputFile
                setImage={setCollectionImage}
                classNameSelectionLabel={styles.fileSelectionArea}
                classNameImage={styles.image}
                classNameInput={styles.fileInput}
            />
            <ButtonSubmit buttonValue='create collection' className={styles.button} />
        </form>
    )
};