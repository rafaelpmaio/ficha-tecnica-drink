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
            spaceBetween={30}
            breakpoints={{
                1150: {
                    slidesPerView: 4
                },
                890: {
                    slidesPerView: 3
                },
                700: {
                    slidesPerView: 2
                }
            }}
        >
            {DrinksCollection.map(drinkCollection =>
                <SwiperSlide>
                    <CollectionDisplay
                        collectionName={drinkCollection.name}
                        collectionImg={drinkCollection.image}
                        collectionId={drinkCollection.id}
                        collectionDescription={drinkCollection.description}
                    />
                </SwiperSlide>)
            }
        </Swiper>
    )
};