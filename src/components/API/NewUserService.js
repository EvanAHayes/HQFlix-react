import axios from 'axios';

class NewUserService {

    CreateNewUser(RegisterNewUser){
       return axios.post('http://www.api-hqflix.com/api/auth/register', RegisterNewUser);
    }

}

export default new NewUserService();
