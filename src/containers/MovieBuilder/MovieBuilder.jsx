import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import MovieMainPage from '../../components/Movie/Movie';

class MovieBuilder extends Component{

    render(){
        return(
          <Aux>
             <MovieMainPage />
          </Aux>
        );
    }
}
 export default MovieBuilder;
