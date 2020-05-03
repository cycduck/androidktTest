import React, { Component } from "react";
import "./App.scss";
import linkedinIcon from "./asset/icon/linkedin.svg";
import gitIcon from "./asset/icon/github-black.svg";
import twitterIcon from "./asset/icon/twitter.svg";

export default class App extends Component {
  render() {
    return (
      <section className="landing">
        <div className="landing__hero">
          <div className="landing__title-side">
            <div>
              <h1 className="landing__title">Kelly K Ho</h1>
              <p className="landing__tagline">a cyclist developer</p>
              <div className="landing__link">
                <a className="landing__a" href="https://twitter.com/KawaHaraPhotos">
                  <img className="landing__icon" src={twitterIcon} alt="Twitter" />
                </a>
                <a className="landing__a" href="https://www.linkedin.com/in/kellykho/">
                  <img className="landing__icon" src={linkedinIcon} alt="Linkedin" />
                </a>
                <a className="landing__a" href="https://github.com/cycduck">
                  <img className="landing__icon" src={gitIcon} alt="Github" />
                </a>
              </div>
            </div>
  
            <div className="landing__divider" />
  
            <div className="landing__project-side">
              <h2 className="landing__section">projects</h2>
              <ul className="landing__ul">
                <li className="landing__li">
                  <a className="landing__a" href="https://github.com/cycduck/ttc">
                    Real time transit map
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
