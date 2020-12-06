import axios from 'axios';

class NewUserService {

    CreateNewUser(RegisterNewUser){
       return axios.post('https://hq-flix.herokuapp.com/api/auth/register', RegisterNewUser);
    }

}

export default new NewUserService();
