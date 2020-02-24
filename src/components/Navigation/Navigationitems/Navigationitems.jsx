import React from 'react';
import NavItem from '../Navitems/Navitems';
import classes from './NavigationItems.module.css'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
         <NavItem link="/">Home</NavItem>
         <NavItem link="/">Sign-In</NavItem>
    </ul>
);

export default navigationItems;