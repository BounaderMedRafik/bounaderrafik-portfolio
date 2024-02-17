"use client";
import React from "react";
import MySideBar from "../components/SideBar/MySideBar";
import AboutMeCont from "../components/AboutMeCont/AboutMeCont";
import MySideBarAboutMe from "../components/SideBar/MySideBarAboutMe ";

const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <div>
          <AboutMeCont />
        </div>
      </div>
    </>
  );
};

export default page;
