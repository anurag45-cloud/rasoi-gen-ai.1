import React, { useState } from 'react';
import { Brain, Sparkles, Activity, PieChart, Coins } from 'lucide-react';
import './Planner.css';

const Planner = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <div className="planner-page container animate-fade-in">
      <div className="planner-header">
        <h1>AI Meal Optimizer</h1>
        <p>Combine family preferences, pantry ingredients, and budget constraints to find the mathematically perfect meal.</p>
      </div>

      <div className="planner-container">
        {/* Taste Learning AI Sidebar */}
        <div className="taste-profile">
          <h3><Brain className="brand-icon" /> Taste Learning AI</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
            Based on your last 14 meals, AI has learned your family's preferences.
          </p>

          <div className="taste-stat">
            <label><span>Spice Tolerance</span> <span>Medium-High</span></label>
            <div className="progress-bar"><div className="progress-fill" style={{ width: '75%' }}></div></div>
          </div>
          <div className="taste-stat">
            <label><span>Health Focus</span> <span>High Protein</span></label>
            <div className="progress-bar"><div className="progress-fill" style={{ width: '85%', backgroundColor: 'var(--color-green)' }}></div></div>
          </div>
          <div className="taste-stat">
            <label><span>Cuisine Preference</span> <span>Indian / Med</span></label>
            <div className="progress-bar"><div className="progress-fill" style={{ width: '60%', backgroundColor: '#8b5cf6' }}></div></div>
          </div>
          
          <div style={{ marginTop: '32px', padding: '16px', backgroundColor: 'var(--color-cream)', borderRadius: '12px' }}>
            <h4 style={{ fontSize: '14px', marginBottom: '8px' }}>Current Craving Alert</h4>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
              Mother usually craves sweets on weekends. Suggesting healthy fruit-based desserts.
            </p>
          </div>
        </div>

        {/* Meal Optimizer Controls */}
        <div className="optimizer-section">
          <div className="optimizer-controls">
            <div className="control-grid">
              <div className="control-group">
                <label>Budget Limit (₹)</label>
                <select className="control-select">
                  <option>Any Budget</option>
                  <option>Under ₹200</option>
                  <option>Under ₹500</option>
                  <option>Premium (₹1000+)</option>
                </select>
              </div>
              <div className="control-group">
                <label>Cooking Time</label>
                <select className="control-select">
                  <option>Any Time</option>
                  <option>Under 15 mins</option>
                  <option>Under 30 mins</option>
                  <option>Slow Cooked (1 hr+)</option>
                </select>
              </div>
              <div className="control-group">
                <label>Vibe / Season</label>
                <select className="control-select">
                  <option>Monsoon Comfort</option>
                  <option>Summer Cooling</option>
                  <option>Winter Warmth</option>
                  <option>Festive</option>
                </select>
              </div>
              <div className="control-group">
                <label>Ingredient Source</label>
                <select className="control-select">
                  <option>Pantry Only (Zero Waste)</option>
                  <option>Pantry + Max 2 New</option>
                  <option>Full Grocery Run</option>
                </select>
              </div>
            </div>

            <button 
              className="btn btn-primary" 
              style={{ width: '100%', padding: '16px', fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
              onClick={handleOptimize}
              disabled={isOptimizing}
            >
              {isOptimizing ? 'Running Optimization Engine...' : <><Sparkles /> Generate Perfect Meal</>}
            </button>
          </div>

          {/* AI Output */}
          {showResult && (
            <div className="ai-output-card animate-fade-in">
              <div className="output-header">
                <div>
                  <h2 className="text-gradient">Paneer Tikka Quinoa Bowl</h2>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px' }}>
                    Perfectly balances Father's diabetes with Mother's weight loss goals. Uses expiring Paneer from pantry.
                  </p>
                </div>
                <div className="score-badge">99% Match</div>
              </div>

              <div className="scores-grid">
                <div className="score-item">
                  <Activity className="brand-icon" size={24} />
                  <span className="label">Health Score</span>
                  <span className="value" style={{ color: 'var(--color-green)' }}>9.8/10</span>
                </div>
                <div className="score-item">
                  <PieChart className="brand-icon" size={24} style={{ color: '#8b5cf6' }} />
                  <span className="label">Taste Score</span>
                  <span className="value" style={{ color: '#8b5cf6' }}>9.5/10</span>
                </div>
                <div className="score-item">
                  <Coins className="brand-icon" size={24} style={{ color: 'var(--color-orange)' }} />
                  <span className="label">Cost / Person</span>
                  <span className="value">₹45</span>
                </div>
                <div className="score-item">
                  <Sparkles className="brand-icon" size={24} style={{ color: '#3b82f6' }} />
                  <span className="label">Waste Saved</span>
                  <span className="value">200g</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Planner;
