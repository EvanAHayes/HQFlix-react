import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Demo from '../../../Images/demo.png';
import Cloud from '../../../Images/cloud.jpg';
import Logo from '../../../Images/logo.png';


const MovieCarousel = (props) => (
    <div>
     <Carousel
              slidesPerScroll={2}
              slidesPerPage={2}
              infinite
              arrows>
             <div>
             <img src={Demo} alt="Demo" />
             <div>
                 <h6>First slide</h6>
             </div>
             </div>
             <div className={"Card-cover"}>
             <img src={Cloud} alt="Demo" />
             <div className={"Card-content"}>
                 <h6>Second slide</h6>
                 <span>Rating: <i className="fas fa-star"></i></span>
             </div>
             </div>
             <img src={Demo} alt="Demo" />
             <img src={Logo} alt="logo" />
             <img src={Cloud} alt="Demo" />
             <img src={Demo} alt="Demo" />
            
            
            
     </Carousel>
    </div>
)

export default MovieCarousel;