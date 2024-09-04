"use client";
import { FiLogIn } from "react-icons/fi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  // State to track hover status of the theme button
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="px-[100px] flex gap-20 justify-center pt-8">
      <div className="flex">
        <div>Logo</div>
        <h3>FX miners</h3>
      </div>
      <div>
        <ul className="flex gap-12 pt-3 font-bold">
          <li>Home</li>
          <li>Mentorship</li>
          <li>Signals</li>
          <li>Minor AI</li>
          <li>About us</li>
        </ul>
      </div>
      <div className="flex flex-row gap-10">
        <button className="w-24 h-10 bg-blue-500 text-white rounded-lg">
          Log in
        </button>
        <button className="w-10 h-10 border-gray-700 border-[1.5px] rounded-md flex items-center justify-center hover:bg-blue-500 hover:border-0 hover:text-white">
          <FiLogIn />
        </button>
        {/* Icon button with hover effect */}
        <button
          className="w-10 h-10  border-gray-700 border-[1.5px] rounded-md flex items-center justify-center hover:bg-blue-500 hover:border-0 hover:text-white"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
