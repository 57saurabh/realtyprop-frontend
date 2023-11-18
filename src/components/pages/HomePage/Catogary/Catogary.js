import React from 'react';
import { Link } from 'react-router-dom';
import './category.css';
import { FaHome, FaBuilding, FaLandmark } from 'react-icons/fa';
import { GiIsland } from 'react-icons/gi';

const categories = [
  {
    id: 'flat',
    name: 'Flat',
    icon: <FaBuilding />,
    desc: 'Modern urban living at its finest with convenient amenities and sleek designs, perfect for those seeking a bustling city lifestyle.',
  },
  {
    id: 'penthouse',
    name: 'Penthouse',
    icon: <FaHome />,
    desc: 'Tranquil residences offering comfort and warmth, embracing families with spacious interiors and serene surroundings for a harmonious living experience.',
  },
  {
    id: 'plot',
    name: 'Plot',
    icon: <GiIsland />,
    desc: 'Vast expanses of potential, ideal for creating your dream space, whether it\'s for development, agriculture, or investment purposes.',
  },
];

const Category = () => {
  return (
    <div className="category-wrapper">
      <h2 className="category-header">Categories</h2>
      <div className="category-container">
        <ul className="category-list">
          {categories.map((category) => (
            <li key={category.id} className="category-item">
              <Link to={`/category/${category.id}`} className="category-link">
                <span className="category-icon">{category.icon}</span>
                <div className="category-info">
                  <span className="category-name">{category.name}</span>
                  <p className="category-desc">{category.desc}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
