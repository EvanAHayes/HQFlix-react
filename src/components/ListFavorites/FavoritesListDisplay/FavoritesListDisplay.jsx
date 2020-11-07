import React from 'react';
import Styles from './FavoritesListDisplay.module.css'

const favoritesListDisplay = () =>(    

     <div className={Styles}>
     <div className="col-sm-4">
     <div className="card">
       <div className="image">
         <img src={`https://image.tmdb.org/t/p/w185/${this.props.image}`} alt={this.props.title} />
       </div>
       <div className="card-inner">
         <div className="header">
           <h2>{this.props.title}</h2>
       </div>
       <div className="content">
         <p>{this.props.overview}</p>
       </div>
         </div>
         </div>
        </div>
        </div>
   
)

export default favoritesListDisplay;