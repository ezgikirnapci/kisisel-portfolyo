import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="app">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="video2-video"
            >
                <source src="/videos/video2.mp4" type="video/mp4" />
            </video>
            <Navbar />
            <main>
                <Home />
                <About />
                <Skills />
                <Portfolio />
                <Contact />
            </main>
        </div>



);
}

export default App;
