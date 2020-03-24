import React, { Component }  from 'react';
import axios from 'axios';

class MovieSummary extends Component {
state = {
    selectedPost: null
}
    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.selectedPost || (!this.state.loadedPost && this.state.selectedPost.id !== this.props.id)){
            
       axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=d06c5f6a36c2068ee073ea48b52a4e65&language=en-US`)
       .then(Response => {
           console.log(Response.data);
           this.setState({selectedPost: Response.data})
       })
    }
        }
    }
    render(){
        let Summary = null
     if(this.props.id){
         Summary = <p>Loading....</p>
     }
        if(this.state.selectedPost){
          Summary = (
                <div>
                <h3>{this.state.selectedPost.title}</h3>
          <p>{this.state.selectedPost.overiew}</p>
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