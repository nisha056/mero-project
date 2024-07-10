import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Home = () => {
  const image1 = require("../Image/Nisha.jpg");

  return (
    <section
      className="w-full mx-auto min-h-custom-content flex flex-col justify-center"
      style={{
        background: "radial-gradient(circle, #a7a5c6, #6d8a96, #8797b2)",
      }}
    >
      <div className="w-full xl:w-[1200px] px-4 flex flex-col items-center">
        <div className="flex flex-col gap-6 pb-7">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">
              Technical Content Writer, Learner and Frontend Developer
            </h1>
          </div>
          <p className="text-xl">
            On a mission to perceive the world through simple words.
          </p>
        </div>
        <div>
          <div className="w-64 h-64 rounded-full p-2 bg-[#d4d3d3]">
            <img
              className="rounded-full w-full h-full object-cover"
              src={image1}
              alt="Nisha"
            />
          </div>
          <h1 className="text-3xl font-bold py-3">Nisha Sharma</h1>
          <div className="flex flex-row items-center justify-center gap-3">
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://github.com/nisha056"
              className="rounded-lg shadow-sm shadow-slate-600 hover:shadow-slate-900 p-2"
            >
              <Github />
            </a>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.instagram.com/nishasharma_56/"
              className="rounded-lg shadow-sm shadow-slate-600 hover:shadow-slate-900 p-2"
            >
              <Instagram />
            </a>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.facebook.com/happinessineverything"
              className="rounded-lg shadow-sm shadow-slate-600 hover:shadow-slate-900 p-2"
            >
              <Facebook />
            </a>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.linkedin.com/in/nisha-sharma-3419291a8/"
              className="rounded-lg shadow-sm shadow-slate-600 hover:shadow-slate-900 p-2"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
