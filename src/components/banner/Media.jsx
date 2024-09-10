import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiJavascript, SiNodedotjs, SiRedux, SiCss3 } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-24 ">
      <div>
        <h1 className="text-base uppercase font-titleFont mb-4">Resume</h1>
        <div>
          <a href="/My_Resume.pdf" download="Resume.pdf">
            <button className="bannerIcon h-16 w-40 text-2xl">
              Resume
            </button>
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <a 
        className='bannerIcon' 
        href='https://www.linkedin.com/in/jaydeepwakade' 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a 
        className='bannerIcon' 
        href='https://github.com/Jaydeepwakade' 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a 
        className='bannerIcon' 
        href='https://x.com/JaydeepWakde' 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
        </div>
      </div>
      <div className="">
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex  gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiJavascript />
          </span>
          <span className="bannerIcon">
            <SiNodedotjs />
          </span>
          <span className="bannerIcon">
            <SiRedux />
          </span>
          <span className="bannerIcon">
            <SiCss3/>
          </span>
         
        </div>
      </div>
    </div>
  );
};

export default Media;
