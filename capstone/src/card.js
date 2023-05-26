import React from 'react';

function Card({image,texth3,price,textp}) {

  
    return (
        <div class="card">
        <img src={image} alt="logo"/>
        <div className="cardText">
            <div className="cardTextTop">
            <h3>{texth3}</h3>
            <p><span>{price}</span></p>
            </div>

            <p>{textp}</p>
            <b>Order a delivery</b>
    </div>
    </div>
    );
  }
  export default Card;