import React from "react";
import Parser from "html-react-parser";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import { 
  faGithub, 
  faChrome 
} from "@fortawesome/free-brands-svg-icons";
import { 
  faCode, 
  faExternalLinkAlt 
} from "@fortawesome/free-solid-svg-icons";

const PROJECTS = Object.freeze([
  {
    name: "Image Portal",
    github: null,
    liveDemo: null,
    image: "https://via.placeholder.com/600x400?text=Image+Portal",
    description: `A media distribution platform that enables the licensing and selling of images and videos for NTB. Handles millions of assets efficiently via high-performance APIs and user-friendly interfaces.`,
    tags: [
      "Java",
      "Spring Boot",
      "NextJS",
      "Auth0",
      "JWT",
      "OpenFGA",
      "TeamCity"
    ],
  },
  {
    name: "Media Manager",
    github: null,
    liveDemo: null,
    description: `A digital asset management system designed to store, index, and manage millions of digital assets. Provides seamless media upload, download, and search capabilities. Serves as the core backend platform for media storage and retrieval for NTB.`,
    tags: [
      "Java",
      "Spring Boot",
      "ReactJS",
      "Auth0",
      "Postgres",
      "Opensearch",
      "Liquibase"
    ],
  },
  {
    name: "Question Bank",
    github: "https://github.com/shuvradeb-saha/question-bank",
    liveDemo: null,
    image: "https://via.placeholder.com/600x400?text=Question+Bank",
    description: `A comprehensive web application for question management and automatic
    question paper generation, featuring a recommendation system for similar documents.
    The project follows the SDLC paradigm with a client-server architecture.
    The recommendation system utilizes <i>cosine-similarity</i> with tf-idf transformation,
    while the question paper generation implements a randomized algorithm for optimal selection.`,
    tags: [
      "Spring Boot",
      "ReactJS",
      "JWT",
      "Cosine Similarity",
      "Randomized Algorithm",
      "NLP",
      "iText",
    ],
  },
  {
    name: "Inventory Management System",
    github: "https://github.com/shuvradeb-saha/uims_web",
    liveDemo: null,
    image: "https://via.placeholder.com/600x400?text=Inventory+Management",
    description: `A comprehensive web tool that enables university departments to track inventory
    and manage product requisitions efficiently. Built using the MVC pattern with basic authentication
    for access control. The project involved extensive Software Requirement Analysis, relational database modeling,
    class-based modeling, and flow-oriented modeling to ensure a robust and maintainable system.`,
    tags: [
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Basic Authentication",
    ],
  },
  {
    name: "Bengali Text Editor",
    github: "https://github.com/shuvradeb-saha/TextEditor",
    liveDemo: null,
    image: "https://via.placeholder.com/600x400?text=Bengali+Text+Editor",
    description: `A lightweight Java-based text editor with support for Bengali fonts and the Potaka
    programming language. Features include file operations (save, open), text search and replace functionality,
    and syntax highlighting. The text search functionality was implemented using the <i>KMP (Knuth Morris Pratt)</i>
    algorithm, while syntax highlighting was achieved through regular expressions.`,
    tags: ["Java", "Java Swing", "KMP Algorithm", "Regular Expressions"],
  },
  {
    name: "Gomoku (Five in a Row)",
    github: "https://github.com/shuvradeb-saha/gomoku_five",
    liveDemo: null,
    image: "https://via.placeholder.com/600x400?text=Gomoku+Game",
    description: `An interactive implementation of Gomoku (Five in a Row), featuring both two-player and AI modes
    with three distinct visual themes. The user interface was built using JavaFX for a smooth gaming experience.
    The AI opponent was developed using the minimax algorithm with alpha-beta pruning for efficient decision-making,
    providing a challenging gameplay experience.`,
    tags: ["Java", "JavaFX", "Threading", "AI", "Minimax Algorithm", "Alpha-Beta Pruning"],
  },
]);

export default function Projects() {
  const renderProject = ({ name, github, liveDemo, image, description, tags }) => (
    <div key={name} className="section project-card">
      <div className="project-header">
        <h3>{name}</h3>
        
       {(github || liveDemo) && <div className="project-links">
         {github && <a href={github} target="_blank" rel="noopener noreferrer">
            <FAIcon icon={faGithub} /> GitHub
          </a>}
          {liveDemo && (
            <a href={liveDemo} target="_blank" rel="noopener noreferrer">
              <FAIcon icon={faExternalLinkAlt} /> Live Demo
            </a>
          )}
        </div>}
      </div>
      
      <div className="project-description">
        {Parser(description)}
      </div>
      
      <div className="project-footer">
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag} className="tag-item">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="content" id="projects">
      <div className="section">
        <h3>Projects</h3>
        <p>
          Here are some of the notable projects I've worked on. Each project represents a unique challenge that helped me grow as a developer.
        </p>
      </div>
      
      {PROJECTS.map(renderProject)}
    </div>
  );
}
