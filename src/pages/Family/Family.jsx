import React from 'react';
import { Plus, Edit2 } from 'lucide-react';
import './Family.css';

const Family = () => {
  const familyMembers = [
    {
      id: 1,
      name: 'Father',
      age: 58,
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      metrics: {
        height: '175 cm',
        weight: '78 kg',
        goal: 'Maintenance',
        calories: '2000 kcal'
      },
      conditions: ['Diabetic', 'Mild Hypertension'],
      allergies: ['None'],
      preferences: ['Low Sugar', 'Low Sodium', 'Indian Traditional']
    },
    {
      id: 2,
      name: 'Mother',
      age: 54,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      metrics: {
        height: '162 cm',
        weight: '68 kg',
        goal: 'Weight Loss',
        calories: '1500 kcal'
      },
      conditions: ['None'],
      allergies: ['Gluten Sensitivity'],
      preferences: ['High Protein', 'Vegetables', 'Salads']
    },
    {
      id: 3,
      name: 'Child',
      age: 12,
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      metrics: {
        height: '145 cm',
        weight: '38 kg',
        goal: 'Growth',
        calories: '1800 kcal'
      },
      conditions: ['None'],
      allergies: ['Peanuts'],
      preferences: ['High Calcium', 'Mild Spice', 'Pasta', 'Sweets']
    }
  ];

  return (
    <div className="family-page container animate-fade-in">
      <div className="family-header">
        <h1>Family AI Profiles</h1>
        <p>Personalize meals for everyone. AI analyzes age, health conditions, and tastes to find the perfect dish for your family.</p>
      </div>

      <div className="family-grid">
        {familyMembers.map(member => (
          <div key={member.id} className="profile-card hover-lift">
            <div className="profile-header">
              <img src={member.avatar} alt={member.name} className="avatar" />
              <div className="profile-info">
                <h3>{member.name}</h3>
                <p>{member.age} years old</p>
              </div>
              <button className="btn-icon" style={{ marginLeft: 'auto', color: 'var(--color-text-secondary)' }}>
                <Edit2 size={18} />
              </button>
            </div>
            
            <div className="profile-body">
              <div className="health-metrics">
                <div className="metric">
                  <span className="metric-label">Goal</span>
                  <span className="metric-value">{member.metrics.goal}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Daily Target</span>
                  <span className="metric-value">{member.metrics.calories}</span>
                </div>
              </div>
              
              <div className="diet-section">
                <h4>Medical & Allergies</h4>
                <div className="tags-list">
                  {member.conditions.map((cond, i) => (
                    <span key={i} className={cond === 'None' ? 'tag tag-green' : 'tag tag-red'}>{cond}</span>
                  ))}
                  {member.allergies.map((alg, i) => (
                    <span key={`a-${i}`} className={alg === 'None' ? 'tag tag-green' : 'tag tag-red'}>{alg}</span>
                  ))}
                </div>
              </div>
              
              <div className="diet-section">
                <h4>Preferences</h4>
                <div className="tags-list">
                  {member.preferences.map((pref, i) => (
                    <span key={i} className="tag tag-orange">{pref}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="profile-footer">
              <span style={{ fontSize: '14px', color: 'var(--color-green-dark)', fontWeight: 600 }}>Profile Complete - 100%</span>
            </div>
          </div>
        ))}
        
        {/* Add Member Card */}
        <div className="profile-card add-member-card">
          <Plus size={32} className="add-icon" />
          <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Add Family Member</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>Create a new AI profile</p>
        </div>
      </div>

      <div className="ai-meal-score glass hover-lift">
        <h2>Tonight's Meal Optimization</h2>
        <div className="score-circle">
          <div className="score-inner">93%</div>
        </div>
        <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          <strong>"Palak Paneer with Quinoa"</strong> perfectly matches your family's taste profile. It accommodates Father's diabetes, Mother's gluten sensitivity, and avoids Child's peanut allergy while providing high calcium.
        </p>
        <button className="btn btn-primary" style={{ marginTop: 'var(--spacing-6)' }}>View Recipe</button>
      </div>
    </div>
  );
};

export default Family;
