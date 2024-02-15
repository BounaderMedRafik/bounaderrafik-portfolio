import React from "react";
import MySideBar from "../components/SideBar/MySideBar";
import AboutMeCont from "../components/AboutMeCont/AboutMeCont";

const page = () => {
  return (
    <div>
      <div className="relative z-20">
        <MySideBar />
      </div>
      <div className="ml-[20%]">
        <AboutMeCont />
      </div>
    </div>
  );
};

export default page;
