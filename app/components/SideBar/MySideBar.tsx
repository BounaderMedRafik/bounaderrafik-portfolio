"use client";

import React from "react";
import { RxEyeClosed } from "react-icons/rx";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
import { RiReactjsLine } from "react-icons/ri";
import { PiNewspaperFill } from "react-icons/pi";
import { SiOpenlayers } from "react-icons/si";
import { IoMdPerson } from "react-icons/io";
import { TbStarFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const MySideBar = () => {
  return (
    <div className=" flex flex-col flex-auto flex-shrink-0 antialiased  text-gray-800">
      <div className="fixed flex flex-col top-0 left-0 w-[20%] bg-white h-full border-r">
        <Link href="/">
          <div className=" bg-cover bg-right-bottom  flex items-center justify-center h-14 border-b hover:opacity-80 transition-all">
            <div className="font-black flex items-center justify-center gap-4 px-2 bg-white border cursor-default select-none shadow-md pointer-events-none">
              BounaderMedRafik
              <div className="relative flex">
                <RxEyeClosed className="" />
              </div>{" "}
            </div>
          </div>
        </Link>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  • Personal
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/AboutMe"
                className="relative flex flex-row items-center h-11 focus:outline-none  hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 transition-all pr-6"
              >
                <div className="inline-flex justify-center items-center ml-4">
                  <IoMdPerson className="w-5 h-5" />
                </div>

                <span className="ml-2 text-sm tracking-wide truncate">
                  About Me
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/MyResume"
                className="relative flex transition-all flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6"
              >
                <div className="inline-flex justify-center items-center ml-4">
                  <PiNewspaperFill className="w-5 h-5" />
                </div>

                <span className="ml-2 text-sm tracking-wide truncate">
                  Resume
                </span>
                <span className="flex justify-center items-center gap-1 px-2 py-0.5 ml-auto text-xs font-bold tracking-wide text-yellow-500 bg-yellow-50">
                  Updated
                  <MdOutlineTipsAndUpdates />
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/MyPortfolio"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 transition-all pr-6"
              >
                <div className="inline-flex justify-center items-center ml-4">
                  <SiOpenlayers className="w-5 h-5" />
                </div>

                <span className="ml-2 text-sm tracking-wide truncate">
                  Portfolio
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/MyTestimonials"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6 transition-all"
              >
                <div className="inline-flex justify-center items-center ml-4">
                  <BsStars className="w-5 h-5" />
                </div>

                <span className="ml-2 text-sm tracking-wide truncate">
                  Testimonials
                </span>
                <span className="flex justify-center items-center gap-1 px-2 py-0.5 ml-auto text-xs font-bold tracking-wide text-red-500 bg-red-50 ">
                  4.8 <TbStarFilled />
                </span>
              </Link>
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  • Blog
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/MyBlog"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <div className="inline-flex justify-center items-center ml-4">
                  <MdArticle className="w-5 h-5" />
                </div>

                <span className="ml-2 text-sm tracking-wide truncate">
                  Acrticles
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/MyReactComponents"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <div className="inline-flex justify-center items-center ml-4">
                  <RiReactjsLine className="w-5 h-5" />
                </div>

                <span className="ml-2 text-sm tracking-wide truncate">
                  React Components
                </span>
                <span className="px-2 py-0.5 ml-auto text-xs font-bold  tracking-wide text-green-500 bg-green-50 ">
                  New
                </span>
              </Link>
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  • Socials
                </div>
              </div>
            </li>

            <div className="ml-4 text-gray-600">
              <ul className="w-full h-auto flex items-center justify-start gap-2 ">
                <li className="p-2 hover:bg-gray-100 transition-all hover:border-b-2 hover:border-b-slate-400 border-transparent border-b-2">
                  <a href="https://github.com/BounaderMedRafik" target="_blank">
                    <FaGithub className="w-5 h-5" />
                  </a>
                </li>
                <li className="p-2 hover:bg-gray-100 transition-all hover:border-b-2 hover:border-b-blue-400 border-transparent border-b-2">
                  <a
                    href="https://www.linkedin.com/in/bounader-mohamed-rafik-2bb971290/"
                    target="_blank"
                  >
                    <FaLinkedinIn className="w-5 h-5" />
                  </a>
                </li>
                <li className="p-2 hover:bg-gray-100 transition-all hover:border-b-2 hover:border-b-red-400 border-transparent border-b-2">
                  <a
                    href="http://www.youtube.com/@BounaderMohamedRafik"
                    target="_blank"
                  >
                    <FaYoutube className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MySideBar;
