"use client";
import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import MyLikeBtn from "./MyLikeBtn";

const Articles = () => {
  return (
    <div className="w-[60%] mx-auto p-5 border rounded-md ">
      <div>
        <div className="w-full">
          <div className=" w-full flex justify-between items-center   border-b py-3">
            <a href="" target="_blank">
              <div className="flex hover:opacity-80 items-center gap-3 px-4 py-2 rounded-md ">
                <div className=" rounded-full">
                  <BsPersonCircle size={32} />
                </div>
                <div className="text-sm font-semibold ">@Name</div>
              </div>
            </a>
            <div>
              <MyLikeBtn starter="12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
