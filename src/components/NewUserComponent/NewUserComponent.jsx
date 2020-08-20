import React, { Component } from 'react';

class NewUserComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
            firstname: '',
            lastname: ''
        }
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //has to match name in elements below 
        //use square brackets when you want to change a variable and not a specific costant in the state
        //the name is from the input fields and that state has to match
        this.setState({ [event.target.name]: event.target.value })
    }

    render(){
        return(
            <div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label>Username</label>
      <input type="username" class="form-control" name="username" />
    </div>
    <div class="form-group col-md-6">
      <label>Password</label>
      <input type="password" class="form-control" name="password" />
    </div>
  </div>
  <div class="form-group">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" name="email" />
    </div>
    <div class="form-group col-md-6">
      <label>First Name</label>
      <input type="firstname" class="form-control" name="firstname" />
    </div>
    <div class="form-group col-md-6">
      <label>Last Name</label>
      <input type="lastname" class="form-control" name="lastname" />
    </div>

  <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
        )
    }
}

export default NewUserComponent;