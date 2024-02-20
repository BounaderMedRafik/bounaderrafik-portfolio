"use client";
import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const Articles = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [counter, setCounter] = useState(12);
  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      setCounter(counter + 1);
    }
  };
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
              <button
                disabled={isClicked}
                onClick={handleClick}
                className={`p-2 items-center justify-center flex gap-1 border rounded-full cursor-pointer hover:opacity-75 hover:-translate-y-0.5 transition-all  ${
                  isClicked ? "bg-red-100 text-red-500" : ""
                }`}
              >
                <FaHeart />
                <div className="text-xs">{counter}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
