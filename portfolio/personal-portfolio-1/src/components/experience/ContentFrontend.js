import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const ContentFrontend = () => {
  return (
    <>
      <article className="experience__details">
        < BsPatchCheckFill className='experience__details-icon' />
        <div>
          <h4>HTML</h4>
          <small className="text-light">Experienced</small>
        </div>
      </article>
      <article className="experience__details">
        < BsPatchCheckFill className='experience__details-icon' />
        <div>
          <h4>CSS</h4>
          <small className="text-light">Intermediate</small>
        </div>
      </article>
      <article className="experience__details">
        < BsPatchCheckFill className='experience__details-icon' />
        <div>
          <h4>Javascript</h4>
          <small className="text-light">Intermediate</small>
        </div>
      </article>
      <article className="experience__details">
        < BsPatchCheckFill className='experience__details-icon' />
        <div>
          <h4>Bootstrap</h4>
          <small className="text-light">Intermediate</small>
        </div>
      </article>
      <article className="experience__details">
        < BsPatchCheckFill className='experience__details-icon' />
        <div>
          <h4>Saas</h4>
          <small className="text-light">Intermediate</small>
        </div>
      </article>
      <article className="experience__details">
        < BsPatchCheckFill className='experience__details-icon' />
        <div>
          <h4>React js</h4>
          <small className="text-light">Basic</small>
        </div>
      </article>
    </>
  );
};

export default ContentFrontend;
