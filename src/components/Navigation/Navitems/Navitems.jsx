import React from 'react';
import classes from './Navitems.module.css';
import {Link} from 'react-router-dom';

const navItem = (props) => (
       <li className={classes.NavigationItem}>
           <Link 
           to={props.link}
           className={props.active ? classes.active : null}>{props.children}</Link>
       </li>
  
);

export default navItem;