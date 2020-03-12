import React, { Component } from 'react';
import axios from '../../axiosInstances/Axios';
import {keys} from '../../axiosInstances/config';
import CarouselData from '../../components/Carousel/CarouselDisplay';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class Carousels extends Component {
    state = {
        MovieData: []
    }

    componentDidMount(){
        axios.get(`movie/upcoming?api_key=${keys}&language=en-US&page=1&region=US`)
        .then(Response => {
            const MovieData = Response.data.results;
            const updatedMovieData = MovieData.map(movieData => {
                return {...movieData}
            });

            this.setState({MovieData: updatedMovieData})
        })
        .catch(error => {
            console.log(error);
        })
       }

    render(){
        let MovieResults = <p>Something went wrong</p> 
        if(!this.state.error){

         MovieResults = this.state.MovieData.map(MovieResults => {
            return (<CarouselData key={MovieResults.id}
                             image={MovieResults.poster_path}
                             title={MovieResults.title}
                             releaseDate={MovieResults.release_date}
                             voteAverage={MovieResults.vote_average} />
            )

        });
    }
        return (
            <Carousel
            slidesPerScroll={3}
            slidesPerPage={3}
            arrows
            autoPlay={5000}
            animationSpeed={1000}
            infinite>
        {MovieResults}
        </Carousel>
        )
    }
}

export default Carousels;

