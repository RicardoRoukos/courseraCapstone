// import logo from './logo.svg';
import "./App.css";
import Button from "./button";
import Card from "./card";
import Ratingcard from "./ratingcard";

function Main() {
  const handleClick = () => {
    console.log('handleClick');
  }


  return (
    <>
      <section className="littleLemonSection">
        <div className="littleLemon">
        <div className="littleLemonText">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
          We are a family owned Mediteranean restaurant focused on traditional recipes served with a modern twist
          </p>
          <Button text='Reserve a table' onClick={handleClick} />
        </div>
        <div className="imageLemon">
          <img src="bag.png" alt="logo" />
        </div>
        </div>
      </section>
      <section>
        <div className="topRow">
          <h1>Specials</h1>
        </div>
        <div className="cards">
        
            <Card image="left.png" texth3="Greek Salad" textp="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." price="$12.99" />
            <Card image="center.png" texth3="Bruchetta" textp="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. " price="$5.99" />
            <Card image="right.png" texth3="Lemon Dessert" textp="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." price="$5.00" />
          

        </div>
      </section>
      <section className="rating">
          <Ratingcard Rating="4.5" Src="logo192.png" Review="Great experience" Name="Eliott" />
          <Ratingcard Rating="4.1" Src="logo192.png" Review="Not bad experience" Name="Ricardo" />
          <Ratingcard Rating="4.8" Src="logo192.png" Review="wonderful place " Name="Luciana" />
          <Ratingcard Rating="4.1" Src="logo192.png" Review="Good food" Name="Jimmy" />
      </section>
      <section className="bannerdescription">
        <div className="leftDescription">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
          </p>
        </div>
        <div className="rightDescription">
          <img src="left.png" alt="food" />
          <img src="center.png" className="imageTop" alt="food" />
        </div>
      </section>
    </>
  );
}

export default Main;
