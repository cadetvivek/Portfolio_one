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
        justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
            border-gray-500"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-5">
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
        <br />
       <p className="text-xl">
       As a Full Stack Web Developer, 
       I'm proficient in both front-end and back-end technologies.
        With over 1200 hours of coding practice and 450+ hours dedicated 
        to mastering Data Structures and Algorithms, 
        I specialize in crafting efficient solutions.
         My commitment extends beyond technical prowess,
          investing 100 hours in soft skill development 
          to ensure effective communication and collaboration.
           I honed my skills further through a course at
            Sharpener in Bengaluru, Karnataka. 
            Explore my projects to witness how I transform ideas
             into dynamic web solutions.
       </p>
      </div>
    </div>
  );
};

export default About;
