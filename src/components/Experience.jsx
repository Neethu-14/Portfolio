import React from 'react';

export default function Experience() {
  const experiences = [
    {
      date: 'Feb 2026 — May 2026',
      current: true,
      role: 'Agentic AI Intern',
      org: 'INNOMATICS RESEARCH LAB',
      points: [
        'Worked on Agentic AI applications using LangChain, RAG, and LangGraph.',
        'Built RAG-Based Customer Support Bot focused on intelligent agents and retrieval systems.',
      ],
    },
    {
      date: 'Feb 2026',
      current: false,
      role: 'South Regional India Skills Development Competition',
      org: 'Software Testing Domain · Hyderabad',
      points: [
        'Participated in regional software testing competition covering manual test case design, boundary value analysis, and defect lifecycles.',
      ],
    },
    {
      date: 'Feb 2026',
      current: false,
      role: 'Hack2Hire 1.0 Hackathon (Nile Secure) — 4th Place',
      org: 'Hackathon Finalist · Bengaluru',
      points: [
        'Secured 4th place by architecting and developing an Agentic AI-Ops Assistant for Kubernetes Cluster failure detection and recovery.',
      ],
    },
    {
      date: 'Sep 2024 — Nov 2024',
      current: false,
      role: 'Student Project Contributor',
      org: 'COMEDKARES',
      points: [
        'Developed Arduino-based prototypes with sensors and actuators.',
        'Implemented basic embedded programming and hardware interfacing.',
      ],
    },
  ];

  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="sec-eyebrow reveal">Experience &amp; Achievements</div>
        <h2 className="sec-title reveal reveal-delay-1">
          Competitions, <em>skills</em>,<br />
          and industry training.
        </h2>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div
              key={exp.role}
              className={`tl-item reveal ${idx > 0 ? `reveal-delay-${idx}` : ''}`}
            >
              <div className="tl-date">
                {exp.date}
                {exp.current && (
                  <>
                    <br />
                    <span className="current">● active</span>
                  </>
                )}
              </div>
              <div className="tl-rail"></div>
              <div className="tl-body">
                <div className="tl-role">{exp.role}</div>
                <div className="tl-org">{exp.org}</div>
                <ul>
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
