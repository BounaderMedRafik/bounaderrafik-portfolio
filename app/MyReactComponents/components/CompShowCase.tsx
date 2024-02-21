"use client";
import React from "react";
import { HiHashtag } from "react-icons/hi";

const CompShowCase = ({ Title, Desc, children }: any) => {
  return (
    <>
      <div className=" p-5 bg-red-100 w-full">
        <div className=" border py-5 bg-white rounded-md">
          <div className="p-6">
            <div className="text-4xl font-bold flex items-center gap-2">
              <HiHashtag />
              {Title}
            </div>
            <div className="w-full mx-6 h-0.5 bg-gray-50 my-4"></div>
            <div className="text-xs w-3/4 px-6">{Desc}</div>
            <div className="w-full mx-6 h-0.5 bg-gray-50 my-4"></div>
            <div className="w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompShowCase;
