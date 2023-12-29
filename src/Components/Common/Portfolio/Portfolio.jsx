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
          <img src={OnlineRadioPicture} className="image" alt="Online Radio" />
          <div className="portfolio-layer">
            <h4 className="title">Online Radio</h4>
            <p className="description">
            This is a website that allows you to listen to the top 30 radios in Bulgaria. The code is written in React.JS.
            </p>
            <a
              href="https://github.com/nfsmitko/OnlineRadio"
              target="_blank"
              rel="noreferrer"
            >
              <i className="link-icon">
                <BiLinkExternal></BiLinkExternal>
              </i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={NewsWebsitePicture} className="image" alt="News website" />
          <div className="portfolio-layer">
            <h4 className="title">News Website</h4>
            <p className="description">
            This is a website that displays top news in a given category. The code is written in React.JS for the frontend, and for the backend, I use ASP.NET Core API.
            </p>
            <a
              href="https://github.com/nfsmitko/News-App"
              target="_blank"
              rel="noreferrer"
            >
              <i className="link-icon">
                <BiLinkExternal></BiLinkExternal>
              </i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={WeatherAppPicture} className="image" alt="Weather app" />
          <div className="portfolio-layer">
            <h4 className="title">Weather App</h4>
            <p className="description">
            This is a website that displays the current weather for a specified city. The code is written in React.JS for the frontend, and for the backend, I use ASP.NET Core API.
            </p>
            <a
              href="https://github.com/nfsmitko/Weather-App"
              target="_blank"
              rel="noreferrer"
            >
              <i className="link-icon">
                <BiLinkExternal></BiLinkExternal>
              </i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={GameForumPicture} className="image" alt="Game forum" />
          <div className="portfolio-layer">
            <h4 className="title">Game Forum</h4>
            <p className="description">
            This is an online forum for video games, and the project is written using the MVC pattern. Users can like and dislike comments. I use MSSQL for the database.
            </p>
            <a
              href="https://github.com/nfsmitko/GameForum"
              target="_blank"
              rel="noreferrer"
            >
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
