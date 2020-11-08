import React from 'react';
import NavItem from '../Navitems/Navitems';
import classes from './NavigationItems.module.css';
import { Component } from 'react';
import AuthenticationService from '../../Authentication/AuthenticationService.js';
import { withRouter } from 'react-router-dom';


class navigationItems extends Component {

   render() {

      const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
      const username = AuthenticationService.getLoggedInUserName();

      return (
         <ul className={classes.NavigationItems}>
            {!isUserLoggedIn && <NavItem link="/register">Register</NavItem>}
            {!isUserLoggedIn && <NavItem link="/SignIn">Login</NavItem>}
            {isUserLoggedIn && <NavItem link={`/welcome:${username}`}>Home</NavItem>}
            {isUserLoggedIn && <NavItem link={`/${username}/favorites`}>Favorites</NavItem>}
            {isUserLoggedIn && <NavItem link="/" clicked={AuthenticationService.logout}>LogOut</NavItem>}
         </ul>
      )
   }
}

export default withRouter(navigationItems);