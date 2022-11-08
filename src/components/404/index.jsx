import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NotFound = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    console.log("2");
    setPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <div className="notfound">
      <div
        className="notfound-wrap"
        onMouseMove={handleMouseMove}
        style={{ backgroundPosition: `${position.x}px ${position.y}px` }}
      >
        <div className="content">
          <h2>404</h2>
          <h4>Opps! Page not found</h4>
          <p>
            The page you are looking for does not exist or is being developed by
            our team.
          </p>
          <Link to="/" className="link">
            Back to Home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
