import React from 'react';

function Button({text,availableTimes}) {

  
    return (
      <button className="my-button" >
        {text}
      </button>
    );
  }
  export default Button;