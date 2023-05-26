// import logo from './logo.svg';
import "./App.css";
import Button from "./button";
import Card from "./card";

function Main() {
  const handleClick = () => {
    console.log('handleClick');
  }


  return (
    <>
      <section class="littleLemonSection">
        <div class="littleLemon">
        <div class="littleLemonText">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
          We are a family owned Mediteranean restaurant focused on traditional recipes served with a modern twist
          </p>
          <Button text='Reserve a table' onClick={handleClick} />
        </div>
        <div class="imageLemon">
          <img src="bag.png" alt="logo" />
        </div>
        </div>
      </section>
      <section>
        <div class="topRow">
          <h1>Specials</h1>
        </div>
        <div class="cards">
        
            <Card image="left.png" texth3="Greek Salad" textp="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." price="$12.99" />
          
       
          <div class="card">
            <img src="logo192.png" alt="logo"/>
            <div class="cardText">
                <div class="cardTextTop">
                <h3>Greek Salad</h3>
                <p><span>$15.32</span></p>
                </div>
            
                <p>greek salad greek salad greek salad  greek salad  greek salad  greek salad </p>
                <b>Order a delivery</b>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
