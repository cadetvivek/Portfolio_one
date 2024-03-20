import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800
    to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
            border-gray-500"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-8 lg:mt-20">
        I'm Vivek, a Full Stack Web Developer
        good in both front-end and back-end technologies.
         With 1200+ hours of coding practice,
          450+ hours in Data Structures and Algorithms,
           and 100 hours in soft skill development, 
           I excel in crafting efficient solutions. 
           I completed a course at Sharpener in Bengaluru,
            Karnataka, further enhancing my skills.
             Explore my projects to see how I turn ideas 
             into dynamic web solutions.
        </p>
       
      </div>
    </div>
  );
};

export default About;
