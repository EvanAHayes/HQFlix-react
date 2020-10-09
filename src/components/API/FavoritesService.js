import axios from 'axios';

class FavoritesService {
    CreateFavorites(username, favorite){
        return axios.post()
    }

    GetFavorites(){
        return axios.get()
    }

    DeleteFavorite(){
       return axios.delete()
    }
}

export default new FavoritesService();