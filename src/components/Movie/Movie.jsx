    import React from 'react';
    import './Movie.module.css';
    import Carouel from '../UI/Carousel/Carousel';
    import NewContent from '../NewContent/NewContent';

    const Movie = () => (
            <div className={"container"}>
                <h1 className={'text-center mt-5 pt-5'}>New Movies Coming Soon To Theather</h1>
                <Carouel />
                <NewContent />
            </div>
    )
    

    export default Movie;