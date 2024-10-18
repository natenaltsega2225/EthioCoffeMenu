import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About'; // Import your other pages as needed
import Menu from './pages/Menu/Menu'; // Keep the Menu import
import Order from './pages/Order/Order'; // Order component
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} /> {/* Order route */}
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
