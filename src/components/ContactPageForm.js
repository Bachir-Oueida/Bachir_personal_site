'use client';

import { useState } from 'react';

export default function ContactPageForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        urgency: 'normal'
      });
    }, 4000);
  };

  if (isSubmitted) {
    return (
      <div className="contact-page-form submitted">
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h4>Message Sent Successfully!</h4>
          <p>Thank you for reaching out. I&apos;ll respond within 24 hours.</p>
          <div className="next-steps">
            <p><strong>What happens next?</strong></p>
            <ul>
              <li>I&apos;ll review your message and requirements</li>
              <li>You&apos;ll receive a personalized response within 24 hours</li>
              <li>We can schedule a consultation if needed</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page-form">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder=" "
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select a subject</option>
              <option value="buying">Looking to Buy</option>
              <option value="selling">Looking to Sell</option>
              <option value="leasing">Property Leasing</option>
              <option value="investment">Investment Opportunities</option>
              <option value="market-analysis">Market Analysis</option>
              <option value="consultation">General Consultation</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="preferredContact">Preferred Contact Method</label>
            <select
              id="preferredContact"
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleChange}
            >
              <option value="email">Email</option>
              <option value="phone">Phone Call</option>
              <option value="text">Text Message</option>
              <option value="any">Any Method</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="urgency">Urgency Level</label>
            <select
              id="urgency"
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
            >
              <option value="normal">Normal</option>
              <option value="urgent">Urgent</option>
              <option value="asap">ASAP</option>
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            placeholder="Please describe your real estate needs, timeline, budget range, or any specific questions you have..."
            required
          />
        </div>

        <div className="form-footer">
          <div className="privacy-notice">
            <p>
              <span className="privacy-icon">🔒</span>
              Your information is secure and will never be shared. 
              I respect your privacy and use this information solely 
              to provide you with the best possible service.
            </p>
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>
                <span className="spinner"></span>
                Sending Message...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>
    </div>
  );
} 