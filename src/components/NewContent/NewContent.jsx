import React, { Component } from 'react';
import classes from './NewContent.module.css';
import axios from '../../axiosInstances/Axios';
import {keys} from '../../axiosInstances/config';
import axiosP from 'axios';
import NewInTheatersDisplay from '../../components/NewContent/NewInTheaters/NewInTheatersDisplay';

const NewInTheatersURL = `movie/now_playing?api_key=${keys}&language=en-US`;
const PopularMoviesURL = `movie/popular?api_key=${keys}&language=en-US`;
const PopularTvShowURL = `tv/popular?api_key=d06c5f6a36c2068ee073ea48b52a4e65&language=en-US`;
const GenreURL = `genre/movie/list?api_key=${keys}&language=en-US`;


class NewContent extends Component {
    state = {
        NewInTheatersData: [],
        PopularMoviesData: [],
        PopularTvShowData: [],
        GenreData: [],
        GenreName: null
    }

    componentDidMount(){
        axiosP.all([
            axios.get(NewInTheatersURL),
            axios.get(PopularMoviesURL),
            axios.get(PopularTvShowURL),
            axios.get(GenreURL)
        ])
        .then(axiosP.spread((...responses) => {
           const NewInTheatersData = responses[0].data.results;
           const PopularMoviesData = responses[1].data.results;
           const PopularTvShowData = responses[2].data.results;
           const GenreData = responses[3].data.genres;

           //GETgenre
           const GetGenre = GenreData.map(genreData => {
               return{...genreData}
           })

           //NewInTheaters
           const UpdatedNewInTheatersData = NewInTheatersData.map(newInTheatersData => {
               return{...newInTheatersData}
           });
           
           this.setState({NewInTheatersData: UpdatedNewInTheatersData, 
                           GenreData: GetGenre});


           console.log(NewInTheatersData, PopularMoviesData, PopularTvShowData, GenreData);
        })  
        ).catch(error => {
            console.log(error);
        })
        
    }

//     GetGenreName (id) {
//         if(id){
//             id.forEach(element => {
//                 this.state.GenreData.forEach(genreids => {
//                if(element.genre_ids === genreids.id){
//                   console.log(genreids.name)
//                    return genreids.name
//                }
//            }
//            )
//           });
//         }
        
//    }

    render(){
        let newInTheatersResults = <p>Something went wrong!!!</p>;
        let PopularMoviesResults = <p>Something went wrong!!!</p>;
        let PopularTvShowResults = <p>Something went wrong!!!</p>;

        const ids = (id) => {
            this.state.GenreData.forEach(genreids => {
                 id.forEach(element => {
                 if(element === genreids.id){
                     console.log(genreids.name)
                     return <NewInTheatersDisplay genre_ids={genreids.name} />
                 }
             })
             return <NewInTheatersDisplay genre_ids={genreids.name} />
         })
     }
        if(!this.state.error){
          newInTheatersResults = this.state.NewInTheatersData.map(newInTheatersResults => {
            return(
               <NewInTheatersDisplay key={newInTheatersResults.id}
                        image={newInTheatersResults.poster_path}
                        title={newInTheatersResults.title}
                        id={newInTheatersResults.id}
                        genre_ids={ids(newInTheatersResults.genre_ids)}
                        vote_average={newInTheatersResults.vote_average}
                        overview={newInTheatersResults.overview}/>
                      )
                })
        }


        const NewInTheaters = <div className="tab-pane fade active show" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
        <div className="theater row">
               {newInTheatersResults}
            </div>
            </div>;

        const PopularMovies = <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
		<div className="popMovie row">
            {PopularMoviesResults}
            </div>
        </div>;

        const PopularTvShow = <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab">
            <div className="popTVshow row">
                {PopularTvShowResults}
            </div>
        </div>

   return(
    <section className={classes.Content}>
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
 <div className="container">
     <div className="tab-content" id="myTabContent">
            {NewInTheaters}
            {PopularMovies}
             {PopularTvShow}
     </div>
     </div>
  </div>
  </section>
   );
    }
};

export default NewContent;