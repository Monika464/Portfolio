import React from "react";
import photo from "../assets/moje-foto.png";

const AboutMe = () => {
  return (
    <div className="h-screen w-screen bg-gray-50 p-4">
      <div className="w-full sm:w-2/3 lg:w-1/2 bg-white shadow-lg rounded-lg p-6 text-left mt-8 mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">About me</h1>

        <img src={photo} className="w-20"></img>

        <p className="text-gray-700 leading-relaxed mt-3">
          Hi, I’m Monika. I’ve been programming for several years, primarily in
          the field of web applications. My experience includes around two years
          of working with React and TypeScript, as well as utilizing Firebase.
          Recently, I’ve been focusing on expanding my skills in Node.js and
          Next.js. I aim to specialize in backend development, though I’m open
          to working on full-stack applications with React or Next.js. I’m
          seeking a team or project where I can grow as a backend developer
          while contributing to cohesive, full-stack solutions when needed.
          Clear goals, healthy communication, and a collaborative environment
          that brings satisfaction to all parties are essential to me.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
