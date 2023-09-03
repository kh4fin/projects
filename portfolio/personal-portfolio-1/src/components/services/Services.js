import React from "react";
import "./services.css";
// import UiUx from "./UiUx";
import WebDevelopment from "./WebDevelopment";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* <UiUx /> */}
        <WebDevelopment />
      </div>
    </section>
  );
};

export default Services;
