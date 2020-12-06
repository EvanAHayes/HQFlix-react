import axios from 'axios';


//set up all instances for movie get request 
const instance = axios.create({
    baseURL: 'https://hq-flix.herokuapp.com/api/auth'
})

export default instance;