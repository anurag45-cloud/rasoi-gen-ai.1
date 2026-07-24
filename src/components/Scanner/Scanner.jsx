import React, { useState } from 'react';
import { Camera, Image as ImageIcon, UploadCloud, CheckCircle2, Wand2 } from 'lucide-react';
import './Scanner.css';

const Scanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const mockIngredients = ['Onion', 'Potato', 'Spinach', 'Paneer', 'Rice'];

  const handleScan = () => {
    setIsScanning(true);
    // Simulate AI scanning delay
    setTimeout(() => {
      setIsScanning(false);
      setHasResults(true);
    }, 2000);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false);
      alert('Demo: Redirecting to generated recipes...');
    }, 2000);
  };

  return (
    <section className="scanner-section section-padding">
      <div className="container">
        <div className="section-header animate-fade-in">
          <h2>Smart Ingredient Scanner</h2>
          <p>Don't know what to cook? Just point your camera or upload a picture of your fridge, and our AI will detect the ingredients instantly.</p>
        </div>

        <div className="scanner-container">
          {/* Upload Area */}
          <div className="upload-card" onClick={!isScanning ? handleScan : undefined}>
            {isScanning ? (
              <div className="scanning-overlay">
                <div className="scan-line"></div>
                <p>Analyzing image...</p>
              </div>
            ) : (
              <>
                <UploadCloud size={64} className="upload-icon" />
                <div className="upload-text">
                  <h3>Drag & Drop</h3>
                  <p>or click to upload an image of your ingredients</p>
                </div>
                <div className="upload-options">
                  <button className="btn-upload" onClick={(e) => { e.stopPropagation(); handleScan(); }}>
                    <ImageIcon size={18} /> Upload Image
                  </button>
                  <button className="btn-upload" onClick={(e) => { e.stopPropagation(); handleScan(); }}>
                    <Camera size={18} /> Camera Scan
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Results Area */}
          <div className={`results-card ${hasResults ? 'animate-fade-in' : ''}`} style={{ opacity: hasResults ? 1 : 0.5, pointerEvents: hasResults ? 'auto' : 'none' }}>
            <div className="results-header">
              <h3>Detected Ingredients</h3>
              <span className="badge glass" style={{ color: 'var(--color-green)' }}>{mockIngredients.length} items found</span>
            </div>
            
            <div className="ingredient-list">
              {mockIngredients.map((item, index) => (
                <div 
                  key={index} 
                  className="ingredient-item" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button 
              className="btn btn-primary generate-btn hover-lift" 
              onClick={handleGenerate}
              disabled={!hasResults || isGenerating}
            >
              {isGenerating ? (
                <>
                  <div className="loading-spinner"></div>
                  Generating recipes...
                </>
              ) : (
                <>
                  <Wand2 size={20} />
                  Generate Recipes
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scanner;
