import axios from 'axios';

class NewUserService {

    CreateNewUser(RegisterNewUser){
       return axios.post('https://www.api-hqflix.com/api/auth/register', RegisterNewUser);
    }

}

export default new NewUserService();
