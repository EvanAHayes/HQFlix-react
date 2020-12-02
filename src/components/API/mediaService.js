import axios from 'axios';
//import {keys} from '../../axiosInstances/config';
import config from '../../axiosInstances/config';

class mediaService {

    retrieveMediaDatabaseURL(id, film){
        return axios.get(`https://api.themoviedb.org/3/${film}/${id}?api_key=${config}&language=en-US`);
    }

}

export default mediaService();