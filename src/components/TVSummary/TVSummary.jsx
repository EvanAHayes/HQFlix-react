import React, { Component } from "react";
import axios from '../../axiosInstances/Axios';
import Spinner from '../UI/Spinner/Spinner';


class TVSummary extends Component{
    state = {
        PostSelection: null
    }

    componentDidUpdate(){
        if(this.props.tvid){
               axios.get(`/cinema/tv/${this.props.tvid}`)
               .then(Response => {
                   this.setState({PostSelection: Response.data})
    }).catch(error => {
        console.log(error)
    })
}
    }


    render(){
        let summary = null

        if(this.props.tvid){
            summary = <Spinner />
        }

        if(this.state.PostSelection){
            summary = (<div>
                    <img src={`https://image.tmdb.org/t/p/w185/${this.state.PostSelection.poster_path}`} alt={this.state.PostSelection.name} />
                <h3>{this.state.PostSelection.name}</h3>
          <p>{this.state.PostSelection.overview}</p>
          <button onClick={this.props.Postclicked}>Close</button>
                </div>
            )
            }
        return(
        <div>{summary}</div>
        )
    }
}

export default TVSummary