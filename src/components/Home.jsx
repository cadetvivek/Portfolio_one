import React from "react";

import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Full Stack Developer","Frontend developer", "Backend developer"],
    loop: {},
    typeSpeed: 150,
    delaySpeed: 100,
  });

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b
     from-black via-black to-gray-800"
    >
      <div
        className="max-w-screen-xl  mx-auto flex flex-col
    items-center justify-center h-full px-4 md:flex-row "
      >
        <div className="flex flex-col justify-center h-full">
          {/* <h2 className="text-4xl sm:text-7xl font-bold text-white"> */}
          <h2 className="text-5xl font-bold text-white">
            I'm a
            <span className="ml-5 text-amber-600 text-3xl">{typeEffect}</span>
          </h2>

          <p className="text-gray-500 py-4 max-w-md mx-auto">
            Welcome to Vivek's Portfolio I'm Vivek, a Full Stack Web Developer
            with expertise in both front-end and back-end technologies.
          </p>
          <div>
            {/* this is a button i have change into the link for scrolling */}
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center
             rounded-md bg-orange-600 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="p-20">
          <img
            src={HeroImage}
            alt="my profile"
            // className="rounded-2xl mx-auto w-1/2"
            className="rounded-2xl mx-auto w-full md:max-w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
