import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-page container animate-fade-in">
      <div className="pricing-header">
        <h1>Simple, Transparent Pricing</h1>
        <p>Unlock the full potential of your smart kitchen. Save money by reducing food waste.</p>
      </div>

      <div className="pricing-grid">
        {/* Free Plan */}
        <div className="pricing-card">
          <h3 className="plan-name">Free</h3>
          <div className="plan-price">₹0<span>/mo</span></div>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px' }}>Perfect to get started.</p>
          
          <div className="plan-features">
            <div className="feature-item"><Check size={18} className="feature-icon" /> Basic AI Search</div>
            <div className="feature-item"><Check size={18} className="feature-icon" /> 1 Family Profile</div>
            <div className="feature-item"><Check size={18} className="feature-icon" /> Pantry Tracking (up to 50 items)</div>
            <div className="feature-item"><Check size={18} className="feature-icon" /> 3 AI Meal Optimizations/week</div>
          </div>
          
          <button className="btn btn-outline plan-btn">Get Started</button>
        </div>

        {/* Pro Plan */}
        <div className="pricing-card popular">
          <div className="popular-badge">Most Popular</div>
          <h3 className="plan-name">Pro</h3>
          <div className="plan-price">₹199<span>/mo</span></div>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px' }}>For the smart home cook.</p>
          
          <div className="plan-features">
            <div className="feature-item"><Check size={18} className="feature-icon" /> Unlimited AI Search</div>
            <div className="feature-item"><Check size={18} className="feature-icon" /> 4 Family Profiles</div>
            <div className="feature-item"><Check size={18} className="feature-icon" /> Unlimited Pantry Tracking</div>
            <div className="feature-item"><Check size={18} className="feature-icon" /> AI Expiry Intelligence</div>
            <div className="feature-item"><Check size={18} className="feature-icon" /> Voice Cooking Mode</div>
          </div>
          
          <button className="btn btn-primary plan-btn">Start 14-Day Free Trial</button>
        </div>

        {/* Family Plan */}
        <div className="pricing-card">
          <h3 className="plan-name">Family</h3>
          <div className="plan-price">₹399<span>/mo</span></div>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px' }}>For large households.</p>
          
          <div className="plan-features">
            <div className="feature-item"><Check size={18} className="feature-icon" /> Everything in Pro</div>
            <div className="feature-item"><Check size={18} className="feature-icon" /> Unlimited Family Profiles</div>
            <div className="feature-item"><Check size={18} className="feature-icon" /> Advanced Meal Planning</div>
            <div className="feature-item"><Check size={18} className="feature-icon" /> Smart Grocery Assistant</div>
            <div className="feature-item"><Check size={18} className="feature-icon" /> Priority AI Processing</div>
          </div>
          
          <button className="btn btn-outline plan-btn">Upgrade to Family</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
