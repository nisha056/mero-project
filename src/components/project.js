import React from "react";

const Project = (props) => {
  return (
    <section className="w-full mx-auto min-h-custom-content flex flex-col justify-center bg-[#fff]">
      <div className="w-full xl:w-[1200px] px-4 py-5 flex flex-col items-center gap-8">
        <h1 className="text-[#ff4d71] text-4xl font-bold">Projects</h1>
        <p className="text-xl">Here are a few past projects I've worked on.</p>
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
