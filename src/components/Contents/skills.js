import React from "react";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faDesktop,
  faCogs,
  faTools,
  faShieldAlt,
  faServer,
  faFileCode,
  faLayerGroup,
  faLock,
  faCodeBranch
} from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faJava,
  faHtml5,
  faReact,
  faSass,
  faBootstrap,
  faNodeJs,
  faDocker,
  faAws,
  faGitAlt,
  faJira
} from "@fortawesome/free-brands-svg-icons";

const SKILLS = {
  languages: [
    { name: "JavaScript", icon: faJs },
    { name: "Java", icon: faJava },
    { name: "TypeScript", icon: faFileCode },
    { name: "Python", icon: faFileCode },
    { name: "HTML/CSS", icon: faHtml5 },
    { name: "SQL", icon: faDatabase },
  ],
   backend: [
    { name: "Node.js", icon: faNodeJs },
    { name: "Express", icon: faServer },
    { name: "Spring Boot", icon: faJava },
    { name: "RESTful APIs", icon: faServer }
  ],
  frontend: [
    { name: "React", icon: faReact },
    { name: "Next.js", icon: faReact },
    { name: "Redux", icon: faLayerGroup },
    { name: "SCSS/SASS", icon: faSass },
    { name: "Bootstrap", icon: faBootstrap },
    { name: "Material UI", icon: faLayerGroup },
  ],
  databases: [
    { name: "MongoDB", icon: faDatabase },
    { name: "MySQL", icon: faDatabase },
    { name: "PostgreSQL", icon: faDatabase },
  ],
  tools: [
    { name: "Git", icon: faGitAlt },
    { name: "Docker", icon: faDocker },
    { name: "CI/CD", icon: faCodeBranch },
    { name: "AWS", icon: faAws },
    { name: "Jira", icon: faJira },
  ],
  security: [
    { name: "OAuth2", icon: faLock },
    { name: "OIDC", icon: faLock },
    { name: "Auth0", icon: faLock },
    { name: "OpenFGA", icon: faLock },
    { name: "JWT", icon: faLock },
  ],
};

export default function Skills() {
  const renderSkillCategory = (category, skills, categoryIcon) => (
    <div className="skill-category tech-card">
      <div className="card-glow"></div>
      <div className="skill-category-header">
        <FAIcon icon={categoryIcon} />
        <h4>{category}</h4>
      </div>
      <div className="skills-grid-items">
        {skills.map(skill => (
          <div 
            key={skill.name} 
            className="skill-item"
          >
            <div className="skill-icon">
              <FAIcon icon={skill.icon} />
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="content" id="skills">
      <div className="section skills-section slide-up">
        <h3 className="tech-header">Technical Skills</h3>
        <p>
          Here's an overview of my technical toolkit. I'm constantly exploring new technologies 
          and enhancing my skills to deliver the best solutions.
        </p>
        <div className="skills-grid">
          {renderSkillCategory("Languages", SKILLS.languages, faCode)}
          {renderSkillCategory("Frontend", SKILLS.frontend, faDesktop)}
          {renderSkillCategory("Backend", SKILLS.backend, faCogs)}
          {renderSkillCategory("Databases", SKILLS.databases, faDatabase)}
          {renderSkillCategory("Security & Auth", SKILLS.security, faShieldAlt)}
          {renderSkillCategory("Tools & DevOps", SKILLS.tools, faTools)}
        </div>
      </div>
    </div>
  );
}
