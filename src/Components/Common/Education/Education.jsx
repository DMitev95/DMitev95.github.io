import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "./Education.css";

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="education-heading">
        My <span>Journey</span>
      </h2>
      <div className="education-row">
        <div className="education-column">
          <h3 className="title">
            <i className="icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </i>
            Education
          </h3>
          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="icon">
                    <FaCalendarAlt></FaCalendarAlt>
                  </i>
                  2020-2022
                </div>
                <h3>Software university (SoftUni)</h3>
                <p>
                  Courses: C# OOP, MSSQl, Entity Framework Core, ASP.NET
                  Fundamentals, ASP.NET Advanced
                </p>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="icon">
                    <FaCalendarAlt></FaCalendarAlt>
                  </i>
                  2014-2018
                </div>
                <h3>Medical University - Varna Prof. Dr. Paraskev Stoyanov</h3>
                <p>Specialty: Dental Technician</p>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="icon">
                    <FaCalendarAlt></FaCalendarAlt>
                  </i>
                  2009-2014
                </div>
                <h3>Varna Commercial High School "Georgi Stoykov Rakovski"</h3>
                <p>Specialty: Economic Informatics</p>
              </div>
            </div>
          </div>
        </div>
        <div className="education-column">
          <h3 className="title">
            <i className="icon">
              <FontAwesomeIcon icon={faAward} />
            </i>
            Certificates
          </h3>
          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <h3>ASP.NET Core MVC (.NET 6)</h3>
                <a
                  href="https://www.udemy.com/certificate/UC-9591e8e5-4c72-471f-b7c2-870c0c1ac658/"
                  className="link"
                >
                  Udemy Course Completion Certificate | Udemy
                  <i className="link-icon">
                    <BiLinkExternal></BiLinkExternal>
                  </i>
                </a>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <h3>C# OOP</h3>
                <a
                  href="https://softuni.bg/certificates/details/131034/e0d90839"
                  className="link"
                >
                  C# OOP - February 2022
                  <i className="link-icon">
                    <BiLinkExternal></BiLinkExternal>
                  </i>
                </a>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <h3>MS SQL</h3>
                <a
                  href="https://softuni.bg/certificates/details/134976/9185ece9"
                  className="link"
                >
                  MS SQL - May 2022
                  <i className="link-icon">
                    <BiLinkExternal></BiLinkExternal>
                  </i>
                </a>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <h3>Entity Framework Core</h3>
                <a
                  href="https://softuni.bg/certificates/details/138422/20c0c454"
                  className="link"
                >
                  Entity Framework Core - June 2022
                  <i className="link-icon">
                    <BiLinkExternal></BiLinkExternal>
                  </i>
                </a>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <h3>ASP.NET Fundamentals</h3>
                <a
                  href="https://softuni.bg/certificates/details/146626/2abd36df"
                  className="link"
                >
                  ASP.NET Fundamentals - September 2022
                  <i className="link-icon">
                    <BiLinkExternal></BiLinkExternal>
                  </i>
                </a>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <h3>ASP.NET Advanced</h3>
                <a
                  href="https://softuni.bg/certificates/details/152350/f2480bc8"
                  className="link"
                >
                  ASP.NET Advanced - October 2022
                  <i className="link-icon">
                    <BiLinkExternal></BiLinkExternal>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
