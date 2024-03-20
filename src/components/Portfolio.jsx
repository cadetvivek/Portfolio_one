import React from "react";
import Generics from "../assets/portfolio/Generics.png";
import Reactmeal from "../assets/portfolio/Reactmeal.png";
import expenseTracker from "../assets/portfolio/expenseTracker.png";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
//i have to need overhere to add my project git link and netlify link
// 1:22 minit video if you want to learn more .
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Generics,
    },
    {
      id: 2,
      src: Reactmeal,
    },
    {
      id: 3,
      src: expenseTracker,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    
    {
      id: 6,
      src: reactWeather,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full
   text-white md:h-screen"
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
            Portfolio
          </p>
          <p className="py-6">Explore my idea and thoughts here</p>
          <p>Working part.👇👇</p>

        </div>
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
       px-12 sm:px-0"
        >
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200
         hover:scale-105" 
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200
         hover:scale-105"
                >
                  
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;