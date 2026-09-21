import React from 'react';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="sec-eyebrow reveal">Who I Am</div>
        <h2 className="sec-title reveal reveal-delay-1">
          Software built for <em>practical solutions</em>,<br />
          not just theory.
        </h2>

        <div className="about-grid">
          <div className="about-media reveal reveal-delay-1" id="aboutMediaBox">
            <img
              src="/images/profile.jpg"
              alt="Neethu Chauhan — Computer Science Engineering Student"
            />
            <div className="frame-tag">CS Engineering</div>
            <div className="rec">
              <span className="dot"></span>
              Bengaluru, IN
            </div>
          </div>

          <div className="about-copy reveal reveal-delay-2">
            <p>
              I'm a <strong>Computer Science and Engineering student at T John Institute of Technology, Bengaluru</strong>.
              I enjoy learning new technologies and building projects that solve practical problems. My core focus spans
              <strong> Artificial Intelligence</strong>, <strong>software development</strong>, <strong>software testing</strong>,
              <strong>databases</strong>, and <strong>web development</strong>.
            </p>
            <p>
              I firmly believe in <strong>learning by building</strong>. I continuously work on software projects to strengthen my programming, testing rigor, and algorithmic problem-solving skills across the full technology stack.
            </p>
            <p>
              Currently maintaining an academic <strong>CGPA of 9.22 / 10.0</strong> (2023–2027) while actively participating in competitive testing events and building practical software solutions.
            </p>
            <div className="tagbar">
              <span>Artificial Intelligence</span>
              <span>Software Development</span>
              <span>Software Testing</span>
              <span>Databases</span>
              <span>Web Development</span>
              <span>RAG &amp; LangChain</span>
              <span>Java &amp; Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
