import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUserPlus, FaInfoCircle, FaBars, FaTimes } from 'react-icons/fa';
import '../assets/CSS/Header.css';

const Header = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setActiveTab("Home");
        } else if (location.pathname === "/Add") {
            setActiveTab("AddContact");
        } else if (location.pathname === "/About") {
            setActiveTab("About");
        }
        
        setIsMobileMenuOpen(false);
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-container">
                    <Link to="/" className="logo">
                        <span className="logo-icon">👋</span>
                        <span className="logo-text">ContactApp</span>
                    </Link>
                </div>

                <nav className="desktop-nav">
                    <Link to="/" className={`nav-link ${activeTab === "Home" ? "active" : ""}`}>
                        <FaHome className="nav-icon" />
                        <span>Home</span>
                    </Link>
                    <Link to="/Add" className={`nav-link ${activeTab === "AddContact" ? "active" : ""}`}>
                        <FaUserPlus className="nav-icon" />
                        <span>Add Contact</span>
                    </Link>
                    <Link to="/About" className={`nav-link ${activeTab === "About" ? "active" : ""}`}>
                        <FaInfoCircle className="nav-icon" />
                        <span>About</span>
                    </Link>
                </nav>

                <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {isMobileMenuOpen && (
                    <nav className="mobile-nav">
                        <Link to="/" className={`mobile-nav-link ${activeTab === "Home" ? "active" : ""}`} onClick={toggleMobileMenu}>
                            <FaHome className="nav-icon" />
                            <span>Home</span>
                        </Link>
                        <Link to="/Add" className={`mobile-nav-link ${activeTab === "AddContact" ? "active" : ""}`} onClick={toggleMobileMenu}>
                            <FaUserPlus className="nav-icon" />
                            <span>Add Contact</span>
                        </Link>
                        <Link to="/about" className={`mobile-nav-link ${activeTab === "About" ? "active" : ""}`} onClick={toggleMobileMenu}>
                            <FaInfoCircle className="nav-icon" />
                            <span>About</span>
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;