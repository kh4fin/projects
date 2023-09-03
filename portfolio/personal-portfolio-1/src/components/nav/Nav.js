import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageRoundedDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  const handleClick = (navItem) => {
    setActiveNav(navItem);
  };

  useEffect(() => {
    // Set activeNav to "#home" on component mount
    setActiveNav("#home");
  }, []);

  return (
    <nav>
      <a
        href="#home"
        onClick={() => handleClick('#home')}
        className={activeNav === "#home" ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => handleClick('#about')}
        className={activeNav === "#about" ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => handleClick('#experience')}
        className={activeNav === "#experience" ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => handleClick('#services')}
        className={activeNav === "#services" ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => handleClick('#contact')}
        className={activeNav === "#contact" ? 'active' : ''}
      >
        <BiMessageRoundedDetail />
      </a>
    </nav>
  );
};

export default Nav;
