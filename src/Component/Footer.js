import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import '../assets/CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="logo">ContactKeeper</h2>
            <p className="tagline">Your trusted solution for managing contacts with ease and security</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="GitHub"><FaGithub /></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h3>Product</h3>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">Integrations</a></li>
              </ul>
            </div>

            <div className="link-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="link-column">
              <h3>Support</h3>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Status</a></li>
              </ul>
            </div>

            <div className="link-column contact-info">
              <h3>Contact Us</h3>
              <ul>
                <li><FiMail /> hello@contactkeeper.com</li>
                <li><FiPhone /> +1 (555) 123-4567</li>
                <li><FiMapPin /> 123 Business Ave, Suite 100<br />San Francisco, CA 94107</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} ContactKeeper. All rights reserved.
          </div>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div className="made-with">
            Made with <FaHeart className="heart-icon" /> in India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;