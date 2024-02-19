"use client";
import React from "react";
import MySideBar from "../components/SideBar/MySideBar";
import AboutMeCont from "../components/AboutMeCont/AboutMeCont";

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
