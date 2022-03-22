import React, { useState } from "react";
import { Routes, Link, Route } from "react-router-dom";

import { About, Academic } from "./contents";

const ROUTES = Object.freeze({
  ABOUT: "about",
  ACADEMIC: "academic",
});

const SELECTED_COLOR = "#fffbfb";

export default function Content() {
  const [route, setRoutes] = useState(ROUTES.ABOUT);

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
