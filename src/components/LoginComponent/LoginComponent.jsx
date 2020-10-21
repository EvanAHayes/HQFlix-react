import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import AuthenticationService from '../Authentication/AuthenticationService.js';
import {Link} from 'react-router-dom';
import Styles from './LoginComponent.module.css'

 class Login extends Component {
   
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            ShowSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    loginClicked() {

        AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password).then(
            (response)=> {
                AuthenticationService.registerSuccessFullLoginForJwt(this.state.username, response.data);
                this.setState({ShowSuccessMessage: true});
                this.props.history.push(`/welcome/${this.state.username}`)
            }
        ).catch(()=> {
            this.setState({hasLoginFailed: true, ShowSuccessMessage:false})
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                <h1>Login</h1>
                <Button><Link style={{color: "white"}} to="/register">Create New User</Link></Button>
                <div className={Styles.design}>
                <div className="form-group col-md-10">
                {this.state.hasLoginFailed && <div className=" alert alert-warning">Invalid Credentials</div>}
           <label>Username</label>
          <input type="username" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
       </div>
        <div className="form-group col-md-10">
        <label>Password</label>
        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange}/>
       </div>
       </div>
        <Button clicked={this.loginClicked}>Submit</Button>
                </div>
            </div>
        )
    }
 } 

 export default Login;