import React from "react";
import MySideBar from "../components/SideBar/MySideBar";
import AboutMeCont from "../components/AboutMeCont/AboutMeCont";
import MySideBarAboutMe from "../components/SideBar/MySideBarAboutMe ";

const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="relative z-20">
          <MySideBarAboutMe />
        </div>
        <div className="ml-[20%]">
          <AboutMeCont />
        </div>
      </div>
      <div className=" md:hidden h-screen w-full flex justify-center items-center">
        MobileSupport soon :3 (about me)
      </div>
    </>
  );
};

export default page;
