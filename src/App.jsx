import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import Pantry from './pages/Pantry/Pantry';
import LeftoverChef from './pages/LeftoverChef/LeftoverChef';
import Family from './pages/Family/Family';
import Planner from './pages/Planner/Planner';
import Pricing from './pages/Pricing/Pricing';
import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pantry" element={<Pantry />} />
            <Route path="/recipes" element={<LeftoverChef />} />
            <Route path="/family" element={<Family />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/pricing" element={<Pricing />} />
            {/* Additional routes will go here */}
            <Route path="*" element={<div className="section-padding container text-center"><h2>Page Not Found</h2><p>Coming soon...</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
