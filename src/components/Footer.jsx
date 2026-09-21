import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div className="fmark">Neethu Chauhan</div>
        <div className="footer-links">
          <a href="mailto:chauhanneethu540@gmail.com">Email</a>
          <a
            href="https://www.linkedin.com/in/neethu-chauhan-ba17a23a1"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Neethu-14"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="#home">Back to Top ↑</a>
        </div>
        <div className="fmeta">© 2026 · Computer Science &amp; Engineering · Bengaluru, India</div>
      </div>
    </footer>
  );
}
