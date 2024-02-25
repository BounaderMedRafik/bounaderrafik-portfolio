import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import EmbedTwitterPlaceholder from "./EmbedTwitterPlaceholder";
import { FaXTwitter } from "react-icons/fa6";

const MyForm = () => {
  return (
    <div className="p-8 py-4  w-full">
      <div className="text-5xl font-black ">
        <div className="flex gap-3 items-center">
          <FaStarOfLife size={20} />
          Testimonials
        </div>
        <div className="text-xs flex gap-1 items-center font-normal">
          Join My testimonials list right now
          <a
            href="https://twitter.com/@bwnadrrr"
            className=" font-semibold ml-1 text-blue-600 hover:underline"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
      <div className="mt-5">
        <EmbedTwitterPlaceholder />
      </div>
    </div>
  );
};

export default MyForm;
