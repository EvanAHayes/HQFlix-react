import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../Navigationitems/Navigationitems.jsx'


const Toolbar = () => (
 <header className={classes.Toolbar}>
   <nav>
       <NavigationItems />
   </nav>
  </header>
);


export default Toolbar;