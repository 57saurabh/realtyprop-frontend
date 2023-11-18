// Navbar.js
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import UserContext from '../../Context/UserContext';

const Navbar = () => {

  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const {user, logout} = useContext(UserContext); // Replace this with your actual user state

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };
  const handleLogout = () => {
    logout();
    console.log('Logged out');
    navigate('/login')
    window.location.reload();
};

  return (
    <nav>
      <div className="navbar-container">
        <Link to="/" className="logo">
          RealtyProp.in
        </Link>

        {/* Mobile View */}
        <div className="mobile-menu">
          <button className="menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
          {/* Mobile menu items */}
          <div className={`mobile-menu-items ${isMobileMenuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link to="/buy" onClick={toggleMobileMenu}>
              Buy
            </Link>
            <Link to="/rentals" onClick={toggleMobileMenu}>
              Rent
            </Link>
            <Link to="/all-properties" onClick={toggleMobileMenu}>
              Properties
            </Link>
            <Link to='/homesolution' onClick={toggleMobileMenu}>
              Home Solutions
            </Link>
            <Link to="/contact" onClick={toggleMobileMenu}>
              Contact
            </Link>
            <>
          {user ? (
                <>
                {/* <Link to="/profile">My Profile</Link>
                <Link to="/settings">Settings</Link> */}
                
                <button className='logout' onClick={handleLogout}>Logout</button>
              </>

          ) : (
            <Link to="/login">Login/Signup</Link>
          )}
        </>
          </div>
        </div>

        {/* Web View */}
        <div className="web-menu">
        <Link to="/" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link to="/buy" onClick={toggleMobileMenu}>
              Buy
            </Link>
            <Link to="/rentals" onClick={toggleMobileMenu}>
              Rent
            </Link>
            <Link to="/all-properties" onClick={toggleMobileMenu}>
              Properties
            </Link>
            <Link to='/homesolution' onClick={toggleMobileMenu}>
              Home Solutions
            </Link>
            <Link to="/contact" onClick={toggleMobileMenu}>
              Contact
            </Link>
            <div className="auth-buttons">
          {user ? (
            <>
              <Link onClick={toggleProfileMenu}>Profile</Link>
              <div className={`profile-menu ${isProfileMenuOpen ? 'open' : ''}`}>
                {/* <Link to="/profile">My Profile</Link>
                <Link to="/settings">Settings</Link> */}
                <p className='username'>{user.name}</p>
                <button className='logout' onClick={handleLogout}>Logout</button>
              </div>
            </>
          ) : (
            <Link to="/login">Login/Signup</Link>
          )}
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
