import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserGraduate,
  faCode,
  faBriefcase,
  faLaptopCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { 
  About, 
  Academic, 
  Projects, 
  JobExperience, 
  Skills, 
  Contact 
} from "./contents";

const ROUTES = Object.freeze({
  ABOUT: "/",
  SKILLS: "/skills",
  PROJECTS: "/projects",
  JOBS: "/jobs",
  ACADEMIC: "/academic",
  CONTACT: "/contact",
});

export default function Content() {
  const [route, setRoute] = useState(ROUTES.ABOUT);

  useEffect(() => {
    const hashPath = window.location.hash;
    const route = hashPath.substring(1, hashPath.length);
    setRoute(route || ROUTES.ABOUT);
  }, []);

  return (
    <div className="contents">
      <nav>
        <ul>
          <li>
            <NavLink
              onClick={() => setRoute(ROUTES.ABOUT)}
              to={ROUTES.ABOUT}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <FAIcon icon={faHome} /> About
            </NavLink>
          </li>
          
          <li>
            <NavLink
              onClick={() => setRoute(ROUTES.SKILLS)}
              to={ROUTES.SKILLS}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <FAIcon icon={faLaptopCode} /> Skills
            </NavLink>
          </li>
          
          <li>
            <NavLink
              onClick={() => setRoute(ROUTES.PROJECTS)}
              to={ROUTES.PROJECTS}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <FAIcon icon={faCode} /> Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => setRoute(ROUTES.JOBS)}
              to={ROUTES.JOBS}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <FAIcon icon={faBriefcase} /> Experience
            </NavLink>
          </li>
          
          <li>
            <NavLink
              onClick={() => setRoute(ROUTES.ACADEMIC)}
              to={ROUTES.ACADEMIC}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <FAIcon icon={faUserGraduate} /> Education
            </NavLink>
          </li>
          
          <li>
            <NavLink
              onClick={() => setRoute(ROUTES.CONTACT)}
              to={ROUTES.CONTACT}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <FAIcon icon={faEnvelope} /> Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.SKILLS} element={<Skills />} />
        <Route path={ROUTES.PROJECTS} element={<Projects />} />
        <Route path={ROUTES.JOBS} element={<JobExperience />} />
        <Route path={ROUTES.ACADEMIC} element={<Academic />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
      </Routes>
    </div>
  );
}
