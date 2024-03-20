import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import githug from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import firebase from "../assets/firebase.png";
import postman from "../assets/postman.png";
import nodejs from "../assets/nodejs.png";
import mysql from "../assets/mysql.png";
import expressjs from "../assets/expressjs.png";
import mongodb from "../assets/mongodb.png";

function Experience() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    
    {
      id: 8,
      src: githug,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: firebase,
      title: "Firebase",
      style: "shadow-sky-400",
    },
    {
      id: 11,
      src: postman,
      title: "Postman",
      style: "shadow-orange-400",
    },
    {
      id: 12,
      src: nodejs,
      title: "Nodejs",
      style: "shadow-gray-400",
    },
    {
      id: 13,
      src: mysql,
      title: "MySQL",
      style: "shadow-gray-400",
    },
    {
      id: 14,
      src: expressjs,
      title: "Expressjs",
      style: "shadow-gray-400",
    },
    {
      id: 15,
      src: mongodb,
      title: "mongoDB",
      style: "shadow-green-400",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-auto"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
