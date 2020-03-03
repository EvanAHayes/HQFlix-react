import React from 'react';

const CarouselDisplay = (props) => (
    <div className={"Card-cover"}>
    <img src={`https://image.tmdb.org/t/p/w185/${props.image}`}alt="Demo" />
    <div className={"Card-content"}>
         <h6>{props.title}</h6>
         <span>Release Date: {props.releaseDate}</span><br />
        <span>Rating:{props.voteAverage} <i className="fas fa-star"></i></span>
    </div>
    </div>
)

export default CarouselDisplay;