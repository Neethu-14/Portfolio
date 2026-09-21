import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function Contact({ onSendMessageToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
      if (onSendMessageToast) {
        onSendMessageToast(formData.name);
      }
      setFormData({ name: '', email: '', message: '' });
    }, 500);
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="sec-eyebrow reveal" style={{ justifyContent: 'center' }}>
          Get In Touch
        </div>

        <h2 className="reveal reveal-delay-1">
          Open to <em>Software &amp;<br />AI</em> opportunities.
        </h2>

        <p className="contact-sub reveal reveal-delay-2">
          "I'm always open to learning opportunities, internships, projects, and meaningful collaborations."
        </p>

        {/* Contact Action Buttons Matching Reference */}
        <div className="contact-actions reveal reveal-delay-3">
          <a className="btn" href="mailto:chauhanneethu540@gmail.com">
            Email Me
          </a>
          <a
            className="btn ghost"
            href="https://www.linkedin.com/in/neethu-chauhan-ba17a23a1"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn ghost"
            href="https://github.com/Neethu-14"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container reveal reveal-delay-2">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '24px 16px' }}>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '22px', color: 'var(--ivory)' }}>
                Message Sent!
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '6px' }}>
                Thank you for reaching out. I will respond as soon as possible.
              </p>
              <button
                type="button"
                className="btn ghost"
                style={{ marginTop: '16px' }}
                onClick={() => setSubmitted(false)}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn"
                style={{ width: '100%' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* Contact Meta Strip */}
        <div className="contact-meta reveal">
          <div>
            <div className="k">Email</div>
            <div className="v">chauhanneethu540@gmail.com</div>
          </div>
          <div>
            <div className="k">Location</div>
            <div className="v">Bengaluru, India</div>
          </div>
          <div>
            <div className="k">Education</div>
            <div className="v">B.E. CSE · TJIT</div>
          </div>
          <div>
            <div className="k">Status</div>
            <div className="v" style={{ color: '#77B58A' }}>Open for Internships</div>
          </div>
        </div>
      </div>
    </section>
  );
}
