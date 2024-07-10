const Experience = () => {
  return (
    <section
      className="w-full mx-auto min-h-custom-content flex flex-col justify-center py-5"
      style={{
        background: "radial-gradient(circle, #a7a5c6, #6d8a96, #8797b2)",
      }}
    >
      <div className="w-full xl:w-[1200px] px-4 flex flex-col items-center gap-10">
        <h1 className="text-[#000] text-4xl font-bold">Experience</h1>
        <div className="experience-cards">
          <div className="experience-card">
            <div className="experience-content">
              <img
                src="https://img.icons8.com/?size=80&id=IZaAaqvd1lkp&format=png"
                alt=""
              />
              <h3> Content Writer</h3>
              <p>
                I work in designing course structure, writing the course,
                reviewing it and finalizing the articles as well as blogs.
              </p>
              <div className="experience-tools">
                <p>Writing tools</p>
                <ul>
                  <li>Google Docs</li>
                  <li>CWS</li>
                  <li>Grammarly</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="experience-card">
            <div className="experience-content">
              <img
                src="https://img.icons8.com/?size=80&id=yohRjTe8K5Gv&format=png"
                alt=""
              />
              <h3>Developer</h3>
              <p>
                I love to code things from scratch, and enjoy bringing new ideas
                to life. I bascially work in front-end development.
              </p>
              <div className="experience-tools">
                <p>Dev tools</p>
                <ul>
                  <li>VS Code</li>
                  <li>Vercel</li>
                  <li>Git</li>
                  <li>Terminal</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="experience-card">
            <div className="experience-content">
              <img
                src="https://img.icons8.com/?size=80&id=cG8eSLI7QxLd&format=png"
                alt=""
              />
              <h3>Learner</h3>
              <p>
                I am very dedicated to continuous learning, exploring brand new
                concepts, and enhancing my skills.
              </p>
              <div className="experience-tools">
                <p>Learning tools</p>
                <ul>
                  <li>Online Courses</li>
                  <li>Books</li>
                  <li>Workshops</li>
                  <li>Practice Projects</li>
                  <li>Mentorship</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
