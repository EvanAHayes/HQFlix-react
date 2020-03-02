import React, { Component } from 'react';
import classes from './NewContent.module.css';

class NewContent extends Component {
    state = {}

    componentDidMount(){
        
    }

    render(){

        let NewInTheaters = <div class="tab-pane fade active show" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
        <div class="theater row">
            </div>
            </div>;

        let PopularMovies = <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
		<div class="popMovie row">
            </div>
        </div>;

        let PopularTvShow = <div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab">
            <div class="popTVshow row">
            </div>
        </div>
   return(
    
  <div className={classes.Headcontent}>
 <div class="container">
<div class="row">
    <div class="col-12">
        <h2>NewContent</h2>
        <ul class="nav nav-tabs content--tabs" id="content--tabs" role="tablist">
                  <li class="nav-item">
                      <a class="nav-link active show" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">New In Theaters</a>
                  </li>  
                  <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Movies</a>
                  </li>  
                  <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">TV Shows</a>
                  </li>  
                </ul>
    </div>
</div>
 </div>
     <div class="tab-content" id="myTabContent">
            {NewInTheaters}
            {PopularMovies}
             {PopularTvShow}
     </div>

  </div>
   );
    }
};

export default NewContent;