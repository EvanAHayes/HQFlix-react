import axios from 'axios';

class NewUserService {

    CreateNewUser(user){
       return axios.post('http://localhost:8080/api/auth/signup', user);
    }

}

export default new NewUserService();
