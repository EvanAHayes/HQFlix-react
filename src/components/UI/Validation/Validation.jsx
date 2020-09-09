import React from 'react'

function ValidationMessage(props) {
    if (!props.valid) {
      return <div className="alert alert-warning">{props.message}</div>
    }
    
    return null;
  }

  export default ValidationMessage;