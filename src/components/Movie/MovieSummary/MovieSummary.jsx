import React, { Component }  from 'react';
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';
import {keys} from '../../../axiosInstances/config';

class MovieSummary extends Component {
state = {
    selectedPost: null
}

    componentDidUpdate(){
//todo: change to case-switch to see if it works 
        let film = ''
        let switchid = ''
        if(this.props.id){
            film = 'movie'
            switchid = this.props.id
        }

            if(this.props.tvid){
                switchid = this.props.tvid
               film = 'tv'
            }

       axios.get(`https://api.themoviedb.org/3/${film}/${switchid}?api_key=${keys}&language=en-US`)
       .then(Response => {
           this.setState({selectedPost: Response.data})
       })


    //     if(this.props.id){
    //         if(!this.state.selectedPost || (this.state.selectedPost && this.state.selectedPost.id !== this.props.id)){
    //    axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=${keys}&language=en-US`)
    //    .then(Response => {
    //        this.setState({selectedPost: Response.data})
    //    })
    // }
    // }
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