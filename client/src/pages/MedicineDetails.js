import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './MedicineDetails.css';

export default function MedicineDetails() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const diagnosticServices = [
    {
      title: 'AI-Powered X-Ray Analysis',
      desc: 'Instant, accurate detection of anomalies in chest X-rays using deep learning.',
      icon: '🩻',
      details: 'Advanced chest X-ray analysis with 99.2% accuracy. Detects pneumonia, lung cancer, tuberculosis, and other respiratory conditions.',
      features: ['Instant Results', 'High Accuracy', 'Detailed Reports', 'Expert Consultation']
    },
    {
      title: 'MRI Scan Insights',
      desc: 'Advanced pattern recognition for neurological and musculoskeletal MRI scans.',
      icon: '🧠',
      details: 'Comprehensive MRI analysis for brain, spine, joints, and soft tissues. 3D visualization and detailed anatomical mapping.',
      features: ['3D Visualization', 'Neurological Analysis', 'Musculoskeletal Review', 'Priority Support']
    },
    {
      title: 'Ultrasound Diagnostics',
      desc: 'Real-time, AI-assisted interpretation of ultrasound images for faster decisions.',
      icon: '🩺',
      details: 'Real-time ultrasound interpretation for pregnancy, cardiac, abdominal, and emergency diagnostics.',
      features: ['Real-time Analysis', 'Fetal Monitoring', 'Cardiac Assessment', 'Emergency Support']
    },
    {
      title: 'Smart Health Reports',
      desc: 'Personalized, easy-to-understand diagnostic summaries for patients and doctors.',
      icon: '📄',
      details: 'Comprehensive health reports with risk assessment, prevention recommendations, and follow-up care plans.',
      features: ['Personalized Reports', 'Risk Assessment', 'Prevention Plans', 'Lifetime Access']
    },
    {
      title: 'Blood Test Analysis',
      desc: 'AI-powered interpretation of blood work with instant results and trend analysis.',
      icon: '🩸',
      details: 'Complete blood count, metabolic panel, and specialized tests with AI-powered interpretation and trend tracking.',
      features: ['Instant Results', 'Trend Analysis', 'Normal Ranges', 'Health Insights']
    },
    {
      title: 'ECG Heart Monitoring',
      desc: 'Advanced cardiac rhythm analysis with AI-powered arrhythmia detection.',
      icon: '❤️',
      details: 'Electrocardiogram analysis for heart rhythm disorders, myocardial infarction, and cardiac health assessment.',
      features: ['Rhythm Analysis', 'Arrhythmia Detection', 'Cardiac Health', 'Emergency Alerts']
    }
  ];

  const treatmentOptions = [
    {
      category: 'Cardiovascular',
      treatments: [
        { name: 'Hypertension Management', desc: 'Blood pressure control with personalized medication plans' },
        { name: 'Heart Disease Prevention', desc: 'Risk assessment and lifestyle modification programs' },
        { name: 'Arrhythmia Treatment', desc: 'Cardiac rhythm management and monitoring' }
      ]
    },
    {
      category: 'Respiratory',
      treatments: [
        { name: 'Asthma Control', desc: 'Personalized asthma management and prevention strategies' },
        { name: 'COPD Management', desc: 'Chronic obstructive pulmonary disease treatment plans' },
        { name: 'Pneumonia Treatment', desc: 'Antibiotic therapy and respiratory support' }
      ]
    },
    {
      category: 'Neurological',
      treatments: [
        { name: 'Stroke Prevention', desc: 'Risk factor management and preventive care' },
        { name: 'Migraine Management', desc: 'Pain relief and prevention strategies' },
        { name: 'Epilepsy Control', desc: 'Seizure management and medication optimization' }
      ]
    },
    {
      category: 'Oncology',
      treatments: [
        { name: 'Early Detection', desc: 'Screening programs and diagnostic imaging' },
        { name: 'Treatment Planning', desc: 'Personalized cancer treatment strategies' },
        { name: 'Follow-up Care', desc: 'Post-treatment monitoring and support' }
      ]
    }
  ];

  const categories = ['all', 'Cardiovascular', 'Respiratory', 'Neurological', 'Oncology'];

  return (
    <div className="medicine-details">
      <motion.div className="medicine-hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1>Comprehensive Medical Diagnostics & Treatment</h1>
        <p>Advanced AI-powered healthcare solutions for accurate diagnosis and personalized treatment plans</p>
      </motion.div>

      <div className="medicine-content">
        <motion.section className="diagnostics-section" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2>Our Diagnostic Services</h2>
          <div className="diagnostic-cards">
            {diagnosticServices.map((service, idx) => (
              <motion.div
                key={service.title}
                className="diagnostic-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.7 }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px #B1D3CF55' }}
              >
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="short-desc">{service.desc}</p>
                <div className="detailed-info">
                  <p className="details">{service.details}</p>
                  <div className="features">
                    {service.features.map((feature, featureIdx) => (
                      <span key={featureIdx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="treatments-section" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <h2>Treatment Options by Category</h2>
          
          <div className="category-filters">
            {categories.map(category => (
              <motion.button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === 'all' ? 'All Categories' : category}
              </motion.button>
            ))}
          </div>

          <div className="treatments-grid">
            {treatmentOptions
              .filter(option => selectedCategory === 'all' || option.category === selectedCategory)
              .map((category, idx) => (
                <motion.div
                  key={category.category}
                  className="treatment-category"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                >
                  <h3>{category.category}</h3>
                  <div className="treatment-list">
                    {category.treatments.map((treatment, treatmentIdx) => (
                      <motion.div
                        key={treatment.name}
                        className="treatment-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: treatmentIdx * 0.1, duration: 0.5 }}
                        whileHover={{ x: 10 }}
                      >
                        <h4>{treatment.name}</h4>
                        <p>{treatment.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.section>

        <motion.section className="technology-section" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <h2>Advanced Technology</h2>
          <div className="tech-grid">
            <motion.div className="tech-card" whileHover={{ y: -5 }}>
              <div className="tech-icon">🤖</div>
              <h3>AI & Machine Learning</h3>
              <p>Advanced algorithms trained on millions of medical cases for unparalleled accuracy</p>
            </motion.div>
            <motion.div className="tech-card" whileHover={{ y: -5 }}>
              <div className="tech-icon">🔬</div>
              <h3>Deep Learning</h3>
              <p>Neural networks that continuously learn and improve diagnostic capabilities</p>
            </motion.div>
            <motion.div className="tech-card" whileHover={{ y: -5 }}>
              <div className="tech-icon">📊</div>
              <h3>Data Analytics</h3>
              <p>Comprehensive data analysis for trend identification and predictive healthcare</p>
            </motion.div>
            <motion.div className="tech-card" whileHover={{ y: -5 }}>
              <div className="tech-icon">🔒</div>
              <h3>Secure Platform</h3>
              <p>HIPAA-compliant security with end-to-end encryption for patient privacy</p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 