// import logo from './logo.svg';
import './App.css';


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
                  <li><a href="index.js">Home</a></li>
                  <li><a href="index.js">About</a></li>
                  <li><a href="index.js">Menu</a></li>
                  <li><a href="index.js">Reservations</a></li>
                  <li><a href="index.js">Order Online</a></li>
                  <li><a href="index.js">Login</a></li>
              </ul>
          </div>
          <div>
              <h2>Contact</h2>
              <ul style={paddingLeft}>
                  <li><a href="index.js">Address</a></li>
                  <li><a href="index.js">Phone Number</a></li>
                  <li><a href="index.js">Email</a></li>
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
