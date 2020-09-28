import React from 'react'

function ValidationMessage(props) {
    if (!props.valid) {
      return <div>{props.message}</div>
    }
    
    return null;
  }

  export default ValidationMessage;