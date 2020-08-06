import React from 'react';
import NavItem from '../Navitems/Navitems';
import classes from './NavigationItems.module.css';
import {Link} from 'react-router-dom'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
         <NavItem><Link to="/" >Home</Link></NavItem>
         <NavItem><Link to ="SignIn">Sign-In</Link></NavItem>
    </ul>
);

export default navigationItems;