import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer", "Full Stack Developer.", "Frontend Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full  
    
    
    
    
    flex flex-col gap-20">
      <div className="flex flex-col  gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl w-full font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize w-96">Jaydeep wakade</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        A MERN Stack Developer specializes in building full-stack web applications using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. They are skilled in designing and developing both frontend and backend components, ensuring seamless integration between the client and server.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner