import React from "react";
import "../styles/styles.css";

const projects = [
    {
        title: "Zihin Haritası Web Sitesi",
        description: "Kolay zihin haritası oluşturma ve yönetme aracı. React tabanlı ve responsive.",
        image: "/images/harita.jpeg"
    },
    {
        title: "Brute Force Şifre Kırma Aracı",
        description: "C++ ve Qt kullanarak geliştirilmiş gelişmiş şifre kırma ve analiz aracı.",
        image: "/images/şifre.jpg"

    },
    {
        title: "Nesne Takip Sistemi",
        description: "Python ve OpenCV ile gerçek zamanlı nesne takibi uygulaması.",
        image: "/images/nesne.jpg"
    },
    {
        title: "Yılan Oyunu",
        description: "Klasik yılan oyunu, JavaScript ve HTML5 canvas kullanılarak geliştirildi.",
        image: "/images/snake.png"
    },
];

const Portfolio = () => {
    return (
        <section className="portfolio-section" id="portfolio">
            <h2>Projelerim</h2>
            <div className="projects-grid">
                {projects.map(({ title, description, image, github, live }, index) => (
                    <div key={index} className="project-card">
                        <img src={image} alt={title} className="project-image" />
                        <div className="project-info">
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <div className="project-links">
                                {github && (
                                    <a href={github} target="_blank" rel="noopener noreferrer" className="btn">
                                        GitHub
                                    </a>
                                )}
                                {live && live !== "" && (
                                    <a href={live} target="_blank" rel="noopener noreferrer" className="btn btn-live">
                                        Canlı
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
