import React, { Component } from 'react';
import axios from '../../axiosInstances/Axios';
import {keys} from '../../axiosInstances/config';
import Carousel from '../../components/UI/Carousel/Carousel'

class Carousels extends Component {
    state = {
        MovieData: null
    }

    componentDidMount(){
        axios.get(`movie/upcoming?api_key=${keys}&language=en-US&page=1&region=US`)
        .then(Response => {
            console.log(Response);
            this.setState({MovieData: Response.data.results})
        })
       }

    render(){
        const MovieResults = this.state.MovieData.map(MovieResults => {
            return <Carousel key={MovieResults.id}
                             image={MovieResults.poster_path}
                             title={MovieResults.title}
                             releaseDate={MovieResults.release_date}
                             voteAverage={MovieResults.vote_average}/>

        });
        return (
        <div>{MovieResults}</div>
        )
    }
}

export default Carousels;

