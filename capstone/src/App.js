import './App.css';
import Header from './header';
import Footer from './footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './home';
import About from './about';
import Menu from './menu';
import Reservations from './reservations';
import OrderOnline from './orderOnline';
import Contact from './contact';
import Confirm from './confirm';

function App() {
  const [availableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations availableTimes={availableTimes} />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
