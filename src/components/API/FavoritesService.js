import axios from 'axios';
//import AuthenticatedService from '../Authentication/AuthenticationService.js';

class FavoritesService {

    CreateFavorites(favorite) {
        return axios.post(`https://hq-flix.herokuapp.com/api/users/favorites`, favorite);
    }

    GetFavorites() {
        return axios.get(`https://hq-flix.herokuapp.com/api/users/all`)
    }

    GetSingleFavorite(id) {
        return axios.get(`https://hq-flix.herokuapp.com/api/users/${id}`)
    }

    DeleteFavorite(id) {
        return axios.delete(`https://hq-flix.herokuapp.com/api/users/${id}`)
    }
}

export default new FavoritesService();