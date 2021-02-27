import axios from 'axios';


//set up all instances for movie get request 
const instance = axios.create({
    baseURL: 'http://www.api-hqflix.com/api/auth'
})

export default instance;