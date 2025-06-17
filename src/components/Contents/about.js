import React from "react";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <div className="content" id="about">
      <div className="section fade-in">
        <h3>About Me</h3>
        <p>
          Hi, I'm Shuvradeb Saha (Shaishab) 👋. I'm a passionate Software Engineer currently working at Cefalo Bangladesh Ltd. I hold a Bachelor of Science in Software Engineering from the Institute of Information Technology, University of Dhaka (Class of 2019).
        </p>
        <p>
          I'm fascinated by anything related to science and technology. My natural curiosity drives me to continuously learn new algorithms and approaches to solve real-world problems efficiently. I believe in writing clean, maintainable code and creating intuitive user experiences.
        </p>
        <p>
          When I'm not coding, you'll find me exploring tech blogs, enjoying a cup of coffee, or diving into a good book. I'm always open to connecting with like-minded individuals and exploring new opportunities.
        </p>
      </div>
      
      <div className="section slide-up position-relative">
        <div className="tech-flow"></div>
        <h3>Interests</h3>
        <p className="code-line">
          I am passionate about Software Engineering, System Design and Architecture, Software Security, Machine Learning, and Natural Language Processing (NLP). I'm constantly looking to expand my knowledge in these areas and stay at the forefront of technological advancements.
        </p>
        <p className="code-line">
          I also enjoy exploring new technologies, learning about innovative algorithms, and finding creative solutions to complex problems. My approach to work combines technical expertise with a keen eye for detail and a commitment to delivering high-quality results.
        </p>
      </div>
    </div>
  );
}
