import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { faker } from "@faker-js/faker";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import "./contact.css";

const articles = [
  {
    icon: <MdOutlineEmail className="contact__option-icon" />,
    title: "Email",
    email: faker.internet.email(),
    href: faker.internet.email(),
  },
  {
    icon: <RiMessengerLine className="contact__option-icon" />,
    title: "Messenger",
    email: faker.name.fullName(),
    href: "https://m.me",
  },
  {
    icon: <BsWhatsapp className="contact__option-icon" />,
    title: "WhatsApp",
    email: +123456789,
    href: "https://api.whatsapp.com/send?phone+123456789",
  },
];
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_hy9i3zm", "template_w2j0c3t", form.current, "vtGS1p5EwrzyzErYu").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {articles.map((item, index) => (
            <article className="contact__option">
              {item.icon}
              <h4>{item.title}</h4>
              <h5>{item.email}</h5>
              {item === "Email" ? (
                <a target="_blank" href={`mailto:${item.href}`}>
                  Send a message
                </a>
              ) : (
                <a target="_blank" href={item.href}>
                  Send a message
                </a>
              )}
              {item === "WhatsApp" && (
                <a href={item.href} target="_blank">
                  Send a message
                </a>
              )}
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" row="7" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
