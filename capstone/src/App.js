import './App.css';
import Header from './header';
import Footer from './footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home';
import About from './about';
import Menu from './menu';
import Reservations from './reservations';
import OrderOnline from './orderOnline';
import Login from './login';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
