import React, { Component }  from 'react';
import axios from '../../axiosInstances/Axios';
import Spinner from '../UI/Spinner/Spinner';


class MovieSummary extends Component {
state = {
    selectedPost: null
}

    componentDidUpdate(){
       axios.get(`/cinema/movie/${this.props.id}`)
       .then(Response => {
           this.setState({selectedPost: Response.data})
       })
      }

    render(){
        let Summary = null
     if(this.props.id){
         Summary = <Spinner />
     }

        if(this.state.selectedPost){
          Summary = (
                <div>
                    <img src={`https://image.tmdb.org/t/p/w185/${this.state.selectedPost.poster_path}`} alt={this.state.selectedPost.title} />
                <h3>{this.state.selectedPost.title}</h3>
          <p>{this.state.selectedPost.overview}</p>
          <button onClick={this.props.clicked}>Close</button>
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