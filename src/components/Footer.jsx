import React from "react";

// icons
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="items-center justify-between text-center sm:flex">
          <h1>HB Travel.</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
        <div className="flex justify-between ">
          <ul>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className="text-right">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
