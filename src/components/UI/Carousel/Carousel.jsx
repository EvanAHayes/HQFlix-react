import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Demo from '../../../Images/demo.png';
import Cloud from '../../../Images/cloud.jpg';


const MovieCarousel = (props) => (
    <div>
     <Carousel
              slidesPerScroll={2}
              slidesPerPage={2}
              infinite
              arrows
              centered>
                  
             <img src={Demo} alt="Demo" />
             <img src={Cloud} alt="Demo" />
             <img src={Demo} alt="Demo" />
             <img src={Cloud} alt="Demo" />
             <img src={Demo} alt="Demo" />
             <img src={Cloud} alt="Demo" />
            
            
     </Carousel>
    </div>
)

export default MovieCarousel;