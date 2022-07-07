import React from "react";

// components
import SelectsCard from "./SelectsCard";

// images
import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import Keywest from "../assets/keywest.jpg";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 gap-4 lg:grid-cols-3">
      {/* #1 */}
      <SelectsCard bg={BoraBora} text="Bora Bora" />
      <SelectsCard bg={BoraBora2} text="Maldives" />
      <SelectsCard bg={Maldives} text="Antigua" />
      <SelectsCard bg={Maldives2} text="Cozumel" />
      <SelectsCard bg={Maldives3} text="Jamaica" />
      <SelectsCard bg={Keywest} text="Key West" />
    </div>
  );
};

export default Selects;
