import React, { useState, useEffect } from "react";
import { Routes, Link, Route } from "react-router-dom";

import { About, Academic, Projects, JobExperience } from "./contents";

const ROUTES = Object.freeze({
  ABOUT: "/",
  ACADEMIC: "/academic",
  PROJECTS: "/projects",
  JOBS: "/jobs",
});

const SELECTED_COLOR = "#fffbfb";

export default function Content() {
  const [route, setRoutes] = useState(ROUTES.ABOUT);

  useEffect(() => {
    const hashPath = window.location.hash;
    const route = hashPath.substring(1, hashPath.length);
    setRoutes(route);
  });

  return (
    <div className="contents">
      <nav>
        <ul>
          <li>
            <Link
              onClick={() => setRoutes(ROUTES.ABOUT)}
              style={route === ROUTES.ABOUT ? { color: SELECTED_COLOR } : {}}
              to={ROUTES.ABOUT}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setRoutes(ROUTES.ACADEMIC)}
              style={route === ROUTES.ACADEMIC ? { color: SELECTED_COLOR } : {}}
              to={ROUTES.ACADEMIC}
            >
              Academic
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setRoutes(ROUTES.PROJECTS)}
              style={route === ROUTES.PROJECTS ? { color: SELECTED_COLOR } : {}}
              to={ROUTES.PROJECTS}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setRoutes(ROUTES.JOBS)}
              style={route === ROUTES.JOBS ? { color: SELECTED_COLOR } : {}}
              to={ROUTES.JOBS}
            >
              Job Experience
            </Link>
          </li>
        </ul>
      </nav>
      <div style={{ padding: "15px" }}>
        <Routes>
          <Route exact path={ROUTES.ABOUT} element={<About />} />
          <Route exact path={ROUTES.ACADEMIC} element={<Academic />} />
          <Route exact path={ROUTES.PROJECTS} element={<Projects />} />
          <Route exact path={ROUTES.JOBS} element={<JobExperience />} />
        </Routes>
      </div>
    </div>
  );
}
