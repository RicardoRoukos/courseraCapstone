// import logo from './logo.svg';
import './App.css';
import Header from './header';

function Footer() {
    return (    <>
        <footer>
          <div>
              <img src="logo192.png"  alt="logo" />
          </div>
          <div>
              <h1>Navigation</h1>
              <Header />
          </div>
          <div>
              <h2>Contact</h2>
              <ul>
                  <li><a href="index.js">Address</a></li>
                  <li><a href="index.js">Phone Number</a></li>
                  <li><a href="index.js">Email</a></li>
              </ul>
          </div>
          <div>
              <h2>Social Media Links</h2>
              <ul>
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
