import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGit, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Jaydeep wakade</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        A MERN Stack Developer specializes in building full-stack web applications using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. They are skilled in designing and developing both frontend and backend components, ensuring seamless integration between the client and server.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9579022411</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">jaydeepwakade123@.gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
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
    </div>
  );
}

export default ContactLeft