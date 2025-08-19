import React from "react";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faUniversity,
  faCalendarAlt,
  faAward,
  faBook
} from "@fortawesome/free-solid-svg-icons";

const EDUCATION = Object.freeze([
  {
    degree: "Bachelor of Science in Software Engineering (BSSE)",
    year: "2016 - 2019",
    graduationDate: "December 2019",
    institute: "Institute of Information Technology, University of Dhaka",
    courses: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Systems",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Machine Learning",
      "Web Engineering"
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    year: "2013 - 2015",
    graduationDate: "2015",
    institute: "Magura Govt. College",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    year: "2011 - 2013",
    graduationDate: "2013",
    institute: "Jagla H. M. High School, Magura",
  }
]);

export default function Academic() {
  const renderEducation = ({ degree, year, graduationDate, institute, achievements, courses }) => (
    <div className="section" key={degree}>
      <div className="degree">
        <h3 className="degree-title">
          <FAIcon icon={faUserGraduate} /> {degree}
        </h3>
        
        <div className="degree-info">
          <FAIcon icon={faCalendarAlt} /> 
          <span style={{marginLeft: '0.5rem'}}>{year}</span>
        </div>
        
        <div className="degree-info">
          <FAIcon icon={faUniversity} /> 
          <span style={{marginLeft: '0.5rem'}}>{institute}</span>
        </div>
        
        {achievements && (
          <div className="degree-achievements">
            <h4>
              <FAIcon icon={faAward} /> Achievements
            </h4>
            <ul>
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
        
        {courses && (
          <div className="degree-courses">
            <h4>
              <FAIcon icon={faBook} /> <span style={{marginLeft: '0.5rem'}}>Key Courses</span>
            </h4>
            <div className="tags">
              {courses.map(course => (
                <span key={course} className="tag-item">{course}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="content education" id="education">
      <div className="section">
        <h3>Education</h3>
        <p>
          My educational background has provided me with a strong foundation in software engineering
          principles and practices. Below is a summary of my academic journey.
        </p>
      </div>
      
      {EDUCATION.map(renderEducation)}
    </div>
  );
}
