"use client";
import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import MyLikeBtn from "./MyLikeBtn";
import PostCat from "./PostCat";
import Image from "next/image";
import TailwindThumb from "@/public/articles/TailwindThumb.jpg";
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
              <MyLikeBtn />
            </div>
          </div>
          <div className="flex border-b  w-full py-2">
            <div className="flex gap-0.5">
              <PostCat category="tailwind" />
              <PostCat category="nextJS" />
            </div>
          </div>
          <div className="mt-5">
            <div className="text-5xl font-bold font-postHead">
              What is Tailwind?
            </div>
            <div className="flex justify-center items-center">
              <Image
                className="w-full rounded-md shadow-xl h-52 object-cover"
                src={TailwindThumb}
                alt="TailwindThumb"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
