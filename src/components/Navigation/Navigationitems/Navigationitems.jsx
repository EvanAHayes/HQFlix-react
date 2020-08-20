import React from 'react';
import NavItem from '../Navitems/Navitems';
import classes from './NavigationItems.module.css';


const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavItem link="/">Home</NavItem>
        <NavItem link="SignIn">Sign-In</NavItem>
         {/* <NavItem><Link to="/" >Home</Link></NavItem> */}
         {/* <NavItem><Link to ="SignIn">Sign-In</Link></NavItem> */}
    </ul>
);

export default navigationItems;