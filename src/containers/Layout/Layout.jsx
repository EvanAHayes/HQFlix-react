import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import ToolBar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css'

class Layout extends Component {
  render(){
      return(
      <Aux>
       <ToolBar />
       <main className={classes.Content}>
              {this.props.children}
         </main>
            </Aux>
      )
  }
}

export default Layout;