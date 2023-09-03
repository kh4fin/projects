import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const ContentBackend = () => {
  return (
    <>
      <article className="experience__details">
        <BsPatchCheckFill className="experience__details-icon" />
        <div>
          <h4>Node JS</h4>
          <small className="text-light">Experienced</small>
        </div>
      </article>
      <article className="experience__details">
        <BsPatchCheckFill className="experience__details-icon" />
        <div>
          <h4>MySQL</h4>
          <small className="text-light">Basic</small>
        </div>
      </article>
      <article className="experience__details">
        <BsPatchCheckFill className="experience__details-icon" />
        <div>
          <h4>PHP</h4>
          <small className="text-light">Basic</small>
        </div>
      </article>
      <article className="experience__details">
        <BsPatchCheckFill className="experience__details-icon" />
        <div>
          <h4>Codeigniter</h4>
          <small className="text-light">Basic</small>
        </div>
      </article>
    </>
  );
};

export default ContentBackend;
