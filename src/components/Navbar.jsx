import React from "react";
import { FaXTwitter, FaGithub, FaFacebook } from 'react-icons/fa6';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Ezgi <br></br>KIRNAPCI</div>
            <ul className="nav-links">
                <li><a href="#home">Anasayfa</a></li>
                <li><a href="#about">Ben Kimim</a></li>
                <li><a href="#skills">Neler Yapabilirim</a></li>
                <li><a href="#portfolio">Portfolyo</a></li>
                <li><a href="#contact">İletişim</a></li>
            </ul>

            <div className="social-icons">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                <a href="https://github.com/ezgikirnapci" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
        </nav>
    );
}

export default Navbar;
