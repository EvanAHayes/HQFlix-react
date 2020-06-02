import React, { Component }  from 'react';
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';
import {keys} from '../../../axiosInstances/config';

class MovieSummary extends Component {
state = {
    selectedPost: null
}
    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.selectedPost || (!this.state.loadedPost && this.state.selectedPost.id !== this.props.id)){
            
       axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=${keys}&language=en-US`)
       .then(Response => {
           this.setState({selectedPost: Response.data})
       })
    }
        }

        else if (this.props.TVID){
            if(!this.state.selectedPost || (!this.state.loadedPost && this.state.selectedPost.TVID !== this.props.TVID)){
                axios.get(`https://api.themoviedb.org/3/tv/${this.props.TVID}?api_key=${keys}&language=en-US`)
                .then(response => {
                    this.setState({selectedPost: response.data})
                })
            }
        }
    }

    render(){
        let Summary = null
     if(this.props.id || this.props.TVID){
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