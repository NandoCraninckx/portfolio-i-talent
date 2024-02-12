import React, { useState} from 'react';
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="header">
            <nav className="navbar container">
                <a href="home" className="navbar__logo">PXL I-Talent</a>

                <div className={`navbar__menu ${menuOpen ? "show" : ""}`}>
                    <ul className="navbar__list grid">
                        <li className="navbar__item">
                            <a href="home" className="navbar__link active-link">Home</a>
                        </li>
                        <li className="navbar__item">
                            <a href="over" className="navbar__link">Over</a>
                        </li>
                        <li className="navbar__item">
                            <a href="projecten" className="navbar__link">Projecten</a>
                        </li>
                        <li className="navbar__item">
                            <a href="contact" className="navbar__link">Contact</a>
                        </li>
                    </ul>

                    <div className="navbar__close" onClick={toggleMenu}>
                        <i class='bx bx-x'></i>
                    </div>
                </div>

                <div className={`navbar__toggle ${menuOpen ? "show" : ""}`} onClick={toggleMenu}>
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;