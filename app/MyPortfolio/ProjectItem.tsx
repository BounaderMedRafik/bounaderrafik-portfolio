import React from "react";
import { FaStarOfLife } from "react-icons/fa";

const ProjectItem = ({}: any) => {
  return (
    <>
      <a
        href="https://vysio-softworks.itch.io/prism?fbclid=IwAR3Ja2NbyR74GivPyVSo4OGvmtVwZeZT3AsOgjknM0v1I6QSbHJGaZASHBo"
        target="_blank"
      >
        <div className="w-full hover:bg-gray-900 hover:text-gray-100 text-gray-900 py-2 px-40 border-b transition-all duration-100">
          <div className="text-3xl flex  items-center justify-between font-black">
            <div className="flex gap-3 items-center">
              <FaStarOfLife size={12} />
              PRISM GAME
            </div>
            <div className="ml-2">
              <div className="text-xs font-semibold px-2 rounded-full py-0.5 bg-red-50 text-red-400 border border-black/15 select-none cursor-default">
                User Interface
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="text-sm flex gap-3">02/14/2024</div>
            <div className="text-xs font-semibold">
              4 days • Easy
              <div className="w-[250px] h-1 bg-gray-100 rounded-full border">
                <div className="w-[70%] h-full bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </a>
      {/* */}
      <a
        href="https://www.figma.com/proto/z8HgDLF6RZt7UsmMHJnjCI/ITech-Badge-Template-Desgin?type=design&node-id=46-87&t=va14FXOaREjqjiPQ-0&scaling=min-zoom&page-id=0%3A1"
        target="_blank"
        className="hidden"
      >
        <div className="w-full hover:bg-gray-900 hover:text-gray-100 text-gray-900 py-2 px-40 border-b transition-all duration-100">
          <div className="text-3xl flex  items-center justify-between font-black">
            <div className="flex gap-3 items-center">
              <FaStarOfLife size={12} />
              I-Tech Visual
            </div>
            <div className="ml-2 flex gap-0.5">
              <div className="text-xs font-semibold px-2 rounded-full py-0.5 bg-green-50 text-green-400 border border-black/15 select-none cursor-default">
                Logo
              </div>
              <div className="text-xs font-semibold px-2 rounded-full py-0.5 bg-blue-50 text-blue-400 border border-black/15 select-none cursor-default">
                Badges
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="text-sm flex gap-3">02/18/2022</div>
            <div className="text-xs font-semibold">
              3 days • Intermediate
              <div className="w-[250px] h-1 bg-gray-100 rounded-full border">
                <div className="w-[90%] h-full bg-green-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </a>
      {/* */}
      <a href="" target="_blank" className="hidden">
        <div className="w-full hover:bg-gray-900 hover:text-gray-100 text-gray-900 py-2 px-40 border-b transition-all duration-100">
          <div className="text-3xl flex  items-center justify-between font-black">
            <div className="flex gap-3 items-center">
              <FaStarOfLife size={12} />
              GreenSea Inc
            </div>
            <div className="ml-2 flex gap-0.5">
              <div className="text-xs font-semibold px-2 rounded-full py-0.5 bg-green-50 text-green-400 border border-black/15 select-none shadow-xl  cursor-default">
                Logo
              </div>
              <div className="text-xs font-semibold px-2 rounded-full py-0.5 bg-red-50 text-red-400 border border-black/15 select-none cursor-default">
                User Interface
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="text-sm flex gap-3">02/18/2023</div>
            <div className="text-xs font-semibold">
              4 days • Intermediate
              <div className="w-[250px] h-1 bg-gray-100 rounded-full border">
                <div className="w-[75%] h-full bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default ProjectItem;
