import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  const teamMembers = [
    { name: 'Dr. Sarah Johnson', role: 'Chief Medical Officer', avatar: '👩‍⚕️' },
    { name: 'Dr. Michael Chen', role: 'AI Research Director', avatar: '👨‍⚕️' },
    { name: 'Dr. Emily Rodriguez', role: 'Clinical Director', avatar: '👩‍⚕️' },
    { name: 'Ranbir Singh', role: 'Lead Developer', avatar: '👨‍💻' },
  ];

  const values = [
    { icon: '🎯', title: 'Precision', desc: 'Accurate diagnostics through advanced AI' },
    { icon: '🤝', title: 'Trust', desc: 'Building confidence in healthcare decisions' },
    { icon: '💡', title: 'Innovation', desc: 'Cutting-edge technology for better care' },
    { icon: '❤️', title: 'Care', desc: 'Patient-centered approach to healthcare' },
  ];

  return (
    <div className="about-page">
      <motion.div className="about-hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1>About Medilens</h1>
        <p>Revolutionizing healthcare through intelligent diagnostics and compassionate care</p>
      </motion.div>

      <div className="about-content">
        <motion.section className="mission-section" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2>Our Mission</h2>
          <p>At Medilens, we believe that every patient deserves access to the most advanced diagnostic tools available. Our mission is to bridge the gap between cutting-edge AI technology and compassionate healthcare, ensuring that medical professionals have the tools they need to make informed decisions quickly and accurately.</p>
        </motion.section>

        <motion.section className="values-section" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, idx) => (
              <motion.div key={value.title} className="value-card" 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="team-section" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <h2>Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <motion.div key={member.name} className="team-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="team-avatar">{member.avatar}</div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="stats-section" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
              <h3>10,000+</h3>
              <p>Diagnoses Completed</p>
            </motion.div>
            <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
              <h3>500+</h3>
              <p>Healthcare Partners</p>
            </motion.div>
            <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
              <h3>99.2%</h3>
              <p>Accuracy Rate</p>
            </motion.div>
            <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
              <h3>24/7</h3>
              <p>Support Available</p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 