import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

import projectHospital from '../assets/images/projects/project-hospital.svg';
import projectStudent from '../assets/images/projects/project-student.svg';
import projectLostFound from '../assets/images/projects/project-lostfound.svg';
import projectLibrary from '../assets/images/projects/project-library.svg';
import projectRagBot from '../assets/images/projects/project-ragbot.svg';
import projectAiops from '../assets/images/projects/project-aiops.svg';

export default function Projects({ onProjectAction }) {
  /**
   * PROJECT REPOSITORY CONFIGURATION:
   * ----------------------------------------------------
   * Exact GitHub repository URLs extracted directly from verified resume.
   * If a repository is not yet public or verified, `github: null` prevents broken links.
   */
  const projectsData = [
    {
      id: 'lost-found',
      title: 'Lost and Found Web Portal (Reunite)',
      category: 'Full Stack / MongoDB',
      image: projectLostFound,
      description:
        'A full-stack web application for reporting and tracking lost-found items featuring real-time chat, claim verification, and administrative dashboard.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'MongoDB'],
      github: 'https://github.com/Neethu-14/Reunite---Lost-and-Found-Portal',
      demo: null,
    },
    {
      id: 'hospital-management',
      title: 'Hospital Appointment Management System',
      category: 'Java / JDBC',
      image: projectHospital,
      description:
        'A console-based, menu-driven hospital appointment system allowing patients to book appointments and administrators to view, search, and cancel records.',
      technologies: ['Java', 'JDBC', 'MySQL', 'Eclipse'],
      github: 'https://github.com/Neethu-14/HospitalAppointmentSystem',
      demo: null,
    },
    {
      id: 'library-system',
      title: 'Library Management System (FastAPI)',
      category: 'Python / REST API',
      image: projectLibrary,
      description:
        'REST API-based library management system supporting book addition, searching, issuing, & returning with Pydantic validation and Swagger UI documentation.',
      technologies: ['Python', 'FastAPI', 'Pydantic', 'Postman', 'Swagger UI'],
      github: 'https://github.com/Neethu-14/LibraryManagementSystem-FastAPI',
      demo: null,
    },
    {
      id: 'rag-bot',
      title: 'RAG-Based Customer Support Bot',
      category: 'AI / RAG / LangChain',
      image: projectRagBot,
      description:
        'An AI-powered customer support chatbot utilizing LangChain and RAG to retrieve knowledge base context and generate precise responses.',
      technologies: ['Python', 'LangChain', 'RAG', 'LangGraph', 'FastAPI'],
      github: 'https://github.com/Neethu-14/RAG_BASED_CUSTOMER_SUPPORT_BOT_PROJECT',
      demo: null,
    },
    {
      id: 'ai-ops-kubernetes',
      title: 'Agentic AI-Ops for Kubernetes Clustering',
      category: 'Agentic AI / Cloud Ops',
      image: projectAiops,
      description:
        'AI-powered Kubernetes monitoring and automated failure detection system with log-based root cause analysis (Secured 4th Place in Hack2Hire 1.0).',
      technologies: ['Python', 'Agentic AI', 'Kubernetes', 'LangChain', 'Docker'],
      github: 'https://github.com/Nethravathi-24/H2H-DUAL-404---AI-Ops-KUBERNETES-AGENT',
      demo: null,
    },
    {
      id: 'student-system',
      title: 'Student Management System',
      category: 'Java / Hibernate',
      image: projectStudent,
      description:
        'A student management application developed using JPA with Hibernate as the persistence provider and MySQL for persistent relational storage.',
      technologies: ['Java', 'JPA', 'Hibernate', 'MySQL'],
      github: null, // No verified repository URL on resume
      demo: null,
    },
  ];

  return (
    <section className="section section-tight" id="projects">
      <div className="wrap">
        <div className="sec-eyebrow reveal">Featured Projects</div>
        <h2 className="sec-title reveal reveal-delay-1">
          Practical <em>projects</em> built from<br />
          concept to deployment.
        </h2>

        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <article
              key={project.id}
              className={`project-card reveal ${idx % 2 !== 0 ? 'reveal-delay-1' : ''}`}
            >
              <div className="project-media">
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  loading="lazy"
                />
                <span className="project-category-badge">{project.category}</span>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech-stack">
                  {project.technologies.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                {(project.github || project.demo) && (
                  <div className="project-actions">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm ghost"
                        onClick={(e) => onProjectAction && onProjectAction('github', project.title, e)}
                      >
                        <Github size={13} />
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm"
                        onClick={(e) => onProjectAction && onProjectAction('demo', project.title, e)}
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
