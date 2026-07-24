import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChefHat, Menu, Moon, Sun } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const navLinks = [
    { name: 'Features', path: '/features' },
    { name: 'AI Planner', path: '/planner' },
    { name: 'Pantry', path: '/pantry' },
    { name: 'Family', path: '/family' },
    { name: 'Pricing', path: '/pricing' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'glass' : ''}`}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <ChefHat className="brand-icon" size={32} />
          <span>Rasoi-Gen AI</span>
        </Link>

        <div className="nav-links">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <button onClick={toggleDarkMode} className="btn-icon" aria-label="Toggle Dark Mode">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/login" className="btn btn-outline">Login</Link>
          <Link to="/start" className="btn btn-primary">Get Started</Link>
        </div>

        <button className="mobile-toggle">
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
