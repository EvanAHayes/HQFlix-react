import axios from 'axios';

class NewUserService {

    CreateNewUser(RegisterNewUser){
       return axios.post('http://localhost:8080/api/auth/signup', RegisterNewUser);
    }

}

export default new NewUserService();
