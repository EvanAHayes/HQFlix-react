import React, { Component } from "react";
import Movie from '../../components/Movie/Movie';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';




class MovieBuilder extends Component{

    render(){
        return(
          <div>
            <Router>
                <Switch>
                  <Route path="/" component={Movie} />
                </Switch>
              <Footer />
            </Router>
          </div>
        );
    }
}

 export default MovieBuilder;
