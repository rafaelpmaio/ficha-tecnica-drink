import React, { useState } from "react";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import CollectionsCard from "../components/CollectionsCard";
import Button from "../components/Button";
import { IDrinksCollection } from "../shared/interfaces/IDrinksCollection";
import drinksCollection from '../shared/records/DrinksCollection.json'

export default function Home() {

    const [drinksCollectionsList, setDrinksCollectionsList] = useState<IDrinksCollection[]>();

    return (
        <>
            <HomeHeader />
            <CollectionsCard DrinksCollection={drinksCollectionsList} />
            <Button aoClickado={() => { }} value="Criar nova Coleção" />
        </>
    )
};