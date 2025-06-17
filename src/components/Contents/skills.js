import React from "react";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faDesktop,
  faCogs,
  faTools
} from "@fortawesome/free-solid-svg-icons";

const SKILLS = {
  languages: [
    { name: "JavaScript", level: 90 },
    { name: "Java", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Python", level: 70 },
    { name: "HTML/CSS", level: 95 },
    { name: "SQL", level: 85 },
  ],
  frontend: [
    { name: "React", level: 90 },
    { name: "Redux", level: 85 },
    { name: "SCSS/SASS", level: 90 },
    { name: "Bootstrap", level: 80 },
    { name: "Material UI", level: 75 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "Spring Boot", level: 85 },
    { name: "RESTful APIs", level: 90 },
    { name: "GraphQL", level: 75 },
  ],
  databases: [
    { name: "MongoDB", level: 80 },
    { name: "MySQL", level: 85 },
    { name: "PostgreSQL", level: 75 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "CI/CD", level: 70 },
    { name: "AWS", level: 65 },
    { name: "Jira", level: 85 },
  ],
};

export default function Skills() {
  const renderSkillCategory = (category, skills, icon) => (
    <div className="skill-category">
      <h4>
        <FAIcon icon={icon} /> {category}
      </h4>
      <div className="skills-list">
        {skills.map(skill => (
          <div key={skill.name} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="content" id="skills">
      <div className="section skills-section">
        <h3>Skills</h3>
        <p>
          Here's a comprehensive overview of my technical skills and proficiency levels.
          I'm constantly learning and expanding my skill set to stay at the forefront of technology.
        </p>
        <div className="skills-grid">
          {renderSkillCategory("Languages", SKILLS.languages, faCode)}
          {renderSkillCategory("Frontend", SKILLS.frontend, faDesktop)}
          {renderSkillCategory("Backend", SKILLS.backend, faCogs)}
          {renderSkillCategory("Databases", SKILLS.databases, faDatabase)}
          {renderSkillCategory("Tools & DevOps", SKILLS.tools, faTools)}
        </div>
      </div>
    </div>
  );
}
