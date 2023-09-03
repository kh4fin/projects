import React from "react";
import { BiCheck } from "react-icons/bi";

const WebDevelopment = () => {
  return (
    <article className="service">
      <div className="service__head">
        <h3>Web Development</h3>
      </div>
      <ul className="service__list">
        <li>
          <BiCheck className="service__list-icon" />
          <p>Website Design and Development</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Responsive Design</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>E-commerce</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Web Aplication Development</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>API Integration</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Search Engine Optimization (SEO)</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Web Analytics</p>
        </li>
      </ul>
    </article>
  );
};

export default WebDevelopment;
