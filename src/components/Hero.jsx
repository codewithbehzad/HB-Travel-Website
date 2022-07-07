import React from "react";
import beachVideo from "../assets/beachVid.mp4";

// icons
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="object-cover w-full h-full"
        src={beachVideo}
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/40"></div>
      <div className="absolute top-0 flex flex-col justify-center w-full h-full p-4 text-center text-white">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% location Worldwide</h2>
        <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
          <div>
            <input
              className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none"
              type="text"
              placeholder="Search Destinations"
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
