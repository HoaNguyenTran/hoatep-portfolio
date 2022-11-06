import React from "react";
import TypeWriter from "typewriter-effect";
import "./style.css";

const Typing = () => {
  return (
    <TypeWriter
      options={{
        strings: [
          "Frontend Developer",
          "MERN-Stack Developer",
          "Sharing Technology about Frontend",
          "In love with mailu",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        wrapperClassName: "typewriter",
        cursorClassName: "typewriter",
      }}
    />
  );
};

export default Typing;
