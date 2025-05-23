import React from "react";
import "../styles/styles.css";

const skills = [
    { name: "Python", level: 85 },
    { name: "C#", level: 85 },
    { name: "JavaScript", level: 65 },
    { name: "React", level: 60 },
    { name: "HTML & CSS", level: 50 },
    { name: "C++", level: 45 },
];

export default function Skills() {
    return (
        <section className="section-container" id="skills">
            <h2>Yeteneklerim</h2>
            <div className="skills-container">
                {skills.map((skill) => (
                    <div key={skill.name} className="skill-card">
                        <h3>{skill.name}</h3>
                        <div className="progress-bar">
                            <div
                                className="progress-level"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
