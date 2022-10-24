import React from "react";
import { faker } from "@faker-js/faker";
import "./testimonials.css";

const testimonialsComments = [
  {
    avatar: faker.internet.avatar(),
    name: faker.name.fullName(),
    reviews: faker.lorem.sentences(3),
  },
  {
    avatar: faker.internet.avatar(),
    name: faker.name.fullName(),
    reviews: faker.lorem.sentences(3),
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        {testimonialsComments.map((item, index) => (
          <article className="testimonial">
            <div className="client__avatar">
              <img src={item.avatar} alt={item.name} />
            </div>
            <h5 className="client__name">{item.name}</h5>
            <small className="client__reviews">{item.reviews}</small>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
