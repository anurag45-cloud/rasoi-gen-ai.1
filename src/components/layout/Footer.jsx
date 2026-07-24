import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Globe, MessageCircle, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <ChefHat className="brand-icon" size={32} />
              <span>Rasoi-Gen AI</span>
            </Link>
            <p className="footer-tagline">
              Your Smart Kitchen. Your Family. Zero Food Waste. Cook smarter, eat healthier, and save more.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon" aria-label="Website"><Globe size={20} /></a>
              <a href="#" className="social-icon" aria-label="Community"><MessageCircle size={20} /></a>
              <a href="#" className="social-icon" aria-label="Mail"><Mail size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/community">Community</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Features</h4>
            <ul>
              <li><Link to="/planner">AI Planner</Link></li>
              <li><Link to="/pantry">Pantry Tracker</Link></li>
              <li><Link to="/recipes">Smart Recipes</Link></li>
              <li><Link to="/pricing">Premium</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Rasoi-Gen AI. All rights reserved.</p>
          <p>Made with ❤️ for a Zero Waste Kitchen</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
