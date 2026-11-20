"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "../styles/testimonials.css";

export default function TestimonialsShowcase({ testimonials }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const nodes = root.querySelectorAll("[data-reveal]");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      nodes.forEach((node) => node.classList.add("animate"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonials-page" ref={rootRef}>
      <div className="testimonials-layout">
        <header className="testimonials-intro" data-reveal>
          <span className="testimonials-label">Client Testimonials</span>
          <h1 className="testimonials-title">
            <span className="title-kicker">From</span>
            <span className="title-main">Clients</span>
          </h1>
          <p className="testimonials-lead">
            Buyers, sellers, and residents who have worked with Bachir Oueida.
          </p>
          <Link href="/contact" className="testimonials-cta">
            Get In Touch
          </Link>
        </header>

        <div className="testimonials-list">
          {testimonials.map((item) => (
            <article key={item.id} className="testimonial-card" data-reveal>
              <blockquote className="testimonial-quote">
                <p>{item.quote}</p>
              </blockquote>
              <footer className="testimonial-attribution">
                <cite className="testimonial-name">{item.name}</cite>
                {item.detail ? (
                  <span className="testimonial-detail">{item.detail}</span>
                ) : null}
              </footer>
            </article>
          ))}
        </div>
      </div>

      <div className="testimonials-bg" aria-hidden="true">
        <div className="testimonials-circle testimonials-circle-1"></div>
        <div className="testimonials-circle testimonials-circle-2"></div>
      </div>
    </section>
  );
}
