import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import CarouselDisplay from './CarouselDisplay'


const MovieCarousel = (props) => (
    <div>
    <Carousel
             slidesPerScroll={2}
             slidesPerPage={2}
             infinite
             arrows>
            
                 <CarouselDisplay />
                
    </Carousel>
   </div>

);

export default MovieCarousel;