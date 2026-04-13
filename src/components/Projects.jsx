import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>
        <span className="gradient-text">{t.projects.title}</span>
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem'
      }}>
        {t.projects.items.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass"
            style={{ 
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <p style={{ color: 'var(--color-green-emerald)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>{project.tech}</p>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.name}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{project.description}</p>
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '0.9rem' }}>
                <Github size={18} /> Code
              </a>
              <a href="#" style={{ color: 'var(--color-green-neon)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '0.9rem' }}>
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
