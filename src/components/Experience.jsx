import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>
        <span className="gradient-text">{t.experience.title}</span>
      </h2>
      
      <div style={{
        position: 'relative',
        maxWidth: '800px',
        margin: '0 auto',
        paddingLeft: '2rem',
        borderLeft: '2px solid var(--color-green-dark)'
      }}>
        {t.experience.jobs.map((job, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass"
            style={{
              padding: '2rem',
              marginBottom: '3rem',
              position: 'relative'
            }}
          >
            {/* Timeline dot */}
            <div style={{
              position: 'absolute',
              left: '-2.7rem',
              top: '2.5rem',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'var(--color-green-neon)',
              boxShadow: '0 0 10px var(--color-green-neon)'
            }}></div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>{job.role}</h3>
                <p style={{ color: 'var(--color-green-emerald)', fontWeight: 600 }}>{job.company}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{job.period}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{job.location}</p>
              </div>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontStyle: 'italic' }}>{job.description}</p>
            
            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
              {job.highlights.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
