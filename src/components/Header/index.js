import React from "react";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { 
  faGithub, 
  faLinkedinIn, 
  faTwitter,
  faDev 
} from "@fortawesome/free-brands-svg-icons";

import profilePic from "../../static/profile.png";

const SOCIAL_LINKS = [
  {
    icon: faGithub,
    link: "https://github.com/shuvradeb-saha",
    label: "GitHub",
  },
  {
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/shuvradeb-saha-a093aa158/",
    label: "LinkedIn",
  },
  {
    icon: faTwitter,
    link: "https://x.com/ShuvradebSaha",
    label: "X (Twitter)",
  },
  {
    icon: faDev,
    link: "https://dev.to/shuvradeb_saha_8ebebb3c3f",
    label: "Dev.to",
  },
];

export default function Header() {
  return (
    <header className="header">
      <div className="hero">
        <div className="hero-content">
          <span className="greeting">Hello, I'm</span>
          <h1>Shuvradeb Saha</h1>
          <p className="subtitle">Software Engineer</p>
          
          <p className="hero-text">
            A passionate Software Engineer with 6+ years of full-stack development experience. 
            I specialize in building scalable and secure web applications using modern technologies. 
            Currently working at Cefalo Bangladesh Ltd.
          </p>
          
          <div className="cta-buttons">
            <a href="#/contact" className="btn">
              Contact Me
            </a>
            <a href="https://drive.google.com/file/d/1kKGhiCHQsEVMpKdpANA01E2tc9Mv9YzY/view?usp=sharing" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <FAIcon icon={faDownload} /> Resume
            </a>
          </div>
          
          <div className="social-links">
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.label} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <FAIcon icon={social.icon} />
              </a>
            ))}
          </div>
          
          <div className="tech-stack">
            <span>Tech Stack |</span>
            <div className="tech-icons">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="blob"></div>
          <img src={profilePic} alt="Shuvradeb Saha" />
        </div>
      </div>
    </header>
  );
}
