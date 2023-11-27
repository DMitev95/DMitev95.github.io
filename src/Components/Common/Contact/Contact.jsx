import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { GrLinkedinOption } from "react-icons/gr";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>
      <div className="contact-info">
        <div className="content">
          <h3>
            <i className="icon">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </i>
            Email: <span>nfsmitko@gmail.com</span>
          </h3>
        </div>
        <div className="content">
          <h3>
            <i className="icon">
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
            </i>
            Location: <span>Varna/Sofia</span>
          </h3>
        </div>
        <div className="content">
          <h3>
            <i className="icon">
              <span>
                <GrLinkedinOption></GrLinkedinOption>
              </span>
            </i>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/dimitar-mitev-625667239/"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                {" "}
                Dimitar Mitev
                <i className="link-icon">
                  <BiLinkExternal></BiLinkExternal>
                </i>
              </span>
            </a>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;
