import React, { Component } from 'react';
import ValidationMsg from '../UI/Validation/Validation';
import Button from '../UI/Button/Button';
import Styles from './NewUserComponent.module.css';
import NewUserService from '../API/NewUserService.js';
import { withRouter } from "react-router-dom";


class NewUserComponent extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      isUsernameValid: false,
      password: '',
      isPasswordValid: false,
      email: '',
      isEmailValid: false,
      firstName: '',
      isFirstnameValid: false,
      lastName: '',
      isLastnameValid: false,
      formValid: false,
      errorMsg: {}
    }
  }



  validateForm = () => {
    const { isUsernameValid, isPasswordValid, isEmailValid, isFirstnameValid, isLastnameValid } = this.state;
    this.setState({ formValid: isUsernameValid && isPasswordValid && isEmailValid && isFirstnameValid && isLastnameValid })
  }

  updateUsername = (username) => {
    this.setState({ username }, this.validateUsername)
  }

  validateUsername = () => {
    const { username } = this.state;
    let isUsernameValid = true;
    let errorMsg = { ...this.state.errorMsg }

    if (username.length < 5) {
      isUsernameValid = false;
      errorMsg.username = 'Must be at least 5 characters long'
    }

    this.setState({ isUsernameValid, errorMsg }, this.validateForm)
  }

  updatePassword = (password) => {
    this.setState({ password }, this.validatePassword)
  }

  validatePassword = () => {
    const { password } = this.state;
    let isPasswordValid = true;
    let errorMsg = { ...this.state.errorMsg }

    if (password.length < 5) {
      isPasswordValid = false;
      errorMsg.password = "Must be atleast 5 characters long"
    }
    else if (!/[A-Z]/.test(password)) {
      isPasswordValid = false;
      errorMsg.password = "Must include capital letter"
    }
    else if (!/[0-9]/.test(password)) {
      isPasswordValid = false;
      errorMsg.password = "Must include a number"
    }
    this.setState({ isPasswordValid, errorMsg }, this.validateForm)
  }

  updateEmail = (email) => {
    this.setState({ email }, this.validateEmail)
  }

  validateEmail = () => {
    const { email } = this.state;
    let isEmailValid = true;
    let errorMsg = { ...this.state.errorMsg }


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      isEmailValid = false;
      errorMsg.email = 'Invalid email format need @'
    }

    this.setState({ isEmailValid, errorMsg }, this.validateForm)
  }

  updateFirstName = (firstName) => {
    this.setState({ firstName }, this.validateFirstname)
  }

  validateFirstname = () => {
    const { firstName } = this.state;
    let isFirstnameValid = true;
    let errorMsg = { ...this.state.errorMsg }

    if (firstName.length <= 0) {
      isFirstnameValid = false;
      errorMsg.firstname = "Please Enter First Name"
    }

    this.setState({ isFirstnameValid, errorMsg }, this.validateForm)
  }

  updateLastName = (lastName) => {
    this.setState({ lastName }, this.validateLastName)
  }

  validateLastName = () => {
    const { lastName } = this.state;
    let isLastnameValid = true;
    let errorMsg = { ...this.state.errorMsg }

    if (lastName.length <= 0) {
      isLastnameValid = false;
      errorMsg.lastname = "Please Enter Last Name"
    }

    this.setState({ isLastnameValid, errorMsg }, this.validateForm)
    this.addUser = this.addUser.bind(this);
  }

  addUser(e) {
    e.preventDefault();

    let RegisterNewUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
  
    NewUserService.CreateNewUser(RegisterNewUser)
      .then(() => this.props.history.push('/SignIn'))
  }

  render() {
    return (
      <div className={Styles.design}>
        <div className="form-group">
          <div className="form-group col-md-6 offset-md-3">
            <label>Username</label>
            <ValidationMsg className="alert alert-warning" valid={this.state.isUsernameValid} message={this.state.errorMsg.username} />
            <input type="text" className="form-control" name="username" onChange={(e) => this.updateUsername(e.target.value)} value={this.state.username} />
          </div>
          <div className="form-group col-md-6 offset-md-3">
            <label>Password</label>
            <ValidationMsg className="alert alert-warning" valid={this.state.isPasswordValid} message={this.state.errorMsg.password} />
            <input type="text" className="form-control" name="password" onChange={(e) => this.updatePassword(e.target.value)} value={this.state.password} />
          </div>
        </div>
        <div className="form-group col-md-6 offset-md-3">
          <label>Email</label>
          <ValidationMsg className="alert alert-warning" valid={this.state.isEmailValid} message={this.state.errorMsg.email} />
          <input type="email" className="form-control" name="email" onChange={(e) => this.updateEmail(e.target.value)} value={this.state.email} />
        </div>
        <div className="form-group col-md-6 offset-md-3">
          <label>First Name</label>
          <ValidationMsg className="alert alert-warning" valid={this.state.isFirstnameValid} message={this.state.errorMsg.firstname} />
          <input type="text" className="form-control" name="firstName" onChange={(e) => this.updateFirstName(e.target.value)} value={this.state.firstname} />
        </div>
        <div className="form-group col-md-6 offset-md-3">
          <label>Last Name</label>
          <ValidationMsg className="alert alert-warning" valid={this.state.isLastnameValid} message={this.state.errorMsg.lastname} />
          <input type="text" className="form-control" name="lastName" onChange={(e) => this.updateLastName(e.target.value)} value={this.state.lastname} />
        </div>

        <Button type="submit" className="btn btn-success" disabled={!this.state.formValid} clicked={this.addUser}>Sign in</Button>
      </div>
    )
  }
}



export default withRouter(NewUserComponent);