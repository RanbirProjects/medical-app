import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <div className="contact-page">
      <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>Contact Us</motion.h2>
      <motion.form className="contact-form" onSubmit={handleSubmit} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required />
        <motion.button type="submit" whileHover={{ scale: 1.05 }}>Send Message</motion.button>
        {sent && <motion.div className="sent-msg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>Thank you! We'll be in touch soon.</motion.div>}
      </motion.form>
      <div className="contact-info">
        <span>📧 info@medilens.com</span>
        <span>📞 +1 234 567 8901</span>
        <span>🌐 www.medilens.com</span>
      </div>
    </div>
  );
} 