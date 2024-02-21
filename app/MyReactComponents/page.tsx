import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import { MdHorizontalRule } from "react-icons/md";
import { FaReact } from "react-icons/fa";

const links = [
  {
    id: 1,
    title: "NavigationBar",
    link: "./NavigationBar",
    num: 3,
    type: "reactC",
  },
  {
    id: 2,
    title: "Hero Section",
    link: "./HeroSection",
    num: 2,
    type: "pageS",
  },
  {
    id: 3,
    title: "Footers",
    link: "./Footer",
    type: "reactC",
    num: 4,
  },
  {
    id: 4,
    title: "Contacts",
    link: "./Contacts",
    type: "pageS",
    num: 1,
  },
];

const page = () => {
  return (
    <div className="w-full flex">
      <div className="w-1/4 bg-slate-50 border-r h-screen p-6 ">
        <div>
          <div className="flex items-center mb-4 gap-2 text-xl font-bold">
            <FaStarOfLife size={15} />
            React Components
          </div>
          <div className="px-9">
            {links.map((item) =>
              item.type == "reactC" ? (
                <a key={item.id} href={item.link}>
                  <div className=" hover:bg-gray-100 transition-all text-sm border border-black/0 hover:border-black/5 hover:border rounded-md my-1 px-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MdHorizontalRule />
                      {item.title}
                    </div>
                    <div className="text-xs px-1  border bg-blue-50 text-blue-600 rounded-full">
                      {item.num}
                    </div>
                  </div>
                </a>
              ) : null
            )}
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center mb-4 gap-2 text-xl font-bold">
            <FaStarOfLife size={15} />
            Page Section
          </div>
          <div className="px-9">
            {links.map((item) =>
              item.type == "pageS" ? (
                <a key={item.id} href={item.link}>
                  <div className=" hover:bg-gray-100 transition-all text-sm border border-black/0 hover:border-black/5 hover:border rounded-md my-1 px-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MdHorizontalRule />
                      {item.title}
                    </div>
                    <div className="text-xs px-1  border bg-blue-50 text-blue-600 rounded-full">
                      {item.num}
                    </div>
                  </div>
                </a>
              ) : null
            )}
          </div>
        </div>
      </div>
      <div className=" w-3/4 h-screen bg-red-200 p-5 flex items-start justify-center flex-col">
        <div className="text-5xl font-black flex items-center gap-2 ">
          <FaReact />
          React components
        </div>
        <div className="text-sm font-normal w-1/2 mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
          quibusdam? Tempore id debitis dolorem necessitatibus.
        </div>
      </div>
    </div>
  );
};

export default page;
