import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center" id="home">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hello, Namaste <span>🙏</span>
            <span className="text-[#5651e5]">I&apos;m Sagar</span>
          </h1>
          <h1 className="py-2 text-gray-700">Cloud Architect</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m an accomplished Cloud Architect with over 8 years of
            experience in designing, implementing, and managing innovative
            cloud-based solutions. With a strong track record of successfully
            driving digital transformation initiatives and improving operational
            efficiency, I&apos;ve consistently helped businesses scale and
            achieve their technology goals. Explore my portfolio to discover my
            skills, projects, and contributions to the ever-evolving world of
            cloud computing.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              href="https://www.linkedin.com/in/sagar-bakshi/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              href="https://github.com/sagar-bakshi"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              href="mailto:sagarbakshi@outlook.com"
            >
              <AiOutlineMail />
            </a>
            <a
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              href="#contact"
            >
              <BsFillPersonLinesFill />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
