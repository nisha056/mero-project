import { Github, Link, Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import React, { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    document.title = "Resume | Nisha Sharma";
  }, []);
  return (
    <div className="w-full min-h-screen p-5 bg-white">
      <div className="w-[900px] p-4 mx-auto border-y-8 border-green-500">
        <div className="py-5 flex justify-between">
          <div className="w-1/2">
            <h1 className="uppercase text-5xl font-medium tracking-wide">
              Nisha Sharma
            </h1>
            <h3 className="uppercase text-2xl italic pt-3 font-normal text-green-400">
              Computer Engineer
            </h3>
          </div>
          <div className="w-[310px] text-base leading-tight">
            <div className="flex gap-3 items-center py-1">
              <Mail size={18} />
              <div className="flex flex-col text-left">
                <a
                  href="mailto:nisha.sharma01789@gmail.com"
                  className="underline"
                >
                  nisha.sharma01789@gmail.com
                </a>
                <a
                  href="mailto:075bct022.bipin@pcampus.edu.np"
                  className="underline"
                >
                  075bct056.nisha@pcampus.edu.np
                </a>
              </div>
            </div>
            <div className="flex gap-3 items-center py-1">
              <Github size={18} />
              <div className="flex flex-col text-left">
                <a
                  href="https://github.com/nisha056"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github/nisha056
                </a>
              </div>
            </div>
            <div className="flex gap-3 items-center py-1">
              <Linkedin size={18} />
              <div className="flex flex-col text-left">
                <a
                  href="https://www.linkedin.com/in/nisha-sharma-3419291a8/"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin/nisha-sharma
                </a>
              </div>
            </div>
            <div className="flex gap-3 items-center py-1">
              <Link size={18} />
              <div className="flex flex-col text-left">
                <a
                  href="https://sharmanisha.com.np"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sharmanisha.com.np
                </a>
              </div>
            </div>
            <div className="flex gap-3 items-center py-1">
              <PhoneCall size={18} />
              <div className="flex flex-col text-left">9840762473</div>
            </div>
            <div className="flex gap-3 items-center py-1">
              <MapPin size={18} />
              <div className="flex flex-col text-left">Lalitpur, Nepal</div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <h2 className=" italic text-xl font-bold text-freen-400 mb-1 border-b-2 border-green-300">
            Skills
          </h2>
          <div className="border-b-2 border-[#e7e7e7] flex gap-1 items-center">
            <h3 className="text-sm italic font-bold  w-[100px]">
              Programming :
            </h3>
            <p className="text-sm">C, C++, Java, Python, Javascript</p>
          </div>
          <div className="border-b-2 border-[#e7e7e7] flex gap-1 items-center">
            <h3 className="text-sm italic font-bold  w-[100px]">General :</h3>
            <p className="text-sm">HTML, CSS</p>
          </div>
          <div className="border-b-2 border-[#e7e7e7] flex gap-1 items-center">
            <h3 className="text-sm italic font-bold  w-[100px]">Framework :</h3>
            <p className="text-sm">Django, React</p>
          </div>
          {/* <div className="border-b-2 border-[#e7e7e7] flex gap-1 items-center">
            <h3 className="text-sm italic font-bold w-[100px]">OS :</h3>
            <p className="text-sm">Windows, Linux</p>
          </div> */}
          <div className="border-b-2 border-[#e7e7e7] flex gap-1 items-center">
            <h3 className="text-sm italic font-bold w-[100px]">
              Soft Skills :
            </h3>
            <p className="text-sm">
              Leadership, Public Speaking, Communication
            </p>
          </div>
        </div>
        <div className="py-5">
          <h2 className=" italic text-xl font-bold mb-1 border-b-2 border-green-300">
            Work Experience
          </h2>
          <div className="border-b-2 border-[#e7e7e7] py-2">
            <div className="flex justify-between">
              <h3 className="text-base font-bold">Programiz</h3>
              <h3 className="text-base font-medium">August 2023 - Present</h3>
            </div>
            <p className="text-sm font-bold">Technical Content Writer</p>
            {/* <p className="text-sm">
              Description Here
            </p> */}
          </div>
          <div className="border-b-2 border-[#e7e7e7] py-2">
            <div className="flex justify-between">
              <h3 className="text-base font-bold">Gritfeat Solutions</h3>
              <h3 className="text-base font-medium">May 2023 - July 2024</h3>
            </div>
            <p className="text-sm font-bold">Frontend Intern</p>
            <p className="text-sm">
              Completed three months internship from Gritfeat Solutions,
              Kirtipur
            </p>
          </div>
          <div className="border-b-2 border-[#e7e7e7] py-2">
            <div className="flex justify-between">
              <h3 className="text-base font-bold">LOCUS, IOE Pulchowk</h3>
              <h3 className="text-base font-medium">2023 - 2024</h3>
            </div>
            <p className="text-sm font-bold">Media and PR Manager</p>
            <p className="text-sm">
              Successfully organized LOCUS 2023, 19th National Technological
              festival
            </p>
          </div>
        </div>
        <div className="py-5">
          <h2 className=" italic text-xl font-bold mb-1 border-b-2 border-green-300">
            Education
          </h2>
          <div className="border-b-2 border-[#e7e7e7] py-2">
            <div className="flex justify-between">
              <h3 className="text-base font-bold">
                Bachelor of Computer Engineering
              </h3>
              <h3 className="text-base font-medium">2018 - 2023</h3>
            </div>
            <p className="text-sm font-bold">
              Central Campus, IOE Pulchowk, Tribhuwan University
            </p>
            <p className="text-sm">Percentage: 79.56</p>
          </div>
          <div className="border-b-2 border-[#e7e7e7] py-2">
            <div className="flex justify-between">
              <h3 className="text-base font-bold">+2 in Science</h3>
              <h3 className="text-base font-medium">2016 - 2018</h3>
            </div>
            <p className="text-sm font-bold">Aroma College, Chitwan</p>
            <p className="text-sm">GPA: 3.79</p>
          </div>
          <div className="border-b-2 border-[#e7e7e7] py-2">
            <div className="flex justify-between">
              <h3 className="text-base font-bold">SLC</h3>
              <h3 className="text-base font-medium">2017</h3>
            </div>
            <p className="text-sm font-bold">
              Kumarwarti English Boarding School, Nawalpur
            </p>
            <p className="text-sm">GPA: 3.9</p>
          </div>
        </div>
        <div className="py-5">
          <h2 className=" italic text-xl font-bold mb-1 border-b-2 border-green-300">
            Awards
          </h2>
          <div className="border-b-2 border-[#e7e7e7] py-2">
            <h3 className="text-base font-medium">
              Scholarship in Pulchowk Campus (Regular)
            </h3>
            <h3 className="text-base font-medium">
              Golden Jubilee Scholarship
            </h3>
            <h3 className="text-base font-medium">NEB Topper in grade 11</h3>
            <h3 className="text-base font-medium">District topper in SLC</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
