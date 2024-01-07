import Navbar from "./navbar";
const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h1>Experience</h1>
        <div className="experience-cards">
          <div className="experience-card">
            <div className="experience-content">
              <img src="https://img.icons8.com/?size=80&id=IZaAaqvd1lkp&format=png" />
              <h3>Designer</h3>
              <p>I love to create new and innovative designs.</p>
              <div className="experience-tools">
                <p>Design tools</p>
                <ul>
                  <li>Figma</li>
                  <li>Font Awesome</li>
                  <li>Pen & Paper</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="experience-card">
            <div className="experience-content">
              <img src="https://img.icons8.com/?size=80&id=yohRjTe8K5Gv&format=png" />
              <h3>Developer</h3>
              <p>
                I like to develop the designs, love to code things from scratch,
                and enjoy bringing new ideas to life.
              </p>
              <div className="experience-tools">
                <p>Dev tools</p>
                <ul>
                  <li>Vercel</li>
                  <li>Bootstrap</li>
                  <li>Github</li>
                  <li>Terminal</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="experience-card">
            <div className="experience-content">
              <img src="https://img.icons8.com/?size=80&id=cG8eSLI7QxLd&format=png" />
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
          <div className="experience-card">
            <div className="experience-content">
              <img src="https://img.icons8.com/?size=80&id=OBqi6P3ukGoL&format=png" />
              <h3>Coder</h3>
              <p>
                I am very dedicated to coding, exploring new technologies, and
                enhancing my programming skills.
              </p>
              <div className="experience-tools">
                <p>Coding tools</p>
                <ul>
                  <li>IDEs</li>
                  <li>Version Control</li>
                  <li>Code Editors</li>
                  <li>Debugging Tools</li>
                  <li>Code Reviews</li>
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
