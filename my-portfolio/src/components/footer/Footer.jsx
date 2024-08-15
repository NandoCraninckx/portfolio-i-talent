import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container container">
            <h1 className="footer-title">Nando Craninckx</h1>

            <ul className="footer-list">
                <li>
                    <a href="#about" className="footer-link">Over</a>
                </li>

                <li>
                    <a href="#aanpak" className="footer-link">Aanpak</a>
                </li>

                <li>
                    <a href="#accordionMenu" className="footer-link">Projecten</a>
                </li>

                <li>
                    <a href="#reflectie" className="footer-link">Reflectie</a>
                </li>

            </ul>

            <span className="footer-copy">&#169; Nando Craninckx. All rights reserved</span>

        </div>
    </footer>
  )
}

export default Footer