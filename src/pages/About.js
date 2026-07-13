import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1>About Suvarna Jewelry</h1>
          <p>Celebrating the art of Indian jewelry for over two decades</p>
        </div>

        <section className="about-section">
          <h2>Our Story</h2>
          <p>Suvarna Jewelry was founded with a passion to bring authentic Indian jewelry to the world. Each piece in our collection tells a story of tradition, craftsmanship, and elegance.</p>
          <p>We believe in quality, authenticity, and customer satisfaction. Our master craftsmen work tirelessly to create pieces that are not just beautiful but also meaningful.</p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>To provide premium, authentic Indian jewelry that celebrates cultural heritage while meeting the highest standards of quality and craftsmanship.</p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul className="benefits-list">
            <li>✓ Authentic, certified jewelry</li>
            <li>✓ Traditional and contemporary designs</li>
            <li>✓ Expert craftsmen with decades of experience</li>
            <li>✓ Competitive pricing</li>
            <li>✓ Excellent customer service</li>
            <li>✓ Secure and fast delivery</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
