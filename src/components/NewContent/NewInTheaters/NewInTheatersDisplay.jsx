import React, {Component} from "react";
import styles from './NewInTheatersDisplay.module.css';
import AuthenticationService from '../../Authentication/AuthenticationService.js';
import FavoritesService from '../../API/FavoritesService.js';

class NewInTheatersDisplay extends Component{
    constructor(){
        super();
        this.state = {
            favorites: [],
           favorite: false
        }
    }

    componentDidMount(){
        this.refreshFavorites();
    }

    refreshFavorites(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        let user = AuthenticationService.getLoggedInUserName();
        if(isUserLoggedIn){     
          FavoritesService.GetFavorites(user).then(response => {
              this.setState({favorites: response.data})
              console.log(this.state.favorites)
          })
        }
    }

    changeColor(){

       this.setState({favorite: !this.state.favorite});

       if(!this.state.favorite){

        let favoriteDetails = {
        title: this.props.title,
        description: this.props.overview,
        poster_path: this.props.image,
        movieID: this.props.id
       }

    FavoritesService.CreateFavorites(favoriteDetails).then();
     } 

    }

render(){

const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
let btn_class = this.state.favorite ? <i id={styles.heartIcon} className={"fas fa-heart"} style={{color: "red"}} onClick={this.changeColor.bind(this)}>remove to favorites</i> : 
                                    <i id={styles.heartIcon} className={"far fa-heart"} style={{color: "red"}} onClick={this.changeColor.bind(this)}>add from favorites</i>;


const limitTitle = (title, limit = 150) => {
    const newtitle = [];

     if(title.length > limit){
         title.split(' ').reduce((acc, cur) => {
            if(acc + cur.length <= limit){
               newtitle.push(cur);
            }
            return acc + cur.length;
         }, 0);
		return `${newtitle.join(' ')} ...Click to see more`;
     }
     return title;
}

return(

    <div id={this.props.id} className="col-sm-12 col-lg-6 col-md-12 col-xs-12">
    <div className={`${styles.card} ${styles.cardList}`} >
            <div className="row">
                <div className="col-12 col-sm-4">
                    <div className={`${styles.card__cover}`}>
                       <li value={this.state.poster_path}>
                        <img id="image" src={`https://image.tmdb.org/t/p/w185/${this.props.image}`} alt={`${this.props.title}`} />
                        </li>
                    </div>
                </div>

                    <div className="col-12 col-sm-8">
                        <div className="card__content">
                            <li>
                            <h3 className="card__title">{this.props.title}</h3>
                            </li>
                            {isUserLoggedIn && <div>{btn_class}</div>}
                                <span className="card__category">
                                {this.props.genre_ids}
                                </span>

                    <div className="card__wrap">
                            <span className="card__rate"><i className="fas fa-star"></i>{this.props.vote_average}</span>
                            <ul className="card__list">                
                            </ul>
                    </div>

                    <div className="card__description" onClick={this.props.show}>
                        <p>{limitTitle(this.props.overview)}</p>
                            </div>
                    </div>
            </div>
    </div>
</div>
</div>

)
}
}


export default NewInTheatersDisplay;