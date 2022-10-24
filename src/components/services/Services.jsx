import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const firstCard = [
  {
    icon: <BiCheck className="service__list-icon" />,
    text: "Lorem, ipsum dolor sit amet sonsectetuyr elit",
  },
  {
    icon: <BiCheck className="service__list-icon" />,
    text: "Lorem, ipsum dolor sit amet sonsectetuyr elit",
  },
  {
    icon: <BiCheck className="service__list-icon" />,
    text: "Lorem, ipsum dolor sit amet sonsectetuyr elit",
  },
  {
    icon: <BiCheck className="service__list-icon" />,
    text: "Lorem, ipsum dolor sit amet sonsectetuyr elit",
  },
  {
    icon: <BiCheck className="service__list-icon" />,
    text: "Lorem, ipsum dolor sit amet sonsectetuyr elit",
  },
];

const secondCard = [
  {
    icon: <BiCheck className="service__list-icon" />,
    text: "Lorem, ipsum dolor sit amet sonsectetuyr elit",
  },
  {
    icon: <BiCheck className="service__list-icon" />,
    text: "Lorem, ipsum dolor sit amet sonsectetuyr elit",
  },
  {
    icon: <BiCheck className="service__list-icon" />,
    text: "Lorem, ipsum dolor sit amet sonsectetuyr elit",
  },
  {
    icon: <BiCheck className="service__list-icon" />,
    text: "Lorem, ipsum dolor sit amet sonsectetuyr elit",
  },
  {
    icon: <BiCheck className="service__list-icon" />,
    text: "Lorem, ipsum dolor sit amet sonsectetuyr elit",
  },
  {
    icon: <BiCheck className="service__list-icon" />,
    text: "Lorem, ipsum dolor sit amet sonsectetuyr elit",
  },
];
const thirdCard = [
  {
    icon: <BiCheck className="service__list-icon" />,
    text: "Lorem, ipsum dolor sit amet sonsectetuyr elit",
  },
  {
    icon: <BiCheck className="service__list-icon" />,
    text: "Lorem, ipsum dolor sit amet sonsectetuyr elit",
  },
  {
    icon: <BiCheck className="service__list-icon" />,
    text: "Lorem, ipsum dolor sit amet sonsectetuyr elit",
  },
  {
    icon: <BiCheck className="service__list-icon" />,
    text: "Lorem, ipsum dolor sit amet sonsectetuyr elit",
  },
  {
    icon: <BiCheck className="service__list-icon" />,
    text: "Lorem, ipsum dolor sit amet sonsectetuyr elit",
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service__head">
            <h3>UI/US Design</h3>
          </div>
          <ul className="service__list">
            {firstCard.map((item, index) => (
              <li key={index}>
                {item.icon}
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            {secondCard.map((item, index) => (
              <li key={index}>
                {item.icon}
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            {thirdCard.map((item, index) => (
              <li key={index}>
                {item.icon}
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
