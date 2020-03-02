import axios from 'axios';

//set up all instances for movie get request 
const instance = axios.create({
    baseURL: ''
})

export default instance;