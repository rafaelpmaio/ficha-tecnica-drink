import React, { useRef } from "react";
import pageStyles from '../../pages/Home.module.css';
import styles from './Collections.module.css'
import CollectionDisplay from "../CollectionDisplay";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IDrinksCollection } from "../../shared/interfaces/IDrinksCollection";

interface CollectionCardProps {
    DrinksCollection: IDrinksCollection[]
}
export default function CollectionsCard({ DrinksCollection }: CollectionCardProps) {

    return (

        <section className={`${pageStyles.card} ${styles.collections_card}`}>
            <div className="container py-4 px-4 justify-content-center">
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
                            />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div >
        </section >
    )
};