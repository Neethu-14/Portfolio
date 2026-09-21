import React from 'react';

export default function Impact() {
  const metrics = [
    {
      idx: '01 / ACADEMICS',
      value: '9.22',
      unit: '',
      label: 'Academic CGPA',
      context: 'Maintaining top distinction in B.E. Computer Science and Engineering at TJIT Bengaluru.',
    },
    {
      idx: '02 / SOFTWARE TESTING',
      value: 'South',
      unit: '',
      label: 'India Skills Regional Level',
      context: 'Selected for South Regional Level Software Testing competition in Hyderabad, February 2026.',
    },
    {
      idx: '03 / AGENTIC AI',
      value: 'RAG',
      unit: '+',
      label: 'Innomatics Training',
      context: 'Specialized training in Agentic AI, LangChain pipelines, ChromaDB vector retrieval, and APIs.',
    },
    {
      idx: '04 / PROJECTS',
      value: '6',
      unit: '+',
      label: 'Full Stack & AI Systems',
      context: 'End-to-end applications developed with Java, Python, FastAPI, Streamlit, and databases.',
    },
  ];

  return (
    <section className="section section-tight" id="impact">
      <div className="wrap">
        <div className="sec-eyebrow reveal">Key Achievements</div>
        <h2 className="sec-title reveal reveal-delay-1">
          Measured <em>impact</em> &amp; competitive milestones.
        </h2>

        <div className="dash">
          {metrics.map((item, index) => (
            <div
              key={item.idx}
              className={`dash-card reveal ${index > 0 ? `reveal-delay-${index}` : ''}`}
            >
              <span className="tick tl"></span>
              <span className="tick tr"></span>
              <div className="idx">{item.idx}</div>
              <div className="value">
                {item.value}
                {item.unit && <span className="unit">{item.unit}</span>}
              </div>
              <div className="label">{item.label}</div>
              <div className="context">{item.context}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
