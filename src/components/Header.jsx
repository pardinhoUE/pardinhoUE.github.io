import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const Header = () => {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <header className="glass" style={{
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1000px',
      zIndex: 1000,
      padding: '0.75rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div className="gradient-text" style={{ fontWeight: 700, fontSize: '1.2rem' }}>
        NP | SWE
      </div>
      
      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>{t.nav.about}</a>
        <a href="#experience" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>{t.nav.experience}</a>
        <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>{t.nav.skills}</a>
        <button 
          onClick={toggleLanguage}
          style={{
            background: 'rgba(57, 255, 20, 0.1)',
            border: '1px solid var(--color-green-neon)',
            color: 'var(--color-green-neon)',
            padding: '0.4rem 0.8rem',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.8rem',
            fontWeight: 600,
            transition: 'var(--transition-smooth)'
          }}
          className="lang-toggle"
        >
          <Globe size={14} />
          {lang.toUpperCase()}
        </button>
      </nav>
    </header>
  );
};

export default Header;
