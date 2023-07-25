import React, { useRef } from "react";
import pageStyles from '../../pages/Home.module.css';
import styles from './CollectionsCard.module.css'

import { IDrinksCollection } from "../../shared/interfaces/IDrinksCollection";
import Button from "../Button";
import SwiperDrinksCollection from "../SwiperDrinksCollection";

interface CollectionCardProps {
    DrinksCollection?: IDrinksCollection[]
}
export default function CollectionsCard({ DrinksCollection }: CollectionCardProps) {

    return (

        <section className={`${pageStyles.card} ${styles.collections_card}`}>

            {DrinksCollection
                ? <SwiperDrinksCollection DrinksCollection={DrinksCollection}/>
                : <Button aoClickado={() => { }} value="T" />
            }
        </section >
    )
};