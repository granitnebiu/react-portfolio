import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio/1.webp";
import IMG2 from "../../assets/portfolio/2.webp";
import IMG3 from "../../assets/portfolio/3.webp";
import IMG4 from "../../assets/portfolio/4.webp";
import IMG5 from "../../assets/portfolio/5.webp";
import IMG6 from "../../assets/portfolio/6.webp";

const portfolioItem = [
  {
    title: "This is a portfolio item title",
    alt: "Portfolio 1",
    githubLink: "https://github.com",
    LiveDemoLink: "https://dribbble.com/shots/19660908-Bar-chart-Orion",
    imgSrc: IMG1,
  },
  {
    title: "This is a portfolio item title",
    alt: "Portfolio 2",
    githubLink: "https://github.com",
    LiveDemoLink:
      "https://dribbble.com/shots/19660931-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
    imgSrc: IMG2,
  },
  {
    title: "This is a portfolio item title",
    alt: "Portfolio 3",
    githubLink: "https://github.com",
    LiveDemoLink:
      "https://dribbble.com/shots/19609442-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
    imgSrc: IMG3,
  },
  {
    title: "This is a portfolio item title",
    alt: "Portfolio 4",
    githubLink: "https://github.com",
    LiveDemoLink: "https://dribbble.com/shots/19551590-Orion-UI-kit-for-Figma",
    imgSrc: IMG4,
  },
  {
    title: "This is a portfolio item title",
    alt: "Portfolio 5",
    githubLink: "https://github.com",
    LiveDemoLink: "https://dribbble.com/Alien_pixels",
    imgSrc: IMG5,
  },
  {
    title: "This is a portfolio item title",
    alt: "Portfolio 6",
    githubLink: "https://github.com",
    LiveDemoLink: "https://dribbble.com/Alien_pixels",
    imgSrc: IMG6,
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioItem.map((item, index) => (
          <article key={index} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.imgSrc} alt={item.alt} />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a href={item.githubLink} className="btn">
                GitHub
              </a>
              <a href={item.LiveDemoLink} taget="_blank" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
