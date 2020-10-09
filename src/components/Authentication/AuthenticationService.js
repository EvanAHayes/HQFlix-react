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

    getLoggedInUserName(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null){
         return ""
        } 
        
        return user;
    }

    executeJwtAuthenticationService(username,password){

        return axios.post("http://localhost:8080/api/auth/login", 
                {username, password}    
                )}

    setupAxiosInterceptors(basicAuthHeader){    
                    axios.interceptors.request.use(
                        (config) => {
                            if(this.isUserLoggedIn){
                
                            config.headers.authorization = basicAuthHeader
                        }
                        return config
                    }
                    )
                
                }

    registerSuccessFullLoginForJwt(username, token) {
                    sessionStorage.setItem('authenticatedUser', username)
                    this.setupAxiosInterceptors(this.createJWTToken(token))
                }
}

export default new AuthenticationService()