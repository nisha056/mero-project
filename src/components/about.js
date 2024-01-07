import React, { useState } from "react";
import Quote from "./contact";
import Navbar from "./navbar";

const About = (props) => {
  const [quote, setQuote] = useState([
    { title: "Hello", body: "Whats up..............", id: 1 },
    {
      title: "Lorem ipsum dolor sit amet",
      body: "consectetur adipiscing elit",
      id: 2,
    },
  ]);

  return (
    <section id="about" className="about">
      <div className="container">
        <h1>About</h1>
        <div className="about-content">
          <div className="about-text">
            <h3>Hi, I'm Nisha Sharma!</h3>
            <p>
              I'm a Computer Enginner, graduated from Pulchowk Engineering
              Campus. I love to be somehow productive to mankind. I'm quietly
              confident, naturally curious, and perpetually working on improving
              the coding knowledge among people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
