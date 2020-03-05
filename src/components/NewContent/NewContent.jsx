import React, { Component } from 'react';
import classes from './NewContent.module.css';

class NewContent extends Component {
    state = {
        MovueData: []
    }

    componentDidMount(){
       
    }

    render(){

        let NewInTheaters = <div className="tab-pane fade active show" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
        <div className="theater row">
            </div>
            </div>;

        let PopularMovies = <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
		<div className="popMovie row">
            </div>
        </div>;

        let PopularTvShow = <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab">
            <div className="popTVshow row">
            </div>
        </div>
   return(
    
  <div className={classes.Headcontent}>
 <div className="container">
<div className="row">
    <div className="col-12">
        <h2>NewContent</h2>
        <ul className="nav nav-tabs content--tabs" id="content--tabs" role="tablist">
                  <li className="nav-item">
                      <a className="nav-link active show" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">New In Theaters</a>
                  </li>  
                  <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Movies</a>
                  </li>  
                  <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">TV Shows</a>
                  </li>  
                </ul>
    </div>
</div>
 </div>
     <div className="tab-content" id="myTabContent">
            {NewInTheaters}
            {PopularMovies}
             {PopularTvShow}
     </div>

  </div>
   );
    }
};

export default NewContent;