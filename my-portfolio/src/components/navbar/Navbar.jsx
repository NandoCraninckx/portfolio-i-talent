import React, { useState} from 'react';
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="header">
            <nav className="navbar container">
                <a href="home" className="navbar-logo">PXL I-Talent</a>

                <div className={`navbar-menu ${menuOpen ? "show" : ""}`}>
                    <ul className="navbar-list grid">
                        <li className="navbar-item">
                            <a href="home" className="navbar-link active-link">Home</a>
                        </li>
                        <li className="navbar-item">
                            <a href="over" className="navbar-link">Over</a>
                        </li>
                        <li className="navbar-item">
                            <a href="projecten" className="navbar-link">Projecten</a>
                        </li>
                        <li className="navbar-item">
                            <a href="reflectie" className="navbar-link">Reclectie</a>
                        </li>
                        <li className="navbar-item">
                            <a href="contact" className="navbar-link">Contact</a>
                        </li>
                    </ul>

                    <div className="navbar-close" onClick={toggleMenu}>
                        <i class='bx bx-x'></i>
                    </div>
                </div>

                <div className={`navbar-toggle ${menuOpen ? "show" : ""}`} onClick={toggleMenu}>
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;