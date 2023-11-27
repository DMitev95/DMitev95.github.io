import React from "react";
import { GrLinkedinOption, GrGithub } from "react-icons/gr";

import Photo from "../Img/Dimitar.png";
import "./Homepage.css";

const Homepage = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, I am <span>Dimitar Mitev</span>
        </h1>
        <div className="text-animate">
          <h3>Backend Developer</h3>
          <p>
            I am a highly driven and ambitious software engineering student with
            growing knowledge of both programming concepts and different
            programming languages.I'm exited to gather skills and knowledge from
            experienced mentors in the industry, as well as contribute with
            passion to real projects and products in the field.
          </p>
          <div className="home-sci">
            <a
              href="https://www.linkedin.com/in/dimitar-mitev-625667239/"
              target="_blank"
            >
              <GrLinkedinOption></GrLinkedinOption>
            </a>
            <a href="https://github.com/nfsmitko" target="_blank">
              <GrGithub></GrGithub>
            </a>
          </div>
        </div>
      </div>
      <div className="home-img">
        <img src={Photo} alt="" />
        <span className="spin"></span>
      </div>
    </section>
  );
};

export default Homepage;
