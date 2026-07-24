import React, { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import './Pantry.css';

const Pantry = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Vegetables', 'Spices', 'Dairy', 'Grains', 'Snacks', 'Drinks'];

  const pantryItems = [
    {
      id: 1,
      name: 'Fresh Tomatoes',
      category: 'Vegetables',
      quantity: '1.5 kg',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      purchaseDate: '2 Days Ago',
      expiryDays: 5,
      totalLifespan: 7,
      status: 'fresh' // fresh, expiring, expired
    },
    {
      id: 2,
      name: 'Paneer (Cottage Cheese)',
      category: 'Dairy',
      quantity: '200 g',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      purchaseDate: '1 Week Ago',
      expiryDays: 1,
      totalLifespan: 8,
      status: 'expiring'
    },
    {
      id: 3,
      name: 'Basmati Rice',
      category: 'Grains',
      quantity: '5 kg',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      purchaseDate: '1 Month Ago',
      expiryDays: 180,
      totalLifespan: 365,
      status: 'fresh'
    },
    {
      id: 4,
      name: 'Spinach',
      category: 'Vegetables',
      quantity: '1 bunch',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      purchaseDate: '5 Days Ago',
      expiryDays: 0,
      totalLifespan: 5,
      status: 'expired'
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? pantryItems 
    : pantryItems.filter(item => item.category === activeCategory);

  const getMeterColor = (status) => {
    if (status === 'fresh') return 'var(--color-green)';
    if (status === 'expiring') return 'var(--color-orange)';
    return '#dc2626'; // expired red
  };

  const getStatusLabel = (status, days) => {
    if (status === 'expired') return 'Expired Today';
    if (status === 'expiring') return `Expires in ${days} day${days > 1 ? 's' : ''}`;
    return `Expires in ${days} days`;
  };

  return (
    <div className="pantry-page container animate-fade-in">
      <div className="pantry-header">
        <div className="pantry-header-text">
          <h1>My Smart Pantry</h1>
          <p>AI tracks your ingredients and suggests meals before they expire.</p>
        </div>
        <div className="pantry-actions">
          <button className="btn btn-outline"><Search size={18} /> Search</button>
          <button className="btn btn-primary"><Plus size={18} /> Add Item</button>
        </div>
      </div>

      <div className="category-filters">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="pantry-shelf">
        <h2 className="shelf-title">
          {activeCategory} Shelf 
          <span className="count">{filteredItems.length}</span>
        </h2>
        
        <div className="shelf-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="ingredient-card">
              <div className="card-image">
                <img src={item.image} alt={item.name} />
                <div className={`status-badge status-${item.status}`}>
                  {item.status === 'expiring' ? 'Use Soon' : item.status}
                </div>
              </div>
              
              <div className="card-content">
                <div className="card-header">
                  <h3>{item.name}</h3>
                  <span className="quantity">{item.quantity}</span>
                </div>
                
                <div className="freshness-meter">
                  <div className="meter-label">
                    <span>Freshness</span>
                    <span style={{ color: getMeterColor(item.status), fontWeight: 600 }}>
                      {Math.max(0, Math.round((item.expiryDays / item.totalLifespan) * 100))}%
                    </span>
                  </div>
                  <div className="meter-bar">
                    <div 
                      className="meter-fill" 
                      style={{ 
                        width: `${Math.max(0, (item.expiryDays / item.totalLifespan) * 100)}%`,
                        backgroundColor: getMeterColor(item.status)
                      }}
                    ></div>
                  </div>
                </div>
                
                <div className="card-footer">
                  <span>Bought: {item.purchaseDate}</span>
                  <span style={{ color: item.status === 'expired' ? '#dc2626' : 'inherit' }}>
                    {getStatusLabel(item.status, item.expiryDays)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expiry Intelligence AI Banner */}
      <div className="glass results-card" style={{ marginTop: 'var(--spacing-16)' }}>
        <div className="flex-between">
          <div>
            <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>AI Expiry Alert</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>You have 2 items expiring soon. Estimated value: ₹180.</p>
          </div>
          <button className="btn btn-primary" style={{ backgroundColor: 'var(--color-green)' }}>
            Generate Meals Before Expiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pantry;
