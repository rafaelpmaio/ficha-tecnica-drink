import CollectionDisplay from "../CollectionDisplay";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IDrinksCollection } from "shared/interfaces/IDrinksCollection";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

interface SwiperDrinksCollectionProps {
    DrinksCollection: IDrinksCollection[]
}

export default function SwiperDrinksCollection({ DrinksCollection }: SwiperDrinksCollectionProps) {
    return (
        <Swiper
            modules={[Navigation, Scrollbar, Pagination]}
            grabCursor
            scrollbar={{ draggable: true }}
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
                <SwiperSlide key={drinkCollection.id}>
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