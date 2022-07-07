import React from "react";

// images
import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Keywest from "../assets/keywest.jpg";

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>All-Inclusive Resorts</h1>
      <p className="py-4">On the Caribbean's Best Beaches</p>
      <div className="grid grid-cols-none md:grid-cols-5 py-4 gap-2 md:gap-4">
      <img src={BoraBora} className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' alt="Destinations Images" />
      <img src={BoraBora2} className='w-full h-full object-cover' alt="Destinations Images" />
      <img src={Maldives} className='w-full h-full object-cover' alt="Destinations Images" />
      <img src={Maldives2} className='w-full h-full object-cover' alt="Destinations Images" />
      <img src={Keywest} className='w-full h-full object-cover' alt="Destinations Images" />
      </div>
    </div>
  );
};

export default Destinations;
