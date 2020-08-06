import React, { Component } from 'react';
import Button from '../UI/Button/Button';

 class Login extends Component {
     
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            ShowSuccessMessage: false
        }
    }


    render() {
        return (
            <div>
                <div className="container">
                <h1>Login</h1>
                <Button>Create New User</Button>
                <div class="form-group">
           <label>Username</label>
          <input type="username" class="form-control" name="username" aria-describedby="emailHelp" value={this.state.username} />
       </div>
        <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" name="password" value={this.state.password} />
       </div>
        <Button>Submit</Button>
       
                </div>
            </div>
        )
    }

 } 

 export default Login;