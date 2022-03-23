import React from "react";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faInstitution,
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
    institute: "Jagla H. M. High School",
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
    </div>
  );
}
