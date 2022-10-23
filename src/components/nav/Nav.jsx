import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const menuItems = [
  {
    hrefId: "#",
    icon: <AiOutlineHome />,
  },
  {
    hrefId: "#about",
    icon: <AiOutlineUser />,
  },
  {
    hrefId: "#experience",
    icon: <BiBook />,
  },
  {
    hrefId: "#services",
    icon: <RiServiceLine />,
  },
  {
    hrefId: "#contact",
    icon: <BiMessageSquareDetail />,
  },
];
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      {menuItems.map((items, index) => (
        <a
          onClick={() => setActiveNav(items.hrefId)}
          className={activeNav === items.hrefId ? "active" : ""}
          key={index}
          href={items.hrefId}
        >
          {items.icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
