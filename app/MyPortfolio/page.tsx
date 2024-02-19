"use client";
import { HiPaintBrush } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaStarOfLife } from "react-icons/fa";

import React from "react";
const page = () => {
  return (
    <Tabs className="flex w-full h-screen">
      <TabsList className="w-[20%] h-full flex flex-col bg-[url('/MyAboutMeSecBg.jpg')] bg-cover  bg-center   px-5 py-52 border-r">
        <div className="text-xl flex gap-3 items-center font-black uppercase">
          <FaStarOfLife />
          Category
        </div>
        <TabsTrigger
          value="design"
          className=" cursor-pointer bg-transparent w-full flex gap-4 mt-5 rounded-md justify-start text-sm items-center py-1 px-2 hover:bg-gray-100"
        >
          <HiPaintBrush />
          Design
        </TabsTrigger>
        <TabsTrigger
          value="webdev"
          className=" cursor-pointer w-full bg-transparent text-sm flex gap-4 rounded-md justify-start items-center py-1 px-2 hover:bg-gray-100"
        >
          <CgWebsite />
          Web Developpment
        </TabsTrigger>
      </TabsList>

      <TabsContent className="flex w-full h-screen" value="design">
        <TabsList className="w-[20%] h-full flex flex-col bg-[url('/MyAboutMeSecBg.jpg')] bg-cover  bg-center   px-5 py-52 border-r">
          <div className="text-xl flex gap-3 items-center font-black uppercase">
            <HiPaintBrush />
            Design
          </div>
          <TabsTrigger
            value="design"
            className=" cursor-pointer bg-transparent w-full flex gap-4 mt-5 rounded-md justify-start text-sm items-center py-1 px-2 hover:bg-gray-100"
          >
            I-Tech Logo
          </TabsTrigger>
          <TabsTrigger
            value="webdev"
            className=" cursor-pointer w-full bg-transparent text-sm flex gap-4 rounded-md justify-start items-center py-1 px-2 hover:bg-gray-100"
          >
            <CgWebsite />
            Web Developpment
          </TabsTrigger>
        </TabsList>
      </TabsContent>
      <TabsContent value="webdev">clicked webdev</TabsContent>
    </Tabs>
  );
};

export default page;
