import React, { Component } from 'react';
import classes from './NewContent.module.css';

class NewContent extends Component {
    render(){
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

  </div>
   );
    }
};

export default NewContent;