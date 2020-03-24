import React, { Component }  from 'react';
import axios from 'axios';

class MovieSummary extends Component {

    componentDidUpdate(){
        if(this.props.id){
       axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=d06c5f6a36c2068ee073ea48b52a4e65&language=en-US`)
       .then(Response => {
           console.log(Response)
       })
        }
    }
    render(){
        let Summary = null

        if(this.props.id){
          Summary = (
                <div key={MovieSummary.id}>
                <img src={MovieSummary.poster_path} alt={MovieSummary.title} />
                <h3>{MovieSummary.title}</h3>
                <p>{MovieSummary.overview}</p>
                </div>
            )
        
    }
        return (
            <div>
                 {Summary}
            </div>
        )
    }
} 

export default MovieSummary;