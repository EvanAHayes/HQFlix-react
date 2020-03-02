import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const MovieCarousel = (props) => (
    <div>
    <Carousel
             slidesPerScroll={2}
             slidesPerPage={2}
             infinite
             arrows>

            <div className={"Card-cover"}>
            <img src={props.image} alt="Demo" />
            <div className={"Card-content"}>
                 <h6>{props.title}</h6>
                 <span>Release Date: ${props.releaseDate}</span><br />
                <span>Rating:{props.voteAverage} <i className="fas fa-star"></i></span>
            </div>
            </div>
    </Carousel>
   </div>

);

export default MovieCarousel;