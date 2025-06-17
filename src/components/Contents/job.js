import React from "react";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import { 
  faClock, 
  faBuilding, 
  faBriefcase 
} from "@fortawesome/free-solid-svg-icons";

const EXPERIENCE = [
  {
    title: "Software Engineer",
    company: "Cefalo Bangladesh Ltd.",
    type: "Full Time",
    period: "January 2020 - Present",
    description: `Working as a full-stack developer on multiple enterprise applications. 
    Responsible for designing, developing, and maintaining web applications using React, 
    Spring Boot, and related technologies. Contributing to system architecture decisions
    and implementing best practices for code quality and security.`,
    achievements: [
      "Led the development of key features that improved application performance by 40%",
      "Implemented CI/CD pipelines that reduced deployment time by 50%",
      "Mentored junior developers and conducted code reviews to ensure code quality",
      "Collaborated with cross-functional teams to deliver projects on time and within scope"
    ]
  },
  {
    title: "Junior Software Engineer",
    company: "Cefalo Bangladesh Ltd.",
    type: "Part Time",
    period: "July 2019 - December 2019",
    description: `Worked as a part-time developer while completing academic commitments.
    Focused on frontend development and API integration. Participated in agile development
    processes including daily stand-ups, sprint planning, and retrospectives.`,
    achievements: [
      "Developed responsive UI components using React and Redux",
      "Collaborated with backend developers to integrate RESTful APIs",
      "Fixed critical bugs that improved application stability"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Cefalo Bangladesh Ltd.",
    type: "Internship",
    period: "January 2019 - June 2019",
    description: `As part of my academic curriculum, I completed a 6-month internship in the industry.
    During this period, I studied various web technologies including REST APIs, MVC pattern,
    Spring Boot, and Node.js, culminating in two capstone projects. I was also introduced to
    agile software development methodologies while working with a team, contributing to
    feature integration, improvements, and bug fixes throughout the projects.`,
    achievements: [
      "Gained hands-on experience with industry-standard development practices",
      "Contributed to two successful capstone projects",
      "Learned agile methodologies and collaborative development workflows"
    ]
  }
];

export default function JobExperience() {
  const renderExperience = ({ title, company, type, period, description, achievements }) => (
    <div className="timeline-item">
      <span className="timeline-date">
        <FAIcon icon={faClock} /> {period}
      </span>
      <h3 className="timeline-title">{title} ({type})</h3>
      <div className="timeline-company">
        <FAIcon icon={faBuilding} /> {company}
      </div>
      <p>{description}</p>
      
      {achievements && achievements.length > 0 && (
        <div className="achievements">
          <h4>Key Achievements:</h4>
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <div className="content" id="experience">
      <div className="section">
        <h3>
          <FAIcon icon={faBriefcase} /> Professional Experience
        </h3>
        <p>
          My professional journey has provided me with valuable experience in software development,
          teamwork, and problem-solving. Here's a chronological overview of my career path.
        </p>
        
        <div className="timeline">
          {EXPERIENCE.map(renderExperience)}
        </div>
      </div>
    </div>
  );
}
