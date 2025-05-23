import React from "react";
import { FaXTwitter, FaGithub, FaFacebook } from 'react-icons/fa6';

function Navbar() {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">Ezgi <br />KIRNAPCI</div>
            <ul className="nav-links">
                <li><button onClick={() => scrollToSection("home")}>Anasayfa</button></li>
                <li><button onClick={() => scrollToSection("about")}>Ben Kimim</button></li>
                <li><button onClick={() => scrollToSection("skills")}>Neler Yapabilirim</button></li>
                <li><button onClick={() => scrollToSection("portfolio")}>Portfolyo</button></li>
                <li><button onClick={() => scrollToSection("contact")}>İletişim</button></li>
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
