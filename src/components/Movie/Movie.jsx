    import React from 'react';
    import './Movie.module.css';
    import Carouels from '../../containers/Carousels/Carousels';
    import NewContent from '../NewContent/NewContent';

    const Movie = () => (
            <div className={"container"}>
                <h1 className={'text-center mt-5 pt-5'}>New Movies Coming Soon To Theather</h1>
                <Carouels />
                <NewContent />
            </div>
    )
    

    export default Movie;