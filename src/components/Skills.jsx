import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Java', 'C', 'Python'],
    },
    {
      title: 'Web',
      skills: ['HTML5', 'CSS', 'JavaScript'],
    },
    {
      title: 'Database',
      skills: ['MySQL', 'SQL', 'MongoDB', 'DBMS'],
    },
    {
      title: 'AI / Technologies',
      skills: ['Artificial Intelligence', 'Generative AI', 'RAG', 'LangChain', 'FastAPI'],
    },
    {
      title: 'Testing',
      skills: ['Manual Testing', 'Test Case Design', 'Postman', 'JMeter', 'Selenium', 'API Testing'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'IntelliJ IDEA'],
    },
    {
      title: 'Cloud',
      skills: ['Microsoft Azure', 'Azure AI Fundamentals'],
    },
  ];

  return (
    <section className="section section-tight" id="skills">
      <div className="wrap">
        <div className="sec-eyebrow reveal">Skills &amp; Expertise</div>
        <h2 className="sec-title reveal reveal-delay-1">
          Fluent in <em>software engineering</em>,<br />
          testing, and AI.
        </h2>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className={`skill-card reveal ${idx % 3 !== 0 ? `reveal-delay-${idx % 3}` : ''}`}
            >
              <h3>{cat.title}</h3>
              <div className="pills">
                {cat.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
