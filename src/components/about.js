import React from "react";

const About = () => {
  return (
    <section className="w-full mx-auto min-h-custom-content flex flex-col justify-center bg-[#fff]">
      <div className="w-full xl:w-[1200px] px-4 py-5 flex flex-col items-center gap-10">
        <h1 className="text-[#ff4d71] text-4xl font-bold">About</h1>
        <div>
          <div className="flex flex-col gap-7">
            <h3 className="font-bold text-2xl">Hi, I'm Nisha Sharma!</h3>
            <p className="text-xl">
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
