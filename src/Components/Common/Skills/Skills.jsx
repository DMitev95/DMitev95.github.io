import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>
      <div className="skills-row">
        <div className="skills-column">
          <h3 className="title">
            <span>Codding </span> Skills
          </h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="skills">
                <h3>HTML</h3>
              </div>
              <div className="skills">
                <h3>CSS</h3>
              </div>
              <div className="skills">
                <h3>React.js</h3>
              </div>
              <div className="skills">
                <h3>OPP</h3>
              </div>
              <div className="skills">
                <h3>C#</h3>
              </div>
              <div className="skills">
                <h3>Entity Framework Core</h3>
              </div>
              <div className="skills">
                <h3>MS SQL</h3>
              </div>
              <div className="skills">
                <h3>JSON</h3>
              </div>
              <div className="skills">
                <h3>ASP.NET Core</h3>
              </div>
              <div className="skills">
                <h3>WEB Api</h3>
              </div>
              <div className="skills">
                <h3>Unit Testing</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-column">
          <h3 className="title">
            <span>Soft</span>Skills
          </h3>
          <div className="soft-skills-box">
            <div className="skills-content">
              <div className="skills">
                <h3>Teamwork</h3>
              </div>
              <div className="skills">
                <h3>Organization Skills</h3>
              </div>
              <div className="skills">
                <h3>Patient</h3>
              </div>
              <div className="skills">
                <h3>Communication</h3>
              </div>
              <div className="skills">
                <h3>Flexibility</h3>
              </div>
              <div className="skills">
                <h3>Problem Solving</h3>
              </div>
              <div className="skills">
                <h3>Self-management</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
