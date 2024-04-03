import React from "react";
import Image from "next/image";
import PlaceHoldImage from "@/public/IMG_20230927_155014.jpg";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import SkillLangues from "./SkillLangues";
import ResumeBody from "./ResumeBody";
import ResumePFP from "@/public/ResumePFP.jpg";
import LoadingpPage from "../components/LoadingpPage";

const page = () => {
  return (
    <>
      <div className=" w-full justify-center items-center flex h-52 overflow-hidden border-b">
        <div className="w-[30%] relative  flex items-center justify-center">
          <Image
            loading="lazy"
            className="pt-12"
            src={ResumePFP}
            alt="Resume pic"
          />
        </div>
        <div className="w-[70%] h-full flex items-center justify-center flex-col  bg-cover bg-center">
          <div className="text-gray-900 font-black text-6xl text-center">
            Bounader Mohamed Rafik
          </div>
          <div className="w-1/2 rounded-full h-0.5 bg-black/10 my-4"></div>
          <div className="flex items-center justify-center gap-3">
            Web Developper / Motion Designer{" "}
            <IoIosCheckmarkCircleOutline className="text-green-500 font-black" />
          </div>
        </div>
      </div>
      <div className=" w-full flex">
        <div className="flex justify-center items-center w-[30%] border-r">
          <SkillLangues />
        </div>
        <div className="w-[70%]">
          <ResumeBody />
        </div>
      </div>
      <LoadingpPage />
    </>
  );
};

export default page;
