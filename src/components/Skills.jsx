import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>
        <span className="gradient-text">{t.skills.title}</span>
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {t.skills.categories.map((cat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass"
            style={{ padding: '2rem' }}
          >
            <h3 style={{ color: 'var(--color-green-neon)', marginBottom: '1.5rem', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {cat.name}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {cat.list.map((skill, i) => (
                <span 
                  key={i}
                  style={{
                    background: 'rgba(57, 255, 20, 0.05)',
                    border: '1px solid rgba(57, 255, 20, 0.2)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
