// import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function Footer() {
    const imgStyle =  {
        alignSelf: 'center',
    };
    const paddingLeft = {
        paddingLeft: 0,
    }
    return (    <>
        <footer>
          <div style={imgStyle}>
              <img src="logo.png"  alt="logo" />
          </div>
          <div>
              <h1>Navigation</h1>
              <ul style={paddingLeft}>
              <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
  
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
     
     
              </ul>
          </div>
          <div>
              <h2>Contact</h2>
              <ul style={paddingLeft}>
                  <li><a >Address :Chicago</a></li>
                  <li><a href="tel: 001111111">Phone Number: +1 1111111</a></li>
                  <li><a href="mailto: littleLemon@littlelemon.com">Email: littleLemon@littlelemon.com</a></li>
              </ul>
          </div>
          <div>
              <h2>Social Media Links</h2>
              <ul style={paddingLeft}>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
              </ul>
          </div>
        </footer>
      </>
      )

}

export default Footer;
