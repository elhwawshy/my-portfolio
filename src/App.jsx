import React, { useEffect, useState } from 'react';
import './index.css';
import ScrollReveal from 'scrollreveal';

// استيراد المكونات
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Qualification from './components/Qualification';
import Skills from './components/Skills';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // 1. تعريف حالة الثيم (Light افتراضي)
  const [theme, setTheme] = useState('light');

  // 2. دالة التبديل
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.classList.add('dark-theme');
    } else {
      setTheme('light');
      document.body.classList.remove('dark-theme');
    }
  };

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    });
    // ... باقي إعدادات ScrollReveal الخاصة بك كما هي ...
    sr.reveal(`.home-data`);
    sr.reveal(`.home-img`, {delay: 500});
    sr.reveal(`.home-social`, {delay: 600});
    sr.reveal(`.about-img`, {origin: 'left'});
    sr.reveal(`.about-data`, {origin: 'right'});
    sr.reveal(`.skills-content`, {origin: 'bottom', interval: 100});
    sr.reveal(`.qualification-container`, {origin: 'bottom'});
    sr.reveal(`.services-content`, {interval: 100});
    sr.reveal(`.work-card`, {interval: 100});
    sr.reveal(`.contact-content`, {origin: 'top'});
  }, []);

  return (
    <>
      {/* نرسل الثيم للهيدر عشان يغير اللوجو */}
      <Header theme={theme} /> 
      
      <main className="main">
        {/* نرسل دالة التبديل للـ Home عشان الزر موجود هناك */}
        <Home theme={theme} toggleTheme={toggleTheme} />
        
        <About />
        <Qualification />
        <Skills />
        <Work />
        <Services />
        <Contact />
      <Footer theme={theme} />
      </main>

      {/* نرسل الثيم للفوتر أيضاً */}
    </>
  );
}

export default App;