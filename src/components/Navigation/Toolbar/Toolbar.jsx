import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../Navigationitems/Navigationitems.jsx';
import Logo from '../../Logo/Logo';


const Toolbar = () => (
 <header className={classes.Toolbar}>
     <div className={classes.Logo}>
         <Logo />
     </div>
   <nav className={classes.DesktopOnly}>
       <NavigationItems />
   </nav>
  </header>
);


export default Toolbar;