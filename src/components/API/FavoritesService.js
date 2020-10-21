import axios from 'axios';
//import AuthenticatedService from '../Authentication/AuthenticationService.js';

class FavoritesService {

    CreateFavorites(favorite) {
        return axios.post(`http://localhost:8080/api/users/favorites`, favorite);
    }

    GetFavorites(username) {
        return axios.get(`http://localhost:8080/api/favorites/users/${username}`)
    }

    DeleteFavorite(id) {
        return axios.delete(`http://localhost:8080/api/users/${id}`)
    }
}

export default new FavoritesService();