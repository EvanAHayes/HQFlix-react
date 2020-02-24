import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import ToolBar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
  render(){
      return(
      <Aux>
       <ToolBar />
      </Aux>
      )
  }
}

export default Layout;