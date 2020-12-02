
import axios from 'axios';

axios.get("http://localhost:8080/api/auth/cinema/movie/upcoming").then(response => {
    console.log(response.data.results);
})

axios.get("http://localhost:8080/api/auth/cinema/movie/now_playing").then(response => {
    console.log(response.data.results);
})

axios.get("http://localhost:8080/api/auth/cinema/movie/popular").then(response => {
    console.log(response.data.results);
})

axios.get("http://localhost:8080/api/auth/cinema/tv/popular").then(response => {
    console.log(response.data.results);
})
axios.get("http://localhost:8080/api/auth/cinema/genre").then(response => {
    console.log(response.data.genres);
})

