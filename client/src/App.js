import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import MedicineDetails from './pages/MedicineDetails';
import Contact from './pages/Contact';
import './App.css';
import './Navbar.css';
import './pages/Home.css';
import './pages/About.css';
import './pages/Services.css';
import './pages/MedicineDetails.css';
import './pages/Contact.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/medicine" element={<MedicineDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
