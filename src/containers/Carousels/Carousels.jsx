import React, { Component } from 'react';
import axios from '../../axiosInstances/Axios';
import CarouselData from '../../components/Carousel/CarouselDisplay';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Spinner from '../../components/UI/Spinner/Spinner';


class Carousels extends Component {
    state = {
        MovieData: []
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/api/auth/cinema/movie/upcoming`)
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
        let MovieResults = <Spinner />

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
            autoPlay={7000}
            animationSpeed={1000}
            infinite>
        {MovieResults}
        </Carousel>
        )
    }
}

export default Carousels;

