import React from "react";

export default function About() {
  return (
    <div className="content" style={{ textAlign: "justify", fontSize: "20px" }}>
      <div className="content_item">
        <h3>About Me</h3>
        <span>
          Hi, I am Shuvradeb Saha (Shaishab)👋. I am a software engineer who is
          currently working at Cefalo Bangladesh Ltd. I had completed my
          Bachelor of Science in Software Engineering from Institute of
          Information Technology, University of Dhaka in 2019. Personally, I am
          fascinated by anything related to science and technology. I am always
          inquisitive about learning new algorithms and love to solve real-world
          problems using them.
        </span>
      </div>
      <div className="content_item">
        <h3>Interests</h3>
        <span>
          I am extremely interested in System Design and Architecture,
          Distributed Systems, NLP and Software Metrics and eagerly looking
          forward to enriching my knowledge in those topics whenever I get an
          opportunity.
        </span>
      </div>
    </div>
  );
}
