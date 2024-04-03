"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import { SiRobotframework } from "react-icons/si";

const MyHeroSection = () => {
  return (
    <>
      <div className=" bg-cover bg-center">
        <div className="w-full h-screen absolute top-0 left-0 z-10 backdrop-blur-sm">
          <Spline scene="https://prod.spline.design/yPTWQQOqP6L0Se0w/scene.splinecode" />
        </div>
        <div className="relative z-20 pointer-events-none">
          <div className="text-7xl w-full  uppercase font-bold h-screen flex flex-col items-start pl-3 justify-center text-gray-900">
            <div className="w-1/3 font-black">unleash your curiosity</div>
            <div className=" text-base font-normal w-1/3">
              a{" "}
              <span className="font-bold text-red-400">
                designer/developper/editor
              </span>{" "}
              and the one who will put joy into your project:)
              <div className="flex mt-3 gap-1">
                <SiRobotframework size={52} className="text-red-400" />
                <SiRobotframework size={52} className="text-blue-400" />
                <SiRobotframework size={52} className="text-gray-400" />
                <SiRobotframework size={52} className="text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyHeroSection;
