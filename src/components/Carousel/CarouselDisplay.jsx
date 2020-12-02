import React from 'react';
import classes from './CarouselDisplay.module.css';
import NotFound from '../../Images/coming-soon-image.jpg';


const findNull =  (nullRecieved) => {
     if(nullRecieved === null){
         return NotFound
     }
     return `https://image.tmdb.org/t/p/w185/${nullRecieved}`
}

const CarouselDisplay = (props) => (
    <div className={"Card-cover"}>
    <img src={findNull(props.image)} alt="Demo" />
    <div className={`${classes.Cardcontent}`}>
         <h6>{props.title}</h6>
         <span>Release Date: {props.releaseDate}</span><br />
        <span>Rating:{props.voteAverage} <i className="fas fa-star"></i></span>
    </div>
    </div>
)

export default CarouselDisplay;