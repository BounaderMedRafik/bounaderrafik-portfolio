import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import { TbBrandWebflow } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiWebflow } from "react-icons/si";

const ProjectItemWeb = ({}: any) => {
  return (
    <>
      <a href="/" target="_blank">
        <div className="w-full hover:bg-gray-900 hover:text-gray-100 text-gray-900 py-2 px-40 border-b transition-all duration-100">
          <div className="text-3xl flex  items-center justify-between font-black">
            <div className="flex gap-3 items-center">
              <FaStarOfLife size={12} />
              My Own Portfolio
            </div>
            <div className="ml-2 flex gap-0.5">
              <div className="text-xs font-bold p-1 rounded-full  bg-slate-50 text-slate-800 border border-black/15 select-none cursor-default">
                <FaReact size={20} />
              </div>
              <div className="text-xs font-bold p-1 rounded-full  bg-cyan-50 text-cyan-400 border border-black/15 select-none cursor-default">
                <SiTailwindcss size={20} />
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="text-sm flex gap-3">02/14/2024</div>
            <div className="text-xs font-semibold">
              1 week • Hard
              <div className="w-[250px] h-1 bg-gray-100 rounded-full border">
                <div className="w-[80%] h-full bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </a>
      {/* */}
      <a href="https://mwkit.webflow.io/" target="_blank">
        <div className="w-full hover:bg-gray-900 hover:text-gray-100 text-gray-900 py-2 px-40 border-b transition-all duration-100">
          <div className="text-3xl flex  items-center justify-between font-black">
            <div className="flex gap-3 items-center">
              <FaStarOfLife size={12} />
              MWkit!
            </div>
            <div className="ml-2 flex gap-0.5">
              <div className="text-xs font-bold p-1 rounded-full  bg-blue-50 text-blue-400 border border-black/15 select-none cursor-default">
                <SiWebflow className=" rounded-full" size={20} />
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="text-sm flex gap-3">11/10/2022</div>
            <div className="text-xs font-semibold">
              10 days • Hard
              <div className="w-[250px] h-1 bg-gray-100 rounded-full border">
                <div className="w-[90%] h-full bg-green-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </a>
      {/* */}
      <a href="https://rebeca-store.webflow.io/" target="_blank">
        <div className="w-full hover:bg-gray-900 hover:text-gray-100 text-gray-900 py-2 px-40 border-b transition-all duration-100">
          <div className="text-3xl flex  items-center justify-between font-black">
            <div className="flex gap-3 items-center">
              <FaStarOfLife size={12} />
              REBECA - STORE
            </div>
            <div className="ml-2 flex gap-0.5">
              <div className="text-xs font-bold p-1 rounded-full  bg-blue-50 text-blue-400 border border-black/15 select-none cursor-default">
                <SiWebflow className=" rounded-full" size={20} />
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="text-sm flex gap-3">02/18/2023</div>
            <div className="text-xs font-semibold">
              4 days • Easy
              <div className="w-[250px] h-1 bg-gray-100 rounded-full border">
                <div className="w-[55%] h-full bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default ProjectItemWeb;
