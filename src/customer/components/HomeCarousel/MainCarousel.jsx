import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const responsive = {
    0: { 
        items: 1
    },
    568: { 
        items: 2
    },
    1024: {
        items: 3, 
        itemsFit: 'contain'
    },
};

const items = mainCarouselData.map((item) =><img className='cursor-pointer' src={item.image} alt='' role='presentation' />)

const MainCarousel = () => (
    <AliceCarousel
        mouseTracking
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        items={items}
        responsive={responsive}
        infinite
    />
);

export default MainCarousel;