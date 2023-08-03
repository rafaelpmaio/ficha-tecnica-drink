import React, { useState } from "react";
import CollectionsCard from "components/CollectionsCard";
import Button from "components/Button";
import { IDrinksCollection } from "shared/interfaces/IDrinksCollection";
import drinksCollection from 'shared/records/DrinksCollection.json'
import { IHeader } from "shared/interfaces/IHeader";

export default function Home( ) {
    const [drinksCollectionsList, setDrinksCollectionsList] = useState<IDrinksCollection[]>(drinksCollection);

    return (
        <>
            <CollectionsCard DrinksCollection={drinksCollectionsList} />
            <Button aoClickado={() => { }} value="Criar nova Coleção" />
        </>
    )
};