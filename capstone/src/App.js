// import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';
import Main from './main';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './home';
import About from './about';
import Menu from './menu';
import Reservations from './reservations';
import OrderOnline from './orderOnline';
import Login from './login';

function App() {
  return(
    <>
       <Router>
        <Header />
        <Routes>
        <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
          <Route path="/reservations" component={Reservations} />
          <Route path="/order-online" component={OrderOnline} />
          <Route path="/login" component={Login} />
        </Routes>
     
 
       </Router>

    <Main />
    <Footer />


   
    </>
  )

}

export default App;
