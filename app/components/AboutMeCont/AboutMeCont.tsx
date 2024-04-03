"use client";
import React from "react";
import Image from "next/image";
import BeachPic from "@/public/IMG_20230927_155014.jpg";
import { IoMdPerson } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import Spline from "@splinetool/react-spline";

const AboutMeCont = () => {
  return (
    <div className="h-screen flex items-center justify-center overflow-hidden bg-cover bg-top">
      <div className=" z-20 pointer-events-none ml-2 w-2/3 h-screen relative flex justify-center items-start flex-col">
        <Spline
          className="blur-md z-10 absolute top-0 left-0 "
          scene="https://prod.spline.design/Gh3oB6DR49RJnUtf/scene.splinecode"
        />
        <div className="w-2/3 text-gray-900 text-6xl flex-col font-black z-20  flex justify-center items-start uppercase">
          <IoMdPerson className="z-20" />
          Let&apos;s Talk About Me
        </div>
        <div className=" text-sm font-normal text-gray-900 w-2/3 z-20 p-2 bg-gray-100/75 backdrop-blur-md border rounded-md border-slate-400">
          I&apos;m{" "}
          <span className="text-blue-700 font-bold"> Bounader Med Rafik</span>,
          a 19-year-old designer and web developer. I&apos;ve spent four years
          working on personal design projects, fueling my passion for
          creativity. In addition, I have two years of experience in web
          development. When I&apos;m not immersed in pixels and code, you can
          find me hiking in nature, finding inspiration in the great outdoors.
          I&apos;m excited to leave my mark in the world of design and web
          development! :)))
        </div>

        <div className="font-semibold mt-2 z-20">
          • My Exprience Stack :
          <div className="flex items-center justify-items gap-2 p-2 bg-slate-100/10 backdrop-blur-sm border-slate-400 rounded-md border mt-2">
            <SiTailwindcss
              className="text-blue-400 hover:opacity-75 transition-all "
              size={25}
            />
            <FaHtml5
              className="text-[#ea580c] hover:opacity-75 transition-all "
              size={25}
            />
            <IoLogoJavascript
              className="text-[#fbbf24] hover:opacity-75 transition-all "
              size={25}
            />
            <SiNextdotjs
              className="text-gray-800 hover:opacity-75 transition-all "
              size={25}
            />
            <FaReact
              className="text-[#14b8a6] hover:opacity-75 transition-all "
              size={25}
            />
            <SiAdobephotoshop
              className=" text-blue-900 hover:opacity-75 transition-all "
              size={25}
            />
            <SiFigma
              className=" text-purple-500 hover:opacity-75 transition-all "
              size={25}
            />
            <SiPrisma
              className=" text-black hover:opacity-75 transition-all "
              size={25}
            />
            <RiSupabaseFill
              className=" text-green-500 hover:opacity-75 transition-all "
              size={25}
            />
          </div>
        </div>
      </div>
      <div className=" w-1/3 ml-auto h-screen border-l">
        <Image
          loading="lazy"
          src={BeachPic}
          className="h-screen object-cover "
          alt="My Picture Of Me In The Beach"
        />
      </div>
    </div>
  );
};

export default AboutMeCont;
