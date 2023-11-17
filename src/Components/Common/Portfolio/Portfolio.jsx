import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import OnlineRadioPicture from "../../Img/OnlineRadio.png";
import WeatherAppPicture from "../../Img/WeatherApp.png";
import GameForumPicture from "../../Img/GameForum.png";
import NewsWebsitePicture from "../../Img/NewsApp.png";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="about">
      <h2 className="heading">
        Latest <span>Project</span>
      </h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={OnlineRadioPicture} className="image" />
          <div className="portfolio-layer">
            <h4 className="title">Online Radio</h4>
            <p className="description">
              This is a website that allows you to listen radio online. Its
              display top 30 radio stations from Bulgaria. Website is build with
              React.js.
            </p>
            <a href="https://github.com/nfsmitko/OnlineRadio" target="_blank">
              <i className="link-icon">
                <BiLinkExternal></BiLinkExternal>
              </i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={NewsWebsitePicture} className="image" />
          <div className="portfolio-layer">
            <h4 className="title">News Website</h4>
            <p className="description">
              This is news website. The code is written on React.js for frondend
              and ASP.NET Core API for beckend.
            </p>
            <a href="https://github.com/nfsmitko/News-App" target="_blank">
              <i className="link-icon">
                <BiLinkExternal></BiLinkExternal>
              </i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={WeatherAppPicture} className="image" />
          <div className="portfolio-layer">
            <h4 className="title">Weather App</h4>
            <p className="description">
              This is Weather App for the current time weather. The code is
              written on React.js for frondend and ASP.NET Core API for backend.
            </p>
            <a href="https://github.com/nfsmitko/Weather-App" target="_blank">
              <i className="link-icon">
                <BiLinkExternal></BiLinkExternal>
              </i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={GameForumPicture} className="image" />
          <div className="portfolio-layer">
            <h4 className="title">Game Forum</h4>
            <p className="description">
              This is siple web forum for games. Its build with ASP.NET Core MVC
              and for data base MSSQL. Users can make new posts, coments and
              also can like and dislike the coments.
            </p>
            <a href="https://github.com/nfsmitko/GameForum" target="_blank">
              <i className="link-icon">
                <BiLinkExternal></BiLinkExternal>
              </i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
