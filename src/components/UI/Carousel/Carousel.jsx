import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const MovieCarousel = (props) => (
    <div>
     <Carousel>
         <img src={"../../../Images/demo.png"} alt="Demo" />
     </Carousel>
    </div>
)

export default MovieCarousel;