import React, { Component } from "react";
import FavoritesService from "../API/FavoritesService";
import FavoriesList from './FavoritesListDisplay/FavoritesListDisplay';


class ListFavorites extends Component{
   state = {
       allFavorites: []
   }
 componentDidMount(){
     FavoritesService.GetFavorites().then(res => {
         const FavoritesData = res.data;
         
         const UpdatedFavoritesData = FavoritesData.map(favoritesdata => {
             return {...favoritesdata}
         });
         this.setState({allFavorites: UpdatedFavoritesData});
     }).catch(error => {
        console.log(error);
        
    })
 }

    render(){
        let favoritesListResults = <p>Something went wrong. Contact Support!</p>

        if(!this.state.error){
           favoritesListResults = this.state.allFavorites.map(allFavorites => {
               return(
                <FavoriesList key={allFavorites.id}
                              image={allFavorites.poster_Path}
                              title={allFavorites.title}
                              overview={allFavorites.description}/>
               )
           })
        }

        return(
            <div className="container">
         <h1 className="heading">Favorites</h1>
         <div className="row">
         <div class="card-columns">
         {favoritesListResults}
         </div>
            </div>
            </div>
        )
    }
}

export default ListFavorites;