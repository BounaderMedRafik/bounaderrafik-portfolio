"use client";
import React from "react";
import AboutMeCont from "../components/AboutMeCont/AboutMeCont";
import LoadingpPage from "../components/LoadingpPage";

const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <div>
          <AboutMeCont />
        </div>
      </div>
      <LoadingpPage />
    </>
  );
};

export default page;
