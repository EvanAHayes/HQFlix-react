import axios from 'axios';
import jwt_decode from 'jwt-decode';

class AuthenticationService {

    createJWTToken(token) {
        return 'Bearer ' + token   
    }

    //Todo: dont forget to add logout button for this
    logout() {
        sessionStorage.removeItem('authenticatedUser')
        localStorage.removeItem('jwtToken')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) {
            return false
        }
        return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) {
            return ""
        }
        return user;
    }

    gettoken(){
        let token = sessionStorage.getItem('token');
        if(token === null){
            return ""
        }
        return token;
    }

    executeJwtAuthenticationService(username, password) {

        return axios.post("http://localhost:8080/api/auth/login", {
            username,
            password
        })
    }

    setupAxiosInterceptors(basicAuthHeader) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn) {

                    config.headers.Authorization = basicAuthHeader
                    sessionStorage.setItem("token", config.headers.Authorization)
                }
                return config
            }
        )

    }

    registerSuccessFullLoginForJwt = (username, token) => {
        sessionStorage.setItem('authenticatedUser', username)
        //this.setupAxiosInterceptors(this.createJWTToken(token))

        if(token){
            axios.defaults.headers.common["Authorization"] = this.createJWTToken(token);
            localStorage.setItem("jwtToken", this.createJWTToken(token))
           jwt_decode(token)
            
        }else{
            delete axios.defaults.headers.common["Authorization"]
        }
    }
}

export default new AuthenticationService()