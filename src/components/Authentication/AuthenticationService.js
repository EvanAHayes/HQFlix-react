import axios from 'axios';

class AuthenticationService {

    createJWTToken(token){
        return 'Bearer ' + token
       }

    createBasicAuthToken(Username,Password){
        return 'Basic ' + window.btoa(Username + ":" + Password)
    }

    registerSuccessfullLogin(username,password){
        console.log('register')
        sessionStorage.setItem('authenticatedUser', username);
    }

    //Todo: dont forget to add logout button for this
    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) {
            return false
        }
        return true;
    }

    executeJwtAuthenticationService(username,password){

        return axios.post("http://localhost:8080/authenticate", 
                {username, password}
    
                )}
}

export default new AuthenticationService()