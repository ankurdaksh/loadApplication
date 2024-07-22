import React from 'react';
import './Navbar.css';
import logoImage from '../assets/logo.svg';

const Navbar = () => {
    const handleLogout = () => {
        localStorage.removeItem('loginData');
        window.location.href = '/login';
    };

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logoImage} alt="Logo" />
                <span>lamadmin</span>
            </div>
            <button className="logout-button" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt"></i> Logout
            </button>
        </div>
    );
};

export default Navbar;
