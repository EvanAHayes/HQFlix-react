import React from 'react';
import Logo from '../../Images/logo.png';
import classes from './Logo.module.css'

const logo = () => (
 <div className={classes.Logo}>
     <img src={Logo} alt="HQ Flix" />
 </div>
);

export default logo; 