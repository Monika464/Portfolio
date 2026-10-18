import React from "react";
import photo from "../assets/moje-foto2.png";

const AboutMe = () => {
  return (
    <div className="h-screen w-screen bg-gray-50 p-4">
      <div className="w-full sm:w-2/3 lg:w-1/2 bg-white shadow-lg rounded-lg p-6 text-left mt-8 mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">About me</h1>

        <img src={photo} className="w-20"></img>

        <p className="text-gray-700 leading-relaxed mt-3">
         Hi, I'm Monika!
I'm a Full Stack Developer with several years of experience in web development, working primarily with JavaScript and TypeScript.
My main technologies include React, Node.js, Express, MongoDB, and TypeScript. I enjoy designing and building complete web applications, from responsive user interfaces to backend APIs, database structures, authentication systems, and integrations with external services.
My most recent project, WandalMT, has allowed me to deepen my experience in full-stack development, including JWT authentication, payment processing with Stripe, cloud storage integration, and backend architecture.
While I enjoy working across the entire application stack, I'm particularly interested in backend development, application security, and designing scalable, maintainable systems.
I'm also exploring emerging technologies, particularly AI-powered applications and workflow automation, and developing my familiarity with tools such as Flowise and Docker.
Beyond technology, I value independent problem-solving, continuous learning, and thoughtful software design. I believe that successful projects depend not only on technical skills but also on clear communication, well-defined goals, and effective collaboration.
I'm open to remote opportunities and interesting projects where I can contribute my experience, continue developing my skills, and work with people who value quality, creativity, and a collaborative approach.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
