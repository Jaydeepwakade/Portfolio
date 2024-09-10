import React from 'react'
import Title from '../layouts/Title'
import ProManage from "../../assets/images/projects/ProManage.png";
import Superhero from "../../assets/images/projects/Superhero.png";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="ProManage"
          des="A ProManage app built with the MERN stack (MongoDB, Express.js, React, Node.js), featuring user authentication, task creation, profile updates, task analytics, state management, filtering, and member assignment."
          src={ProManage}
          githublink={'https://github.com/Jaydeepwakade/Taskmanager'}
       livelink={"https://taskmanager-alpha-gray.vercel.app"}
        />
        <ProjectsCard
          title="Super hero Resume"
          des="This project is a unique and visually appealing resume designed with a superhero theme, built using HTML and CSS"
          src={Superhero}
          githublink={'https://github.com/Jaydeepwakade/Super_hero_resume'}
          livelink={"https://superheroresume1.netlify.app"}
        />

      </div>
    </section>
  );
}

export default Projects