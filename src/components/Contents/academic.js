import React from "react";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faInstitution,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

const EDUCATION = Object.freeze([
  {
    degree: "Bachelor of Science in Software Engineering (BSSE)",
    year: 2019,
    institute: "Institute of Information Technology, University of Dhaka",
  },

  {
    degree: "Higher Secondary Certificate (HSC)",
    year: 2015,
    institute: "Magura Govt. College",
  },

  {
    degree: "Secondary School Certificate (SSC)",
    year: 2013,
    institute: "Jagla H. M. High School, Magura",
  },
]);

export default function Academic() {
  const renderDegree = ({ degree, year, institute }) => (
    <div className="degree" key={degree}>
      <div>
        <FAIcon icon={faUserGraduate} />
        <span>
          {degree} - {year}
        </span>
      </div>
      <div>
        <FAIcon icon={faInstitution} />
        <span>{institute}</span>
      </div>
    </div>
  );

  return (
    <div className="content">
      <div className="section">
        <h3>Education</h3>
        {EDUCATION.map(renderDegree)}
      </div>
      <div className="section">
        <h3>Internship (January 2019 - June 2019)</h3>
        <div className="icon_text">
          <span className="icon left">
            <FAIcon icon={faBuilding} />
          </span>
          <span>
            <b>Cefalo Bangladesh Ltd.</b>
          </span>
        </div>

        <span>
          As part of my academic curriculumn, I had worked as an intern in the
          industry and spent a whole semester (6 months) there. During the
          internship period I had studied several web technologies such as REST
          API, MVC pettern, Spring Boot, and NodeJS followed by two capstone
          projects. I also got acquaintanced with agile software development
          model while working with a team and contributed on various feature
          integration, improvement and bug fixes throughout the projects.
        </span>
      </div>
    </div>
  );
}
