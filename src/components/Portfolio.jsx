import React from "react";
import Generics from "../assets/portfolio/Generics.png";
import Reactmeal from "../assets/portfolio/Reactmeal.png";
import expenseTracker from "../assets/portfolio/expenseTracker.png";
import gymWebsite from "../assets/portfolio/gymWebsite.png";
import Portfolio_website from "../assets/portfolio/Portfilio_website.png"
import Villas from "../assets/portfolio/Villas.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Generics,
      demoLink: "https://delightful-cassata-3db12a.netlify.app/",
      codeLink: "https://github.com/cadetvivek/Building-Ecommerce--all-project",
    },
    {
      id: 2,
      src: Reactmeal,
      demoLink: "https://kaleidoscopic-speculoos-8feded.netlify.app/",
      codeLink: "https://github.com/cadetvivek/Restaurant-app",
    },
    {
      id: 3,
      src: expenseTracker,
      demoLink: "https://stirring-mochi-97d67c.netlify.app/login",
      codeLink: "https://github.com/cadetvivek/Expense-Tracker-premium1",
    },
    {
      id: 4,
      src: gymWebsite,
      demoLink: "https://funny-stardust-a6d056.netlify.app/",
      codeLink: "https://github.com/cadetvivek/GYM-WEBSITE/tree/master",
      
    },
    {
      id: 5,
      src: Portfolio_website,
      demoLink: "https://vermillion-croissant-aa8666.netlify.app/",
      codeLink: "https://github.com/cadetvivek/Portfolio_one",
    },
    {
      id: 6,
      src: Villas,
      demoLink: "https://grand-cascaron-ba93e1.netlify.app/",
      codeLink: "https://github.com/cadetvivek/Luxury-Villas",
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white mt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Explore my ideas and thoughts here</p>
          <p>Working part.👇👇</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
