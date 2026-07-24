import React from 'react';
import { Brain, ShieldCheck, Leaf, Clock, Users, BarChart } from 'lucide-react';
import './Features.css';

const featuresData = [
  {
    icon: <Brain size={30} color="#ff6b35" />,
    iconBg: 'var(--color-orange-light)',
    accent: 'linear-gradient(90deg, var(--color-orange), #ff9a76)',
    title: 'AI Meal Intelligence',
    description: 'Our AI learns every family member\'s tastes, allergies, and health goals to generate hyper-personalized meal plans automatically.',
  },
  {
    icon: <Leaf size={30} color="#059669" />,
    iconBg: 'var(--color-green-light)',
    accent: 'linear-gradient(90deg, var(--color-green), #6ee7b7)',
    title: 'Zero Waste Tracker',
    description: 'Smart expiry monitoring sends alerts before ingredients expire and suggests zero-waste recipes using exactly what\'s about to go bad.',
  },
  {
    icon: <Users size={30} color="#8b5cf6" />,
    iconBg: '#ede9fe',
    accent: 'linear-gradient(90deg, #8b5cf6, #c4b5fd)',
    title: 'Family Profiles',
    description: 'Create AI profiles for every family member — from diabetic elders to growing children. Every meal adapts to everyone simultaneously.',
  },
  {
    icon: <Clock size={30} color="#3b82f6" />,
    iconBg: '#dbeafe',
    accent: 'linear-gradient(90deg, #3b82f6, #93c5fd)',
    title: 'Time-Based Cooking',
    description: 'Just 10 minutes? Or cooking for a festival? Tell the AI your time and occasion and get the perfect recipe instantly.',
  },
  {
    icon: <ShieldCheck size={30} color="#f59e0b" />,
    iconBg: '#fef3c7',
    accent: 'linear-gradient(90deg, #f59e0b, #fcd34d)',
    title: 'Health & Nutrition AI',
    description: 'Tracks daily calories, protein, vitamins, and hydration for each family member. Beautiful dashboards make healthy eating effortless.',
  },
  {
    icon: <BarChart size={30} color="#ec4899" />,
    iconBg: '#fce7f3',
    accent: 'linear-gradient(90deg, #ec4899, #f9a8d4)',
    title: 'Budget Optimizer',
    description: 'Set a monthly food budget and watch the AI stretch every rupee. Compare grocery options, prevent waste, and track savings in real time.',
  },
];

const statsData = [
  { number: '2.4M+', label: 'Meals Planned' },
  { number: '₹48Cr', label: 'Food Waste Prevented' },
  { number: '1.2M+', label: 'Happy Families' },
  { number: '98%', label: 'Satisfaction Rate' },
];

const testimonialsData = [
  {
    stars: '★★★★★',
    text: '"Rasoi-Gen AI changed how our family eats. My husband is diabetic and my son has nut allergies — finding a single meal was a nightmare. Now the AI handles everything perfectly."',
    name: 'Priya Sharma',
    role: 'Working Mom, Bangalore',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
  },
  {
    stars: '★★★★★',
    text: '"I save at least ₹2,000 a month just by following the AI\'s meal plans. Zero food goes to waste now. The pantry tracker is brilliant — it feels like having a smart fridge."',
    name: 'Rahul Mehta',
    role: 'Software Engineer, Mumbai',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
  },
  {
    stars: '★★★★★',
    text: '"As a nutritionist, I recommend Rasoi-Gen AI to all my clients. The nutrition tracking is medically accurate and the family profile system is unlike anything else on the market."',
    name: 'Dr. Anita Nair',
    role: 'Nutritionist, Delhi',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
  },
];

const Features = () => {
  return (
    <>
      {/* Features Section */}
      <section className="features-section section-padding">
        <div className="container">
          <div className="section-header animate-fade-in">
            <h2>Everything Your Kitchen Needs</h2>
            <p>A complete AI platform built around your family's real life — not just recipes.</p>
          </div>
          <div className="features-grid">
            {featuresData.map((f, i) => (
              <div
                key={i}
                className="feature-card hover-lift"
                style={{ '--card-accent': f.accent }}
              >
                <div className="feature-icon-wrapper" style={{ backgroundColor: f.iconBg }}>
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {statsData.map((s, i) => (
              <div key={i} className="stat-card">
                <span className="stat-number">{s.number}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section-padding">
        <div className="container">
          <div className="section-header animate-fade-in">
            <h2>Loved by Families Across India</h2>
            <p>Real stories from real families who cook smarter with Rasoi-Gen AI.</p>
          </div>
          <div className="testimonials-grid">
            {testimonialsData.map((t, i) => (
              <div key={i} className="testimonial-card hover-lift">
                <div className="testimonial-stars">{t.stars}</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <img src={t.avatar} alt={t.name} className="author-avatar" />
                  <div className="author-info">
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Start Cooking Smarter Today</h2>
          <p>Join 1.2 million families already saving money and eating healthier with Rasoi-Gen AI.</p>
          <button className="btn btn-primary">Get Started Free</button>
        </div>
      </section>
    </>
  );
};

export default Features;
