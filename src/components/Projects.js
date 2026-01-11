import React from "react";
import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            name: "Web Tester Application",
            description: "A program that outputs web server information about a web page.",
            tech: "Python",
            link: "https://github.com/Gitrua07/web-tester-app"
        },
        {
            name: "Etch-A-Sketch Program",
            description: "An webpage application containing a colour-changing grid.",
            tech: "JavaScript, HTML, CSS",
            link: "https://github.com/Gitrua07/etch-a-sketch"
        },
        {
            name: "Auto Control System Simulator Program",
            description: "A program that manages and outputs multiple scheduled trains.",
            tech: "C",
            link: "https://github.com/Gitrua07/auto-control-system-sim"
        }
    ];

    return (
        <div className="projects-container">
            <div className="projects-content">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h2><strong>{project.name}</strong></h2>
                        <p>{project.description}</p>
                        <p className="tech"><em>{project.tech}</em></p>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-link"
                            >
                                View on GitHub
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;