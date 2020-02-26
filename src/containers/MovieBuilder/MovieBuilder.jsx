import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Movie from '../../components/Movie/Movie';


class MovieBuilder extends Component{

    render(){
        return(
          <Aux>
             <Movie />
          </Aux>
        );
    }
}

 export default MovieBuilder;
