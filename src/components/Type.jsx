import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Aspiring Full Stack Developer",
          "Passionate about software development",
          "Dedicated to mastering both front-end and back-end skills",
          "Creative problem solver",
          "Detail-oriented with a focus on quality",
          "Keen learner, always seeking to expand knowledge",
          "Results-driven and focused on delivering outcomes",
          "Team player with strong collaboration skills",
          "Adaptable to new tools, technologies, and workflows",
          "Strong communicator with a clear vision",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
export default Type;
