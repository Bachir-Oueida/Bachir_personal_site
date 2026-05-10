'use client';

import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/testimonials.css';

// ─── Placeholder testimonials — replace with real client quotes ────────────
const testimonials = [
  {
    id: 1,
    quote:
      "Client quote will go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
    detail: "Beverly Hills — Buyer",
  },
  {
    id: 2,
    quote:
      "Client quote will go here. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Client Name",
    detail: "Bel Air — Seller",
  },
  {
    id: 3,
    quote:
      "Client quote will go here. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Client Name",
    detail: "The Century — Buyer",
  },
];
// ──────────────────────────────────────────────────────────────────────────────

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [bodyRef, bodyVisible] = useScrollAnimation({ threshold: 0.2 });

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">

        {/* Section header */}
        <div
          ref={headerRef}
          className={`testimonials-header fade-in-up ${headerVisible ? 'animate' : ''}`}
        >
          <span className="testimonials-eyebrow">CLIENT TESTIMONIALS</span>
          <h2 className="testimonials-title">What Clients Say</h2>
          <div className="testimonials-rule" />
        </div>

        {/* Card */}
        <div
          ref={bodyRef}
          className={`testimonials-body fade-in-up ${bodyVisible ? 'animate' : ''}`}
        >
          <div className="testimonials-card">
            <span className="testimonials-quote-mark">&ldquo;</span>

            <p className="testimonials-quote">{t.quote}</p>

            <div className="testimonials-author">
              <span className="testimonials-name">{t.name}</span>
              <span className="testimonials-detail">{t.detail}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="testimonials-nav">
            <button
              className="testimonials-arrow"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              &#8592;
            </button>

            <div className="testimonials-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials-dot ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="testimonials-arrow"
              onClick={next}
              aria-label="Next testimonial"
            >
              &#8594;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
