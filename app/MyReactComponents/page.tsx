import React from "react";

import { FaReact } from "react-icons/fa";

const page = () => {
  return (
    <div className="  w-3/4 bg-[url('/ReactCompHeroBGPNG.png')] bg-cover bg-left h-screen  p-5 flex items-start justify-center flex-col">
      <div className="text-5xl font-black flex items-center gap-2 ">
        <FaReact />
        React components
      </div>
      <div className="text-sm font-normal w-1/2 mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
        quibusdam? Tempore id debitis dolorem necessitatibus.
      </div>
    </div>
  );
};

export default page;
