class AuthenticationService {

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
}

export default new AuthenticationService()