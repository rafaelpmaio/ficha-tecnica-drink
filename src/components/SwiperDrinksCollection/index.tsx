import React from "react";
import CollectionDisplay from "../CollectionDisplay";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IDrinksCollection } from "shared/interfaces/IDrinksCollection";

interface SwiperDrinksCollectionProps {
    DrinksCollection: IDrinksCollection[]
}

export default function SwiperDrinksCollection({ DrinksCollection }: SwiperDrinksCollectionProps) {
    return (
        <Swiper
            freeMode
            grabCursor
            navigation
            className="mySwiper"
            pagination={{ clickable: true }}
            slidesPerView={4}
            spaceBetween={30}
        >
            {DrinksCollection.map(drinkCollection =>
                <SwiperSlide>
                    <CollectionDisplay
                        collectionName={drinkCollection.collectionName}
                        collectionImg={drinkCollection.collectionImage}
                        collectionId={drinkCollection.id}
                    />
                </SwiperSlide>)
            }
        </Swiper>
    )
};