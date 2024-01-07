import React, { useState } from "react";

const Project = (props) => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h1>Project</h1>
        <p>Here are a few past projects I've worked on.</p>
        <div className="project-cards">
          <div className="project-card">
            <div className="background-image image1"></div>
            <div className="card-content">
              <p>
                Fully flexible and responsive web app for e-commerce website.
              </p>
            </div>
          </div>
          <div className="project-card">
            <div className="background-image image2"></div>
            <div className="card-content">
              <p>Fully flexible and responsive web app for medical website.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="background-image image3"></div>
            <div className="card-content">
              <p>Fully flexible and responsive web app for academic website.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="background-image image4"></div>
            <div className="card-content">
              <p>Fully flexible and responsive mobile app.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="background-image image5"></div>
            <div className="card-content">
              <p>Fully flexible and responsive design website.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="background-image image6"></div>
            <div className="card-content">
              <p>Fully flexible and responsive web application.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
