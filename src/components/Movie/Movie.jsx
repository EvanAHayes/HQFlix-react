    import React from 'react';
    import './Movie.module.css';
    import Carouel from '../../containers/Carousels/Carousels';
    import NewContent from '../NewContent/NewContent';
    import Footer from '../Footer/Footer'

    const Movie = () => (
        
            <div>
                <main className={"container"}>
                <h1 className={'text-center mt-5 pt-5'}>New Movies Coming Soon To Theather</h1>
                <Carouel />
                </main>  
                <NewContent />   
                <Footer /> 
            </div>
    )
    

    export default Movie;