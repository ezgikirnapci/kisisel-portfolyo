import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Skills from './pages/Skills.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to="/">Ana Sayfa</Link></li>
                        <li><Link to="/about">Ben Kimim</Link></li>
                        <li><Link to="/skills">Yetenekler</Link></li>
                        <li><Link to="/portfolio">Portfolyo</Link></li>
                        <li><Link to="/contact">İletişim</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
