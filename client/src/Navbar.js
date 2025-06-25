import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/medicine', label: 'Medicine Details' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <motion.div className="navbar-brand" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        Medilens
      </motion.div>
      <ul className="navbar-links">
        {navLinks.map(link => (
          <motion.li key={link.to} whileHover={{ scale: 1.1 }} className={location.pathname === link.to ? 'active' : ''}>
            <Link to={link.to}>{link.label}</Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
} 