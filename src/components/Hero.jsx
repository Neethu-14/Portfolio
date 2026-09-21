import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, FileText, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero({ onResumeDownload }) {
  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#C79A5B', '#F3EFE7', '#77B58A', '#8C4352'],
    });
  };

  const handleResumeClick = (e) => {
    triggerConfetti();
    if (onResumeDownload) onResumeDownload(e);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-grid-pattern"></div>
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="hero-inner">
        <div className="hero-eyebrow reveal">
          <Sparkles size={14} color="var(--gold)" />
          Portfolio · 2026 · Bengaluru, India
        </div>

        <h1 className="hero-name reveal reveal-delay-1">
          Hi, I'm<br />
          Neethu <em>Chauhan</em>
        </h1>

        <p className="hero-role reveal reveal-delay-2">
          <strong>Computer Science Engineering Student</strong> — AI Enthusiast | Software Developer | Software Testing Enthusiast.
        </p>

        <p className="hero-description reveal reveal-delay-2">
          Passionate about building practical applications, exploring AI, and solving real-world problems through technology. Continuously learning by building.
        </p>

        <div className="hero-actions reveal reveal-delay-3">
          <a href="#projects" className="btn">
            View My Work
            <ArrowDown size={15} />
          </a>

          <a
            href="/resume.pdf"
            download="Neethu_Chauhan_Resume.pdf"
            className="btn ghost"
            onClick={handleResumeClick}
          >
            <FileText size={15} />
            Download Resume
          </a>

          <div className="hero-socials">
            <a
              href="https://github.com/Neethu-14"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/neethu-chauhan-ba17a23a1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:chauhanneethu540@gmail.com"
              className="social-icon-btn"
              aria-label="Send Email"
              title="Email Neethu"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="hero-stats reveal reveal-delay-4">
          <div className="hero-stat">
            <div className="num"><span>9.22</span></div>
            <div className="lbl">Academic CGPA</div>
          </div>
          <div className="hero-stat">
            <div className="num"><span>6+</span></div>
            <div className="lbl">Featured Projects</div>
          </div>
          <div className="hero-stat">
            <div className="num"><span>2027</span></div>
            <div className="lbl">Graduating Class</div>
          </div>
          <div className="hero-stat">
            <div className="num"><span>4+</span></div>
            <div className="lbl">Core Focus Areas</div>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <span className="line"></span>
      </div>
    </section>
  );
}
