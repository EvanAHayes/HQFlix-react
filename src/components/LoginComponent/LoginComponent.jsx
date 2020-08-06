import React, { Component } from 'react';

 class Login extends Component {

    render() {
        return (
            <div>
                <div className="container">
                <h1>Login</h1>
                <div class="form-group">
           <label>Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
       </div>
        <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" />
       </div>
                </div>
            </div>
        )
    }

 } 

 export default Login;