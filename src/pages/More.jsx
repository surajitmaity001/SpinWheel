import React from 'react';
import './More.scss';
import { FaEnvelope, FaPhone, FaPaperclip, FaStar } from 'react-icons/fa';

// Sample data for Resources and Testimonials
const resourcesData = [
  { id: 1, title: 'Resource 1', link: '/resource1' },
  { id: 2, title: 'Resource 2', link: '/resource2' },
  { id: 3, title: 'Resource 3', link: '/resource3' },
];

const testimonialsData = [
  { id: 1, quote: "This service changed my life!", author: "Happy Customer" },
  { id: 2, quote: "I can't recommend them enough!", author: "Satisfied User" },
];

const More = () => {
  return (
    <div className="container">
      <h1>More</h1>

      <section className="section">
        <h2 className="header">About Us</h2>
        <p>We are committed to providing the best services to help you succeed!</p>
      </section>

      <section className="section">
        <h2 className="header">Contact Us</h2>
        <p><FaEnvelope /> Email: contact@example.com</p>
        <p><FaPhone /> Phone: (123) 456-7890</p>
      </section>

      <section className="section">
        <h2 className="header">Additional Resources</h2>
        <ul className="list">
          {resourcesData.map(resource => (
            <li key={resource.id} className="list-item">
              <FaPaperclip /> <a href={resource.link}>{resource.title}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="header">Frequently Asked Questions</h2>
        <ul className="list">
          <li className="list-item"><strong>Question 1?</strong> Answer to question 1.</li>
          <li className="list-item"><strong>Question 2?</strong> Answer to question 2.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="header">Testimonials</h2>
        {testimonialsData.map(testimonial => (
          <blockquote key={testimonial.id} className="testimonial-quote">
            "{testimonial.quote}" - <strong>{testimonial.author}</strong>
          </blockquote>
        ))}
      </section>

      <section className="section">
        <h2 className="header">Sign Up for Our Newsletter</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default More;
