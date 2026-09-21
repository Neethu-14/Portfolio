import React, { useState } from 'react';
import { X, ExternalLink, Image as ImageIcon, Award, FileText } from 'lucide-react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  /**
   * REAL CERTIFICATES DATA:
   * Extracted directly from Neethu Chauhan's actual verified certificate files.
   */
  const certifications = [
    {
      id: 'innomatics-agentic-ai',
      name: 'Agentic AI Internship Program',
      issuer: 'Innomatics Research Labs',
      year: '2026',
      file: '/certificates/innomatics-agentic-ai.png',
      preview: '/certificates/innomatics-agentic-ai.png',
      type: 'image',
      description:
        'Internship completion certificate awarded for demonstrating proficiency in Python Problem Solving, FastAPI, Prompt Engineering, LangChain, RAG, Agents & LangGraph. (Intern ID: IN226086702, Cert ID: A_02261116).',
    },
    {
      id: 'nptel-cloud-computing',
      name: 'Cloud Computing and Distributed Systems (Elite)',
      issuer: 'NPTEL · IIT Kanpur (MoE, Govt. of India)',
      year: '2026',
      file: '/certificates/nptel-cloud-computing.png',
      preview: '/certificates/nptel-cloud-computing.png',
      type: 'image',
      description:
        'Elite NPTEL Online Certification for completing the 8-week Cloud Computing and Distributed Systems course with a consolidated score of 81% (Roll No: NPTEL26CS29S552201431).',
    },
    {
      id: 'hack2hire-nilesecure',
      name: 'Hack2Hire 1.0 — Certificate of Excellence (4th Position)',
      issuer: 'T. John Institute of Technology & Nile Secure',
      year: '2026',
      file: '/certificates/hack2hire-nilesecure.jpeg',
      preview: '/certificates/hack2hire-nilesecure.jpeg',
      type: 'image',
      description:
        'Certificate of Excellence awarded for achieving 4th position among Top 50 participants in the Hack2Hire 1.0 hackathon for strong technical execution of an Agentic AI-Ops Kubernetes system.',
    },
    {
      id: 'ijsred-publication',
      name: 'Research Publication Certificate (IJSRED)',
      issuer: 'Intl. Journal of Scientific Research and Engineering Dev.',
      year: '2026',
      file: '/certificates/ijsred-publication.jpg',
      preview: '/certificates/ijsred-publication.jpg',
      type: 'image',
      description:
        'Certificate of Publication for the research paper "Cognitive Burnout Early Warning System Using Explainable AI and Conversational Assistant" in Volume 9 Issue 3 (ISSN: 2581-7175, Impact Factor: 5.925).',
    },
    {
      id: 'codechef-fullstack',
      name: 'Full Stack Development Pro Certificate',
      issuer: 'CodeChef',
      year: '2026',
      file: '/certificates/codechef-fullstack.png',
      preview: '/certificates/codechef-fullstack.png',
      type: 'image',
      description:
        'Pro Certificate of Completion awarded by CodeChef for successfully completing all lessons and hands-on projects in Full Stack Development (Certificate ID: 95d55a9).',
    },
    {
      id: 'codechef-machine-learning',
      name: 'Machine Learning Pro Certificate',
      issuer: 'CodeChef',
      year: '2026',
      file: '/certificates/codechef-machine-learning.png',
      preview: '/certificates/codechef-machine-learning.png',
      type: 'image',
      description:
        'Pro Certificate of Completion awarded by CodeChef for mastering supervised and unsupervised machine learning algorithms and projects (Certificate ID: ea4c865).',
    },
    {
      id: 'cisco-networking-basics',
      name: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      year: '2025',
      file: '/certificates/cisco-networking-basics.jpg',
      preview: '/certificates/cisco-networking-basics.jpg',
      type: 'image',
      description:
        'Certificate awarded by Cisco Networking Academy for successfully completing the Networking Basics program covering network architecture, IP addressing, and routing fundamentals.',
    },
    {
      id: 'azure-ai-fundamentals',
      name: 'Internship on Microsoft Azure AI Fundamentals',
      issuer: 'IN-BIOT Private Limited',
      year: '2024',
      file: '/certificates/azure-ai-fundamentals.jpg',
      preview: '/certificates/azure-ai-fundamentals.jpg',
      type: 'image',
      description:
        'Internship certificate of completion for Microsoft Azure AI Fundamentals (09/03/2024 to 08/06/2024, Reg: 1TJ23CS063, T John Institute of Technology).',
    },
    {
      id: 'azure-fundamentals',
      name: 'Internship on Microsoft Azure Fundamentals',
      issuer: 'IN-BIOT Private Limited',
      year: '2024',
      file: '/certificates/azure-fundamentals.jpg',
      preview: '/certificates/azure-fundamentals.jpg',
      type: 'image',
      description:
        'Internship certificate of completion for Microsoft Azure Fundamentals (24/08/2024 to 14/12/2024, Reg: 1TJ23CS063, T John Institute of Technology).',
    },
    {
      id: 'certificates-bundle',
      name: 'Verified Credentials Archive (Multi-Page PDF)',
      issuer: 'Academic & Professional Credentials',
      year: '2024–2026',
      file: '/certificates/certificates-bundle.pdf',
      preview: '/certificates/pdf-cert-preview.svg',
      type: 'pdf',
      description:
        'Complete verified 8-page credentials archive bundling all official academic and internship certificates.',
    },
  ];

  return (
    <section className="section section-tight" id="education">
      <div className="wrap">
        <div className="sec-eyebrow reveal">Education &amp; Credentials</div>
        <h2 className="sec-title reveal reveal-delay-1">
          Grounded in <em>credentials</em>,<br />
          current on tools.
        </h2>

        <div className="edu-grid">
          {/* Left Column: Education & Languages */}
          <div className="reveal reveal-delay-1">
            <div className="edu-block">
              <h3>T John Institute of Technology</h3>
              <div className="meta">B.E. Computer Science and Engineering · Bengaluru</div>
              <div className="meta" style={{ marginTop: '6px', color: 'var(--gold)', fontWeight: 500 }}>
                2023 – 2027 · CGPA: 9.22
              </div>
            </div>

            <div className="edu-block">
              <h3>Languages</h3>
              <div className="lang-row">
                <div>
                  <span>English</span>
                  <small>Professional</small>
                </div>
                <div>
                  <span>Hindi</span>
                  <small>Native</small>
                </div>
                <div>
                  <span>Kannada</span>
                  <small>Working</small>
                </div>
              </div>
            </div>

            <div className="edu-block" style={{ marginTop: '28px' }}>
              <h3>Credentials Overview</h3>
              <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.7', marginTop: '6px' }}>
                All certificates shown are verified credentials from recognized universities, government initiatives (NPTEL / MoE), and technology industry leaders.
              </p>
            </div>
          </div>

          {/* Right Column: Real Certificates List */}
          <div className="reveal reveal-delay-2">
            <div className="cert-list">
              {certifications.map((cert) => (
                <article
                  key={cert.id}
                  className="cert-row"
                  onClick={() => setSelectedCert(cert)}
                  title={`Click to preview ${cert.name}`}
                >
                  <div className="cert-left">
                    <img
                      src={cert.preview}
                      alt={`${cert.name} thumbnail`}
                      className="cert-thumb"
                      loading="lazy"
                    />
                    <div className="cert-meta-wrap">
                      <span className="name">{cert.name}</span>
                      <span className="meta">
                        {cert.issuer} · {cert.year}
                      </span>
                    </div>
                  </div>

                  <div className="cert-actions-wrap">
                    <button
                      type="button"
                      className="btn btn-sm ghost cert-view-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCert(cert);
                      }}
                      aria-label={`View ${cert.name}`}
                    >
                      <Award size={13} />
                      <span>View</span>
                    </button>
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm ghost"
                      onClick={(e) => e.stopPropagation()}
                      title="Open actual certificate file in new tab"
                      aria-label={`Open ${cert.name} file`}
                    >
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          className="cert-modal-overlay"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="cert-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cert-modal-header">
              <div>
                <span
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '10.5px',
                    color: 'var(--gold)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  Verified Certificate Document
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '18px',
                    color: 'var(--ivory)',
                    marginTop: '2px',
                    fontWeight: 500,
                  }}
                >
                  {selectedCert.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--muted)',
                  cursor: 'pointer',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="cert-modal-body">
              {selectedCert.type === 'pdf' ? (
                <div style={{ textAlign: 'center', padding: '20px 10px' }}>
                  <img
                    src={selectedCert.preview}
                    alt={selectedCert.name}
                    style={{ maxHeight: '42vh', width: 'auto', margin: '0 auto 16px', display: 'block' }}
                  />
                  <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginBottom: '16px' }}>
                    Multi-page official PDF credentials document.
                  </p>
                </div>
              ) : (
                <img
                  src={selectedCert.file}
                  alt={`${selectedCert.name} Official Certificate`}
                />
              )}
              <p
                style={{
                  marginTop: '16px',
                  fontSize: '13.5px',
                  color: 'var(--muted)',
                  lineHeight: '1.65',
                  textAlign: 'left',
                }}
              >
                {selectedCert.description}
              </p>
            </div>

            <div className="cert-modal-footer">
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '11px',
                  color: 'var(--muted-2)',
                }}
              >
                {selectedCert.issuer} · {selectedCert.year}
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href={selectedCert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm"
                >
                  <ExternalLink size={13} />
                  Open Full File
                </a>
                <button
                  type="button"
                  className="btn btn-sm ghost"
                  onClick={() => setSelectedCert(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
