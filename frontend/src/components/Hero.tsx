// Hero Component - Hero.js

import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <div className="gradientBackground min-h-screen">
        <Navbar />
        <div className="flex flex-col md:flex-row justify-center md:px-[100px] px-[20px] pt-20">
          <div className="md:h-[25rem] md:w-1/2 flex flex-col gap-4 items-center justify-center text-center md:text-left">
            <div className="sm:pl-7 pl-5">
              <h1 className="text-3xl font-bold text-white">
                Invest Your Money <br /> With{" "}
                <span className="text-green-400">Higher Return</span>
              </h1>
              <p className="mt-4 text-gray-300">
                Anyone can invest money to different currency to increase their
                earnings by the help of trading through online.
              </p>
            </div>
            <div className="sm:flex-row flex flex-col sm:gap-10 gap-2 mt-6">
              <button className="w-36 h-10 bg-green-500 hover:bg-blue-600 duration-700 text-white rounded">
                Get Started
              </button>
              <button className="w-36 h-10 bg-transparent hover:bg-gray-800 text-white border-white border-[1.5px] duration-700 rounded">
                Watch Video
              </button>
            </div>
          </div>

          <div className="h-full w-1/2 flex justify-center">
            <img
              src="/img1.png"
              alt="Illustration"
              className="object-contain"
            />
          </div>
        </div>
        <footer className="flex justify-center gap-4 mt-10">
          <a href="#" className="text-gray-400">
            Facebook
          </a>
          <a href="#" className="text-gray-400">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400">
            Instagram
          </a>
          <a href="#" className="text-gray-400">
            YouTube
          </a>
          <a href="#" className="text-gray-400">
            Twitter
          </a>
        </footer>
      </div>
    </>
  );
};

export default Hero;
