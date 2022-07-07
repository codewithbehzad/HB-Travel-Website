import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handelNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="absolute z-10 flex items-center justify-between w-full h-20 px-4 text-white">
      <div>
        <h1 onClick={handelNav} className={logo ? "hidden" : "block"}>
          HB Travel.
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-2 cursor-pointer" size={20} />
        <BsPerson className="cursor-pointer" size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handelNav} className="z-10 cursor-pointer md:hidden">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handelNav}
        className={
          nav
            ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex-col text-black"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>HB Travel.</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
