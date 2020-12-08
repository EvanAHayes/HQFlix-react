import axios from 'axios';
//import AuthenticatedService from '../Authentication/AuthenticationService.js';

class FavoritesService {

    CreateFavorites(favorite) {
        return axios.post(`https://www.api-hqflix.com/api/users/favorites`, favorite);
    }

    GetFavorites() {
        return axios.get(`https://www.api-hqflix.com/api/users/all`)
    }

    GetSingleFavorite(id) {
        return axios.get(`https://www.api-hqflix.com/api/users/${id}`)
    }

    DeleteFavorite(id) {
        return axios.delete(`https://www.api-hqflix.com/api/users/${id}`)
    }
}

export default new FavoritesService();