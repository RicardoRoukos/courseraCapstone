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
            <Card image="center.png" texth3="Bruchetta" textp="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. " price="$5.99" />
            <Card image="right.png" texth3="Lemon Dessert" textp="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." price="$5.00" />
          

        </div>
      </section>
    </>
  );
}

export default Main;
