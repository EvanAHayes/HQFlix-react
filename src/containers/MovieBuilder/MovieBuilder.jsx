import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import classes from './MovieBuilder.module.css'

class MovieBuilder extends Component{

    render(){
        return(
          <Aux>
             <div className={classes.Body}>
                <p>This is where main content goes</p>
             </div>
          </Aux>
        );
    }
}
 export default MovieBuilder;
