import React from "react";

const SelectsCard = ({ bg, text }) => {
  return (
    <div className="relative">
      <img className="object-cover w-full h-full" src={bg} alt="/" />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30">
        <p className="absolute text-2xl font-bold text-white left-4 bottom-4">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SelectsCard;
