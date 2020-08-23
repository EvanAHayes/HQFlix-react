import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import AuthenticationService from '../Authentication/AuthenticationService.js';
import {Link} from 'react-router-dom';

 class Login extends Component {
     
    //any properties is passed down to super class constructor
    constructor(props){
        super(props)
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
        //has to match name in elements below 
        //use square brackets when you want to change a variable and not a specific costant in the state
        //the name is from the input fields and that state has to match
        this.setState({ [event.target.name]: event.target.value })
    }

    loginClicked() {
        if(this.state.username === "ehayes" && this.state.password ==="dummy"){
            AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
              this.setState({ShowSuccessMessage: true})
        }
        else{

            this.setState({hasLoginFailed: true, ShowSuccessMessage:false})

        console.log('failed')
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                <h1>Login</h1>
                <Button><Link to="/New">Create New User</Link></Button>
                <div class="form-group col-md-10">
                {this.state.hasLoginFailed && <div className=" alert alert-warning">Invalid Credentials</div>}
           <label>Username</label>
          <input type="username" class="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
       </div>
        <div class="form-group col-md-10">
        <label>Password</label>
        <input type="password" class="form-control" name="password" value={this.state.password} onChange={this.handleChange}/>
       </div>
        <Button clicked={this.loginClicked}>Submit</Button>
                </div>
            </div>
        )
    }
 } 

 export default Login;