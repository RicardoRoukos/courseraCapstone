import React from 'react';

function Button({text,onClick}) {

  
    return (
      <button className="my-button" onClick={onClick}>
        {text}
      </button>
    );
  }
  export default Button;