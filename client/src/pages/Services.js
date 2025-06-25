import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Services.css';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      name: 'AI X-Ray Analysis',
      price: '$99',
      duration: '24 hours',
      features: ['Instant anomaly detection', 'Detailed report', 'Expert consultation', 'Follow-up support'],
      icon: '🩻',
      description: 'Advanced AI-powered analysis of chest X-rays with 99.2% accuracy rate.'
    },
    {
      id: 2,
      name: 'MRI Scan Insights',
      price: '$199',
      duration: '48 hours',
      features: ['Neurological analysis', 'Musculoskeletal review', '3D visualization', 'Priority support'],
      icon: '🧠',
      description: 'Comprehensive MRI analysis for neurological and musculoskeletal conditions.'
    },
    {
      id: 3,
      name: 'Ultrasound Diagnostics',
      price: '$149',
      duration: '12 hours',
      features: ['Real-time analysis', 'Fetal monitoring', 'Cardiac assessment', 'Emergency support'],
      icon: '🩺',
      description: 'Real-time ultrasound interpretation with emergency response capabilities.'
    },
    {
      id: 4,
      name: 'Comprehensive Health Report',
      price: '$299',
      duration: '72 hours',
      features: ['Full body analysis', 'Risk assessment', 'Prevention plan', 'Lifetime access'],
      icon: '📊',
      description: 'Complete health assessment with personalized prevention recommendations.'
    }
  ];

  return (
    <div className="services-page">
      <motion.div className="services-hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1>Our Services</h1>
        <p>Comprehensive AI-powered diagnostic solutions for modern healthcare</p>
      </motion.div>

      <div className="services-content">
        <div className="services-grid">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              className={`service-card ${selectedService === service.id ? 'selected' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <div className="service-price">
                <span className="price">{service.price}</span>
                <span className="duration">/ {service.duration}</span>
              </div>
              <p className="service-description">{service.description}</p>
              
              <motion.div 
                className="service-features"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: selectedService === service.id ? 'auto' : 0,
                  opacity: selectedService === service.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <ul>
                  {service.features.map((feature, featureIdx) => (
                    <motion.li 
                      key={featureIdx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: featureIdx * 0.1 }}
                    >
                      ✓ {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button 
                  className="book-now-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.section className="why-choose-section" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <h2>Why Choose Medilens?</h2>
          <div className="benefits-grid">
            <motion.div className="benefit-card" whileHover={{ y: -5 }}>
              <div className="benefit-icon">⚡</div>
              <h3>Fast Results</h3>
              <p>Get diagnostic results in hours, not days</p>
            </motion.div>
            <motion.div className="benefit-card" whileHover={{ y: -5 }}>
              <div className="benefit-icon">🎯</div>
              <h3>High Accuracy</h3>
              <p>99.2% accuracy rate across all diagnostics</p>
            </motion.div>
            <motion.div className="benefit-card" whileHover={{ y: -5 }}>
              <div className="benefit-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>HIPAA compliant with end-to-end encryption</p>
            </motion.div>
            <motion.div className="benefit-card" whileHover={{ y: -5 }}>
              <div className="benefit-icon">👨‍⚕️</div>
              <h3>Expert Support</h3>
              <p>24/7 access to medical professionals</p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 