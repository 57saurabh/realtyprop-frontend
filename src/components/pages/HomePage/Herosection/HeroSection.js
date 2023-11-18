// HeroSection.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const history = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Example: Fetch location suggestions based on the input value
    // Replace this with your own logic to fetch suggestions from an API or data source
    // For simplicity, using a static array of suggestions
    const fetchedSuggestions = ['City A', 'City B', 'City C'].filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(fetchedSuggestions);
  };

  const handleSearch = () => {
    // Handle the search action here, e.g., redirect to search results page
    console.log(`Searching for: ${searchTerm}`);
    history(`/all-properties?search=${searchTerm}`);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Your Dream Space <span style={{color:'#FFD700'}}>Awaits</span></h1>
        <p>Discover tranquility and luxury in every corner. Find your perfect home with us.</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for your dream home"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
          {suggestions.length > 0 && (
            <ul className="suggestion-list">
              {suggestions.map((suggestion) => (
                <>
                <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </li>
                </>
              ))}
              <li style={{fontSize:'10px'}}>*Currently we are operating only in Ghaziabad.</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
