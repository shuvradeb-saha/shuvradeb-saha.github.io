import React, { useState, useEffect } from "react";
import { Routes, Link, Route } from "react-router-dom";

import { About, Academic } from "./contents";

const ROUTES = Object.freeze({
  ABOUT: "/",
  ACADEMIC: "/academic",
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
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setRoutes(ROUTES.ACADEMIC)}
              style={route === ROUTES.ACADEMIC ? { color: SELECTED_COLOR } : {}}
              to="/academic"
            >
              Academic
            </Link>
          </li>
        </ul>
      </nav>
      <div style={{ padding: "15px" }}>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/academic" element={<Academic />} />
        </Routes>
      </div>
    </div>
  );
}
