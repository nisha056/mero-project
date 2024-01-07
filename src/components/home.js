import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGithub,
//   faInstagram,
//   faTwitter,
//   faLinkedin,
// } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const image1 = require("../Image/Nisha.jpg");

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>Designer, Learner and Frontend Developer</h2>
          <p>On a mission to discover my next great adventure.</p>
        </div>
        <div className="hero-media">
          <img className="picture" src={image1} alt="Profile Picture" />
          <h2>Nisha Sharma</h2>
          <div className="social-icons">
            {/* <Link to="">
              <FontAwesomeIcon icon={faGithub} />
            </Link> */}
            {/* <Link to="">
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </Link> */}
            {/* <Link to="">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
