import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Home.css';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = ['💊', '🩺', '🧬', '🔬', '💉', '📊', '🏥', '⚕️'];

  return (
    <div className="home-hero">
      {/* Floating background elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="floating-element"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.3
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        >
          {element}
        </motion.div>
      ))}

      {/* Mouse follower */}
      <motion.div
        className="mouse-follower"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <motion.div 
        className="hero-content" 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        style={{ y, opacity }}
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          Welcome to Medilens
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          AI Medical Diagnostics & Imaging
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hero-description"
        >
          Experience the future of healthcare with Medilens. Our platform combines advanced AI technology with intuitive design to deliver precise diagnostics and clear imaging for patients and professionals alike.
        </motion.p>

        <motion.div 
          className="hero-features"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <strong>Why Medilens?</strong>
          <div className="features-grid">
            <motion.div 
              className="feature-item"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="feature-icon">👨‍⚕️</span>
              <span>Trusted by top doctors</span>
            </motion.div>
            <motion.div 
              className="feature-item"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="feature-icon">⚡</span>
              <span>Fast & accurate results</span>
            </motion.div>
            <motion.div 
              className="feature-item"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="feature-icon">🎯</span>
              <span>99.2% accuracy rate</span>
            </motion.div>
            <motion.div 
              className="feature-item"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="feature-icon">🔒</span>
              <span>Secure & private</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="cta-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.a 
            href="/services" 
            className="hero-cta primary"
            whileHover={{ 
              scale: 1.07,
              boxShadow: "0 8px 25px rgba(85, 107, 102, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Services
          </motion.a>
          <motion.a 
            href="/about" 
            className="hero-cta secondary"
            whileHover={{ 
              scale: 1.07,
              boxShadow: "0 8px 25px rgba(177, 211, 207, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div 
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↓
          </motion.div>
          <span>Scroll to explore</span>
        </motion.div>
      </motion.div>
      
      {/* Main doctor background image */}
      <motion.img 
        className="hero-image"
        src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80"
        alt="Medical Team"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
      
      {/* Medical team photo - top left */}
      <motion.img
        className="hero-team-img"
        src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=400&q=80"
        alt="Modern Hospital"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
      
      {/* Modern hospital image - top right */}
      <motion.img
        className="hero-hospital-img"
        src="https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=crop&w=400&q=80"
        alt="Doctor"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
      
      {/* Heart symbol - bottom left */}
      <motion.div
        className="hero-heart-symbol"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        whileHover={{ scale: 1.2, rotate: 360 }}
      >
        ❤️
      </motion.div>
      
      {/* Stethoscope symbol - bottom right */}
      <motion.div
        className="hero-stethoscope-symbol"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        whileHover={{ scale: 1.2, rotate: -360 }}
      >
        🩺
      </motion.div>
    </div>
  );
} 