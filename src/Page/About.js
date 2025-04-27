import React from 'react';
import { FiUsers, FiShield, FiGlobe, FiStar, FiCode, FiHeart } from 'react-icons/fi';
import '../assets/CSS/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">About ContactKeeper</h1>
          <p className="hero-subtitle">Your trusted solution for managing contacts with ease and security</p>
        </div>
      </div>

      <div className="about-content">
        <section className="about-section mission-section">
          <div className="section-content">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-text">
              At ContactKeeper, we believe managing your professional and personal connections should be simple, secure, and accessible anywhere. 
              Our mission is to provide an intuitive platform that helps you organize your contacts while keeping your data private and protected.
            </p>
          </div>
          <div className="section-image">
            <div className="mission-icon">
              <FiUsers size={48} />
            </div>
          </div>
        </section>

        <section className="about-section features-section">
          <h2 className="section-title centered">Why Choose ContactKeeper</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FiShield size={32} />
              </div>
              <h3>Secure Storage</h3>
              <p>Your contact data is encrypted and protected with enterprise-grade security measures.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FiGlobe size={32} />
              </div>
              <h3>Access Anywhere</h3>
              <p>Access your contacts from any device with our responsive web interface.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FiStar size={32} />
              </div>
              <h3>Intuitive Design</h3>
              <p>Beautiful, user-friendly interface that makes contact management effortless.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FiCode size={32} />
              </div>
              <h3>Developer Friendly</h3>
              <p>Built with modern technologies for reliability and performance.</p>
            </div>
          </div>
        </section>

        <section className="about-section team-section">
          <h2 className="section-title centered">Our Technology Stack</h2>
          <div className="tech-stack">
            <div className="tech-item">
              <div className="tech-logo react"></div>
              <span>React</span>
            </div>
            <div className="tech-item">
              <div className="tech-logo firebase"></div>
              <span>Firebase</span>
            </div>
            <div className="tech-item">
              <div className="tech-logo css"></div>
              <span>CSS3</span>
            </div>
            <div className="tech-item">
              <div className="tech-logo router"></div>
              <span>React Router</span>
            </div>
          </div>
        </section>

        <section className="about-section cta-section">
          <div className="cta-content">
            <h2>Ready to organize your contacts?</h2>
            <p>Join thousands of professionals who trust ContactKeeper for their contact management needs.</p>
            <button className="cta-button">Get Started Now</button>
          </div>
          <div className="cta-icon">
            <FiHeart size={48} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;