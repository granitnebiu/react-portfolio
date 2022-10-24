import React from "react";
import "./about.css";
import userProfile from "../../assets/svg/user-profile.svg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const card = [
  {
    icon: <FaAward className="about__icon" />,
    title: "Experience",
    subTitle: "3+ Years Working",
  },
  {
    icon: <FiUsers className="about__icon" />,
    title: "Clients",
    subTitle: "50+ Worldwide",
  },
  {
    icon: <VscFolderLibrary className="about__icon" />,
    title: "Projects ",
    subTitle: "20+ Completed",
  },
];
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={userProfile} alt="about me user profile" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {card.map((item, index) => (
              <article key={index} className="about__card">
                {item.icon}
                <h5>{item.title}</h5>
                <small>{item.subTitle}</small>
              </article>
            ))}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempora dolores quos
            quia, ea esse sint aliquid perferendis perspiciatis animi aliquam blanditiis sit, omnis,
            accusamus ipsum debitis nobis itaque illum!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
