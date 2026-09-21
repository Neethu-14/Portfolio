import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Resume({ onDownloadToast }) {
  const handleDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#C79A5B', '#F3EFE7', '#77B58A'],
    });

    if (onDownloadToast) {
      onDownloadToast();
    }
  };

  return (
    <section className="section section-tight" id="resume">
      <div className="wrap">
        <div className="sec-eyebrow reveal">My Resume</div>
        <h2 className="sec-title reveal reveal-delay-1">
          Interested in <em>learning, building</em>,<br />
          &amp; contributing to projects.
        </h2>

        <div className="resume-box reveal reveal-delay-2">
          <div>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '22px', color: 'var(--ivory)' }}>
              Neethu Chauhan — Curriculum Vitae
            </h3>
            <p style={{ marginTop: '8px', color: 'var(--muted)', fontSize: '15px', fontWeight: 300 }}>
              "Interested in learning, building, and contributing to real-world software projects."
            </p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '12.5px', color: 'var(--muted-2)', fontFamily: 'var(--mono)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} color="var(--gold)" /> B.E. CSE (2023–2027)
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} color="var(--gold)" /> CGPA: 9.22
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} color="var(--gold)" /> AI &amp; Software Testing
              </span>
            </div>
          </div>

          <a
            href="/resume.pdf"
            download="Neethu_Chauhan_Resume.pdf"
            className="btn"
            onClick={handleDownload}
            aria-label="Download Resume"
          >
            <Download size={15} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
