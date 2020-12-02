import axios from 'axios';


//set up all instances for movie get request 
const instance = axios.create({
    baseURL: 'http://localhost:8080/api/auth'
})

export default instance;