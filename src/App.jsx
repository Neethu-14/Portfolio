import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const progressEl = document.getElementById('progress');
      if (progressEl) {
        const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
        progressEl.style.width = `${scrolled}%`;
      }

      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          current = sec.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleResumeDownload = () => {
    addToast('Downloading Neethu Chauhan Resume (PDF)...', 'success');
  };

  const handleSendMessage = (senderName) => {
    addToast(`Thank you, ${senderName}! Your message has been sent.`, 'success');
  };

  const handleProjectAction = (type, title, e) => {
    if (type === 'demo') {
      e.preventDefault();
      addToast(`Opening live demo for "${title}"...`, 'info');
    }
  };

  return (
    <div className="portfolio-app">
      {/* Top Progress Bar */}
      <div id="progress"></div>

      <Navbar activeSection={activeSection} />

      <main>
        <Hero onResumeDownload={handleResumeDownload} />
        <About />
        <Impact />
        <Experience />
        <Projects onProjectAction={handleProjectAction} />
        <Skills />
        <Certifications />
        <Resume onDownloadToast={handleResumeDownload} />
        <Contact onSendMessageToast={handleSendMessage} />
      </main>

      <Footer />

      <Toast toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
