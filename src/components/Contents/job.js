import React from "react";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import { faClock, faBuilding } from "@fortawesome/free-solid-svg-icons";

export default function JobExperience() {
  const renderTimeSpent = (timeRange) => (
    <div className="icon_text">
      <span className="icon left">
        <FAIcon icon={faClock} />
      </span>
      <span>{timeRange}</span>
    </div>
  );

  return (
    <div className="content">
      <div className="section">
        <h3>Software Engineer (Full Time)</h3>
        {renderTimeSpent("January 2020 - Present")}
        <div className="icon_text">
          <span className="icon left">
            <FAIcon icon={faBuilding} />
          </span>
          <span>
            <b>Cefalo Bangladesh Ltd.</b>
          </span>
        </div>

        <span></span>
      </div>
      <div className="section">
        <h3>Junior Software Engineer (Part Time)</h3>
        {renderTimeSpent("July 2019 - December 2019")}
        <div className="icon_text">
          <span className="icon left">
            <FAIcon icon={faBuilding} />
          </span>
          <span>
            <b>Cefalo Bangladesh Ltd.</b>
          </span>
        </div>

        <span></span>
      </div>
      <div className="section">
        <h3>Internship </h3>
        {renderTimeSpent("January 2019 - June 2019")}
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
