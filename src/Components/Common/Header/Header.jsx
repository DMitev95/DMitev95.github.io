import "./Header.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faHouse,
  faBriefcase,
  faGraduationCap,
  faXmark,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="home-header">
      <a href="#" className="logo">
        Dimitar
      </a>

      <i className="menu-icon" onClick={() => setNavbar(!navbar)}>
        {navbar ? <FontAwesomeIcon icon={faXmark} /> : <FiMenu></FiMenu>}
      </i>

      <nav
        className={navbar ? "navbar-active" : "navbar"}
        onClick={() => setNavbar(false)}
      >
        <NavLink to="/">
          <i className="icon">
            <FontAwesomeIcon icon={faHouse} />
          </i>
          Home
        </NavLink>

        <NavLink to="/Portfolio">
          <i className="icon">
            <FontAwesomeIcon icon={faBriefcase} />
          </i>
          Portfolio
        </NavLink>

        <NavLink to="/Education">
          <i className="icon">
            <FontAwesomeIcon icon={faGraduationCap} />
          </i>
          Education
        </NavLink>

        <NavLink to="/Skills">
          <i className="icon">
            <FontAwesomeIcon icon={faGear} />
          </i>
          Skills
        </NavLink>

        <NavLink to="/Contact">
          <i className="icon">
            <FontAwesomeIcon icon={faAddressBook} />
          </i>
          Contact
        </NavLink>

        <span className="active-nav"></span>
      </nav>
    </header>
  );
};

export default Header;
