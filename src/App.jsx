import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="portfolio-app">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Projects />
        </main>
        <Footer />
        
        {/* Animated Background Elements */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}>
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '-5%',
            width: '40vw',
            height: '40vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '10%',
            right: '-5%',
            width: '35vw',
            height: '35vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(57, 255, 20, 0.03) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}></div>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
