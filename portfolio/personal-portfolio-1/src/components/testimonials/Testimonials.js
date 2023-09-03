import React from "react";
import "./testimonials.css";
import dataReview from "./clientReview";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {dataReview.map((item) => (
          <article key={item.id} className="testimonial">
            <div className="client__avatar">
              <img src={item.image} alt={item.title} />
            </div>
            <h5 className="client__name">{item.nama}</h5>
            <small className="client__review">{item.review}</small>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
