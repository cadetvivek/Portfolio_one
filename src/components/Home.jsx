// import React from "react";

// import HeroImage from "../assets/heroImage.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
// import { useTypewriter } from "react-simple-typewriter";

// const Home = () => {
//   const [typeEffect] = useTypewriter({
//     words: ["Full Stack Developer","Frontend developer", "Backend developer"],
//     loop: {},
//     typeSpeed: 150,
//     delaySpeed: 100,
//   });

//   return (
//     <div
//       name="home"
//       className="h-screen w-full bg-gradient-to-b
//      from-black via-black to-gray-800"
//     >
//       <div
//         className="max-w-screen-xl  mx-auto flex flex-col
//     items-center justify-center h-full px-4 md:flex-row "
//       >
//         <div className="flex flex-col justify-center h-full">
//           {/* <h2 className="text-4xl sm:text-7xl font-bold text-white"> */}
//           <h2 className="text-5xl font-bold text-white">
//             I'm a
//             <span className="ml-5 text-amber-600 text-3xl">{typeEffect}</span>
//           </h2>

//           <p className="text-gray-500 py-4 max-w-md mx-auto">
//             Welcome to Vivek's Portfolio I'm Vivek, a Full Stack Web Developer
//             with expertise in both front-end and back-end technologies.
//           </p>
//           <div>
//             {/* this is a button i have change into the link for scrolling */}
//             <Link
//               to="portfolio"
//               smooth
//               duration={500}
//               className="group text-white w-fit px-6 py-3 my-2 flex items-center
//              rounded-md bg-orange-600 to-blue-500 cursor-pointer"
//             >
//               Portfolio
//               <span className="group-hover:rotate-90 duration-300">
//                 <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
//               </span>
//             </Link>
//           </div>
//         </div>
//         <div className="p-20">
//           <img
//             src={HeroImage}
//             alt="my profile"

//             // className="rounded-2xl mx-auto w-1/2"
//             className="rounded-2xl mx-auto w-full md:max-w-1/2"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// // here this new code i have make changes

import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
    loop: {},
    typeSpeed: 150,
    delaySpeed: 100,
  });

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div
        className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row md:gap-10"
      >
        {/* Left Content */}
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          {/* Fixed Width Heading Area */}
          <div className="w-full sm:w-4/5 md:w-[24rem]">
            <h2 className="text-4xl sm:text-6xl font-bold text-white">
              I'm a
              <span className="ml-3 text-amber-600 text-3xl sm:text-5xl">
                {typeEffect}
              </span>
            </h2>
          </div>

          <p className="text-gray-500 py-4 max-w-md mx-auto md:mx-0">
            Welcome to Vivek's Portfolio. I'm Vivek, a Full Stack Web Developer
            with expertise in both front-end and back-end technologies.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center
              rounded-md bg-orange-600 cursor-pointer hover:bg-orange-700 transition duration-300"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="mt-10 md:mt-0">
          <img
            src={HeroImage}
            alt="My profile"
            className="rounded-2xl mx-auto w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
