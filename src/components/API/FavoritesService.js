import axios from 'axios';

class FavoritesService {
    CreateFavorites(favorite) {
        return axios.post("http://localhost:8080/api/favorites", favorite);
    }

    GetFavorites(username) {
        return axios.get(`http://localhost:8080/api/favorites/users/${username}`)
    }

    DeleteFavorite() {
        return axios.delete()
    }
}

export default new FavoritesService();