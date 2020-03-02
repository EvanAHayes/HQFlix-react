import axios from 'axios';
//import {key} from './config';

//set up all instances for movie get request 
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default instance;