import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="container" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ color: 'var(--color-green-emerald)', fontWeight: 600, letterSpacing: '2px', marginBottom: '1rem' }}
      >
        {t.hero.greeting}
      </motion.p>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem' }}
      >
        {t.hero.name}
      </motion.h1>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="gradient-text"
        style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 600, marginBottom: '2rem' }}
      >
        {t.hero.role}
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 3rem' }}
      >
        {t.hero.tagline} <br />
        <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{t.hero.subtagline}</span>
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
      >
        <a href="#projects" className="glass" style={{
          padding: '1rem 2.5rem',
          textDecoration: 'none',
          color: 'var(--text-primary)',
          fontWeight: 600,
          background: 'var(--gradient-green)',
          border: 'none',
          color: '#000'
        }}>
          {t.hero.cta_primary}
        </a>
        <a href="#contact" className="glass" style={{
          padding: '1rem 2.5rem',
          textDecoration: 'none',
          color: 'var(--text-primary)',
          fontWeight: 600
        }}>
          {t.hero.cta_secondary}
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
