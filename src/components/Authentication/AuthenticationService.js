class AuthenticationService {

    registerSuccessfullLogin(username,password){
        console.log('register')
        sessionStorage.setItem('authenticatedUser', username);
    }

}

export default new AuthenticationService()