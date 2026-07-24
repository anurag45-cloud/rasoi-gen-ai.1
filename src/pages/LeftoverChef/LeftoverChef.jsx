import React, { useState } from 'react';
import { ChefHat, Clock, Flame, Utensils, X, Leaf } from 'lucide-react';
import './LeftoverChef.css';

const LeftoverChef = () => {
  const [ingredients, setIngredients] = useState(['Leftover Rice', 'Half Onion', '2 Eggs']);
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      setIngredients([...ingredients, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeIngredient = (indexToRemove) => {
    setIngredients(ingredients.filter((_, index) => index !== indexToRemove));
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="chef-page container">
      <div className="chef-header animate-fade-in">
        <h1>AI Leftover Chef</h1>
        <p>Tell our AI what leftovers you have, and it will generate a delicious recipe to prevent food waste.</p>
      </div>

      <div className="chef-container">
        <div className="input-section animate-fade-in">
          <div className="input-group">
            <label>What's in your fridge?</label>
            <div className="tags-input-container">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="ingredient-tag">
                  {ingredient}
                  <X size={14} className="tag-close" onClick={() => removeIngredient(index)} />
                </div>
              ))}
              <input 
                type="text" 
                className="tags-input" 
                placeholder="Type and press Enter (e.g., Half Capsicum)"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>

          <button 
            className="btn btn-primary generate-btn"
            onClick={handleGenerate}
            disabled={ingredients.length === 0 || isGenerating}
            style={{ width: '100%', padding: '16px', fontSize: '18px' }}
          >
            {isGenerating ? 'Chef AI is thinking...' : 'Generate Recipes'}
          </button>
        </div>

        {showResults && (
          <div className="recipe-results animate-fade-in">
            {/* Recipe Card 1 */}
            <div className="recipe-card">
              <div className="recipe-image">
                <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Egg Fried Rice" />
              </div>
              <div className="recipe-content">
                <div className="recipe-header">
                  <h3>Spicy Egg Fried Rice</h3>
                  <span className="match-badge">98% Match</span>
                </div>
                
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
                  A quick and delicious way to use up your leftover rice and eggs. High in protein and ready in minutes.
                </p>

                <div className="recipe-stats">
                  <div className="stat-item"><Clock size={16} /> 15 mins</div>
                  <div className="stat-item"><ChefHat size={16} /> Easy</div>
                  <div className="stat-item"><Flame size={16} /> 320 kcal</div>
                  <div className="stat-item"><Utensils size={16} /> Indian / Asian</div>
                </div>

                <div className="recipe-footer">
                  <span className="waste-saved"><Leaf size={16} style={{ display: 'inline', verticalAlign: 'text-bottom' }}/> Saved 450g of food</span>
                  <button className="btn btn-outline" style={{ borderRadius: 'var(--radius-full)' }}>View Full Recipe</button>
                </div>
              </div>
            </div>

            {/* Recipe Card 2 */}
            <div className="recipe-card">
              <div className="recipe-image">
                <img src="https://images.unsplash.com/photo-1548943487-a2e4e43b4859?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Onion Egg Bhurji with Rice" />
              </div>
              <div className="recipe-content">
                <div className="recipe-header">
                  <h3>Onion Egg Bhurji Bowl</h3>
                  <span className="match-badge">85% Match</span>
                </div>
                
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
                  Classic Indian street-style scrambled eggs served over warm leftover rice.
                </p>

                <div className="recipe-stats">
                  <div className="stat-item"><Clock size={16} /> 10 mins</div>
                  <div className="stat-item"><ChefHat size={16} /> Beginner</div>
                  <div className="stat-item"><Flame size={16} /> 280 kcal</div>
                  <div className="stat-item"><Utensils size={16} /> Indian</div>
                </div>

                <div className="recipe-footer">
                  <span className="waste-saved"><Leaf size={16} style={{ display: 'inline', verticalAlign: 'text-bottom' }}/> Saved 380g of food</span>
                  <button className="btn btn-outline" style={{ borderRadius: 'var(--radius-full)' }}>View Full Recipe</button>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default LeftoverChef;
