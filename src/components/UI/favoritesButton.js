import React, { Component } from 'react'
import FavoritesService from '../API/FavoritesService';


class favoritesButton extends Component {
constructor(){
    super();
    this.state ={
        id: "",
        isFavorite: false,
        singleFavorite: {}
    }
    this.addFav = this.addFav.bind(this)
    this.removeFav = this.removeFav.bind(this)
}

   componentDidMount(){
       //axios that returns single favorite by the props.id
       if(this.props.id){
      FavoritesService.GetSingleFavorite(this.props.id).then(res => {
          console.log(res.data)
          this.setState({singleFavorite: res.data})
      })
   }
}

   addFav(e){   
    e.preventDefault()
    let favoriteDetails = {
    title: this.props.title,
    description: this.props.overview,
    poster_path: this.props.image,
    movieID: this.props.id
   }
     
FavoritesService.CreateFavorites(favoriteDetails);
this.setState({singleFavorite: favoriteDetails})
 }

 removeFav(e){
    e.preventDefault()
    FavoritesService.DeleteFavorite(this.state.singleFavorite.movieID)
    this.setState({singleFavorite: {}})
 }


    render() {
        //check if the props id = the id returned by axios
            let Favorites_btn = (
                this.props.id === this.state.singleFavorite.movieID ? (
                    <i className={"fas fa-heart"} style={{color: "red"}} onClick={(e) => this.removeFav(e)}>remove from favorites</i>
                   ) :(
                    <i className={"far fa-heart"} style={{color: "red"}} onClick={(e) => this.addFav(e)}>add to favorites</i>
                   )
            )
        
        
       

        return (
            <div >
                {Favorites_btn}
            </div>
        )
    }
}

export default favoritesButton;
