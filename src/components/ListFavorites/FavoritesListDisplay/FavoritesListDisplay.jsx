import React, { Component } from 'react';
import styles from './FavoritesListDisplay.module.css'
class favoritesListDisplay extends Component{

   render(){

   return(   
      
      <div className={styles.infocard}>
      <div className={styles.front}>
         <img className={styles.card_image} src={`https://image.tmdb.org/t/p/w185/${this.props.image}`} alt={this.props.title}/>
      </div>
   <div className={styles.back}>
      <h2>{this.props.title}</h2>
      <p className={styles.overview}>
         {this.props.overview}
      </p>
   </div>
</div>

)
   }
}

export default favoritesListDisplay;