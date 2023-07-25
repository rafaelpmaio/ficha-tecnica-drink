import React, { useState } from "react";
import style from './Home.module.css';
import HomeHeader from "../components/HomeHeader/HomeHeader";
import CollectionsCard from "../components/CollectionsCard";
import Button from "../components/Button";
import { IDrinksCollection } from "../shared/interfaces/IDrinksCollection";

import teste from '../assets/images/drink-logo.png'
import drinksCollection from '../shared/records/DrinksCollection.json'

export default function Home() {

    const testDrinksCollection: IDrinksCollection[] = [
    ]

    const [drinksCollectionsList, setDrinksCollectionsList] = useState<IDrinksCollection[]>(drinksCollection);

    return (
        <>
            <HomeHeader />
            <CollectionsCard DrinksCollection={drinksCollectionsList} />
            <Button aoClickado={() => { }} value="Criar nova Coleção" />
        </>
    )
};