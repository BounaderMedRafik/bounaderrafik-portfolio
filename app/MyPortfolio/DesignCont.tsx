import React from "react";
import { RiBrush2Fill } from "react-icons/ri";
import ProjectItem from "./ProjectItem";

const DesignCont = () => {
  return (
    <>
      <div className="w-full h-52 bg-[url('/PortfolioDesignBG.jpg')] bg-cover bg-center flex relative backdrop-blur-md  justify-center items-center">
        <div className="flex relative gap-3 text-7xl font-black uppercase px-2 py-1 bg-white/10 backdrop-blur-md text-gray-100 border-white/10  rounded-md border">
          Design <RiBrush2Fill />
        </div>
        <div className="text-[9px] text-gray-300/50 absolute top-1 left-1">
          Background by : @aaronmahlke
        </div>
      </div>
      <div>
        <div className="w-full">
          <ProjectItem />
        </div>
      </div>
    </>
  );
};

export default DesignCont;
