import axios from 'axios';

class FavoritesService {
    CreateFavorites(favorite){
        return axios.post("http://localhost:8080/api/favorites",favorite);
    }

    GetFavorites(){
        return axios.get()
    }

    DeleteFavorite(){
       return axios.delete()
    }
}

export default new FavoritesService();