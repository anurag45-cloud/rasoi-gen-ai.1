import React from 'react';
import Scanner from '../../components/Scanner/Scanner';
import Features from '../../components/Features/Features';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero section-padding">
        <div className="container hero-container">
          <div className="hero-content animate-fade-in">
            <h1>The AI That Knows Your Kitchen Better Than <span className="text-gradient">You Do.</span></h1>
            <p className="hero-subtitle">
              Cook smarter. Waste less. Eat healthier. Plan meals for the whole family.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-lg">Scan Kitchen</button>
              <button className="btn btn-outline btn-lg">Try Demo</button>
            </div>
            
            <div className="ai-search-box glass hover-lift">
              <input 
                type="text" 
                placeholder="e.g., I have tomatoes, rice, and paneer. What can I cook in 20 minutes?" 
                className="ai-search-input"
              />
              <button className="btn btn-primary search-btn">Ask AI</button>
            </div>
          </div>
          
          <div className="hero-visual animate-float">
            {/* 3D Kitchen Illustration Placeholder */}
            <div className="visual-placeholder glass">
              <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Smart Kitchen" className="hero-image" />
              
              {/* Floating ingredient icons */}
              <div className="floating-badge badge-1 glass">🍅 Fresh Tomatoes</div>
              <div className="floating-badge badge-2 glass">🧀 Paneer expiring soon</div>
              <div className="floating-badge badge-3 glass">🥗 Healthy Match</div>
            </div>
          </div>
        </div>
      </section>
      
      <Scanner />
      <Features />
    </div>
  );
};

export default Home;
