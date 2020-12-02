import React, { Component } from 'react';
import classes from './NewContent.module.css';
import axios from '../../axiosInstances/Axios';
import axiosP from 'axios';
import Display from '../../components/NewContent/NewInTheaters/NewInTheatersDisplay';
import Button from "../UI/Button/Button";
import Spinner from '../UI/Spinner/Spinner';
import Aux from '../../hoc/Aux';
import Modal from '../UI/Modal/Modal';
import MovieModalSummary from '../MovieSummary/MovieSummary';
import TVModalSummary from '../TVSummary/TVSummary';

const NewInTheatersURL = `/cinema/movie/now_playing`;
const PopularMoviesURL = `/cinema/movie/popular`;
const PopularTvShowURL = `/cinema/tv/popular`;
const GenreURL = `/cinema/genre`;

class NewContent extends Component {
    state = {
        NewInTheatersData: [],
        PopularMoviesData: [],
        PopularTvShowData: [],
        GenreData: [],
        loading: false,
        showItems: 4,
        showMovieModal: false,
        showTVModal: false,
        MovieID: null,
        TvID: null,
        black: true,
        error: true
    }

    componentDidMount() {
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
                    return { ...genreData }
                });

                //NewInTheaters
                const UpdatedNewInTheatersData = NewInTheatersData.map(newInTheatersData => {
                    return { ...newInTheatersData }
                });
                //PopularMovie
                const UpdatedPopularMovieData = PopularMoviesData.map(popularMoviesData => {
                    return { ...popularMoviesData }
                });
                //PopularTvShow
                const UpdatedPopularTvShowData = PopularTvShowData.map(popularTvShowData => {
                    return { ...popularTvShowData }
                });

                this.setState({
                    error:false,
                    NewInTheatersData: UpdatedNewInTheatersData,
                    GenreData: GetGenre,
                    PopularMoviesData: UpdatedPopularMovieData,
                    PopularTvShowData: UpdatedPopularTvShowData
                });
            })
            ).catch(()=> this.setState({error: true}) )
    }

    ShowSpinner() {
        this.setState({ loading: true });
    }

    RemoveSpinner() {
        this.setState({ loading: false })
    }

    GetData() {
        this.setState((prev) => {
            return { showItems: prev.showItems + 2 }
        })
    }

    loadDataInTheaters = () => {
        this.ShowSpinner();
        this.GetData();
        this.RemoveSpinner();
    }

    loadDataPopMovie = () => {
        this.ShowSpinner();
        this.GetData();
        this.RemoveSpinner();
    }

    loadDataPopTV = () => {
        this.ShowSpinner();
        this.GetData();
        this.RemoveSpinner();
    }

    OpenMovieModalHandler = (id) => {
        this.setState({ showMovieModal: true, MovieID: id })
    }

    OpenTVModalHandler = (id) => {
        this.setState({ showTVModal: true, TvID: id })
    }

    CloseMovieModalHandler = () => {
        this.setState({ showMovieModal: false });
    }

    CloseTVModalHandler = () => {
        this.setState({ showTVModal: false });
    }

    render() {
        let Error = <p style={{color:"white", fontSize:"25px"}}>Something went wrong!!! Contact Support </p>
        let newInTheatersResults = <Spinner />;
        let PopularMoviesResults = <Spinner />;
        let PopularTvShowResults = <Spinner />;
        let ShowMorenewInTheatersResults = null;
        let ShowMorePopularMoviesResults = null;
        let ShowMorePopularTvShowResults = null;
        let ShowMorenewInTheatersResultsButton = <Button clicked={() => this.loadDataInTheaters()}> Show More </Button>;
        let ShowMorePopularMoviesResultsButton = <Button clicked={() => this.loadDataPopMovie()}> Show More </Button>;
        let ShowMorePopularTvShowResultsButton = <Button clicked={() => this.loadDataPopMovie()}> Show More </Button>;


        const ids = (id) => {
            let el = []
            this.state.GenreData.forEach(genreids => {
                id.forEach(element => {
                    if (element === genreids.id) {
                        el.push(genreids.name)
                    }
                })
            })
            return el.join(', ')
        }

        if (this.state.loading) {
            ShowMorenewInTheatersResultsButton = <Spinner />
            ShowMorePopularMoviesResultsButton = <Spinner />
            ShowMorePopularTvShowResultsButton = <Spinner />
        }


        if (!this.state.error) {
            newInTheatersResults = this.state.NewInTheatersData.slice(0, this.state.showItems).map(newInTheatersResults => {
                return (
                    <Display key={newInTheatersResults.id}
                        image={newInTheatersResults.poster_path}
                        title={newInTheatersResults.title}
                        show={() => this.OpenMovieModalHandler(newInTheatersResults.id)}
                        id={newInTheatersResults.id}
                        genre_ids={ids(newInTheatersResults.genre_ids)}
                        vote_average={newInTheatersResults.vote_average}
                        overview={newInTheatersResults.overview} />
                )
            });

            PopularMoviesResults = this.state.PopularMoviesData.slice(0, this.state.showItems).map(PopularMoviesResults => {
                return (
                    <Display key={PopularMoviesResults.id}
                        image={PopularMoviesResults.poster_path}
                        title={PopularMoviesResults.title}
                        show={() => this.OpenMovieModalHandler(PopularMoviesResults.id)}
                        id={PopularMoviesResults.id}
                        genre_ids={ids(PopularMoviesResults.genre_ids)}
                        vote_average={PopularMoviesResults.vote_average}
                        overview={PopularMoviesResults.overview} />
                )
            })

            PopularTvShowResults = this.state.PopularTvShowData.slice(0, this.state.showItems).map(PopularTvShowData => {
                return (

                    <Display key={PopularTvShowData.id}
                        image={PopularTvShowData.poster_path}
                        title={PopularTvShowData.name}
                        show={() => this.OpenTVModalHandler(PopularTvShowData.id)}
                        id={PopularTvShowData.id}
                        genre_ids={ids(PopularTvShowData.genre_ids)}
                        vote_average={PopularTvShowData.vote_average}
                        overview={PopularTvShowData.overview} />
                )
            })
        }

        if(this.state.error){
          newInTheatersResults = Error;
          PopularMoviesResults = Error;
          PopularTvShowResults = Error;
        }

        const NewInTheaters = <div className="tab-pane fade active show" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
            <div className="theater row">
                {newInTheatersResults}

                {ShowMorenewInTheatersResults}
                {this.state.showItems < this.state.NewInTheatersData.length && ShowMorenewInTheatersResultsButton}
            </div>
        </div>;

        const PopularMovies = <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
            <div className="popMovie row">
                {PopularMoviesResults}
                {ShowMorePopularMoviesResults}
                {this.state.showItems < this.state.PopularMoviesData.length && ShowMorePopularMoviesResultsButton}
            </div>
        </div>;

        const PopularTvShow = <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab">
            <div className="popTVshow row">
                {PopularTvShowResults}
                {ShowMorePopularTvShowResults}
                {this.state.showItems < this.state.PopularTvShowData.length && ShowMorePopularTvShowResultsButton}
            </div>
        </div>

        return (
            <Aux>
                <Modal show={this.state.showMovieModal} closed={this.CloseMovieModalHandler}>

                    <MovieModalSummary
                        id={this.state.MovieID}
                        clicked={this.CloseMovieModalHandler} />
                </Modal>

                {/* two different modals for two different api calls  */}
                <Modal show={this.state.showTVModal} closed={this.CloseTVModalHandler}>
                    <TVModalSummary
                        tvid={this.state.TvID}
                        Postclicked={this.CloseTVModalHandler} />

                </Modal>

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
            </Aux>
        );
    }
};

export default NewContent;