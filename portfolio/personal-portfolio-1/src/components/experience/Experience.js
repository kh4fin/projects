import React from "react";
import "./experience.css";
import ContentFrontend from "./ContentFrontend";
import ContentBackend from "./ContentBackend";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <ContentFrontend />
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <ContentBackend />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
