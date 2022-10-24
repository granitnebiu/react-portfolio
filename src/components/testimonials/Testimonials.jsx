import React from "react";

import { faker } from "@faker-js/faker";
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./testimonials.css";

const testimonialsComments = [
  {
    avatar: faker.internet.avatar(),
    name: faker.name.fullName(),
    reviews: faker.lorem.sentences(2),
  },
  {
    avatar: faker.internet.avatar(),
    name: faker.name.fullName(),
    reviews: faker.lorem.sentences(2),
  },
  {
    avatar: faker.internet.avatar(),
    name: faker.name.fullName(),
    reviews: faker.lorem.sentences(2),
  },
  {
    avatar: faker.internet.avatar(),
    name: faker.name.fullName(),
    reviews: faker.lorem.sentences(2),
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {testimonialsComments.map((item, index) => (
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={item.avatar} alt={item.name} />
            </div>
            <h5 className="client__name">{item.name}</h5>
            <small className="client__reviews">{item.reviews}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
