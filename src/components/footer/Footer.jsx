import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const menuItems = [
  {
    href: "#",
    name: "Home",
  },
  {
    hrefId: "#about",
    name: "About",
  },
  {
    hrefId: "#experience",
    name: "Experience",
  },
  {
    hrefId: "#services",
    name: "Services",
  },
  {
    hrefId: "#portfolio",
    name: "Portfolio",
  },
  {
    hrefId: "#testimonials",
    name: "Testimonials",
  },
  {
    hrefId: "#contact",
    name: "Contact",
  },
];

const SocialFooter = [
  {
    icon: <FaFacebookF />,
    href: "https://facebook.com",
  },
  {
    icon: <FiInstagram />,
    href: "https://instagram.com",
  },
  {
    icon: <IoLogoTwitter />,
    href: "https://instagram.com",
  },
];

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        React Portfolio
      </a>

      <ul className="permalinks">
        {menuItems.map((item, index) => (
          <li>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="footer__socials">
        {SocialFooter.map((item, index) => (
          <a href={item.href} target="_blank">
            {item.icon}
          </a>
        ))}
      </div>

      <div className="footer__copyright">
        <small>&copy; All right reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
