import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <a href="index.html" className="navbar__logo">PXL I-Talent</a>

                <ul className="navbar__menu">
                    <div className="navbar__list grid">
                        <li className="navbar__item">
                            <a href="/" className="navbar__link">Home</a>
                        </li>
                        <li className="navbar__item">
                            <a href="/" className="navbar__link">About</a>
                        </li>
                        <li className="navbar__item">
                            <a href="/" className="navbar__link">Projecten</a>
                        </li>
                        <li className="navbar__item">
                            <a href="/" className="navbar__link">Contact</a>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;