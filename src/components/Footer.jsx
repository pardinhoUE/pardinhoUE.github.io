import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" style={{ padding: '8rem 0 4rem', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
          <span className="gradient-text">{t.contact.title}</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
          {t.contact.text}
        </p>
        
        <a 
          href="mailto:nico1993@gmail.com" 
          className="glass"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1.2rem 3rem',
            textDecoration: 'none',
            color: 'var(--color-green-neon)',
            fontWeight: 700,
            fontSize: '1.1rem',
            marginBottom: '4rem'
          }}
        >
          <Mail /> {t.contact.button}
        </a>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '4rem' }}>
          <a href="https://www.linkedin.com/in/nicolas-pardo-thiers-214126143/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'var(--transition-smooth)' }} className="social-link">
            <Linkedin size={24} />
          </a>
        </div>
        
        <div style={{ borderTop: '1px solid var(--bg-secondary)', paddingTop: '2rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Nicolas Pardo. Built with React & Lime Gradients.
          </p>
        </div>
      </div>
      
      <style>{`
        .social-link:hover {
          color: var(--color-green-neon) !important;
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
