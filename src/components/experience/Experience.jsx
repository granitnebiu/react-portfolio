import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const skillsFrontEnd = [
  {
    icon: <BsPatchCheckFill className="experience__details-icon" />,
    programming_language: "HTML",
    level: "Experienced",
  },
  {
    icon: <BsPatchCheckFill className="experience__details-icon" />,
    programming_language: "CSS",
    level: "Intermediate",
  },
  {
    icon: <BsPatchCheckFill className="experience__details-icon" />,
    programming_language: "JavaScript",
    level: "Experienced",
  },
  {
    icon: <BsPatchCheckFill className="experience__details-icon" />,
    programming_language: "Bootstrap",
    level: "Experienced",
  },
  {
    icon: <BsPatchCheckFill className="experience__details-icon" />,
    programming_language: "Tailwind CSS",
    level: "Experienced",
  },
  {
    icon: <BsPatchCheckFill className="experience__details-icon" />,
    programming_language: "React JS",
    level: "Experienced",
  },
  {
    icon: <BsPatchCheckFill className="experience__details-icon" />,
    programming_language: "Next JS",
    level: "Experienced",
  },
];

const skillsBackEnd = [
  {
    icon: <BsPatchCheckFill className="experience__details-icon" />,
    programming_language: "Node JS",
    level: "Experienced",
  },
  {
    icon: <BsPatchCheckFill className="experience__details-icon" />,
    programming_language: "Mongo DB",
    level: "Experienced",
  },
  {
    icon: <BsPatchCheckFill className="experience__details-icon" />,
    programming_language: "PHP",
    level: "Intermediate",
  },
  {
    icon: <BsPatchCheckFill className="experience__details-icon" />,
    programming_language: "MySQL",
    level: "Basic",
  },
  {
    icon: <BsPatchCheckFill className="experience__details-icon" />,
    programming_language: "Python",
    level: "Experienced",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {skillsFrontEnd.map((frontend, index) => (
              <article className="experience__details">
                {frontend.icon}
                <div>
                  <h4>{frontend.programming_language}</h4>
                  <small className="text-light">{frontend.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {skillsBackEnd.map((frontend, index) => (
              <article className="experience__details">
                {frontend.icon}
                <div>
                  <h4>{frontend.programming_language}</h4>
                  <small className="text-light">{frontend.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
