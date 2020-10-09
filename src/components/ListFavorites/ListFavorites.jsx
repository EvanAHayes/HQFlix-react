import React, { Component } from "react";

class ListFavorites extends Component{
    constructor(props){
        super(props)
        this.state = {
       favorites: []
   }
}


    render(){

        return(
            <div>
         <h1>Favorites</h1>
            </div>
        )
    }
}

export default ListFavorites;