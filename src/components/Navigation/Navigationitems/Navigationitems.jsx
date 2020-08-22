import React from 'react';
import NavItem from '../Navitems/Navitems';
import classes from './NavigationItems.module.css';
import { Component } from 'react';
import AuthenticationService from '../../Authentication/AuthenticationService.js';
import {withRouter} from 'react-router-dom';


class navigationItems extends Component{

render(){

    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    
 return(
    <ul className={classes.NavigationItems}>
        <NavItem link="/">Home</NavItem>
        {!isUserLoggedIn && <NavItem link="SignIn">Sign-In</NavItem>}
        {isUserLoggedIn && <NavItem link="/logout" clicked={AuthenticationService.logout}>LogOut</NavItem>}
        
         {/* <NavItem><Link to="/" >Home</Link></NavItem> */}
         {/* <NavItem><Link to ="SignIn">Sign-In</Link></NavItem> */}
    </ul>
 )
}
};

export default withRouter(navigationItems);