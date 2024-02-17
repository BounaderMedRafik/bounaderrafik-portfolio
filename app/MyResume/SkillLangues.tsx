import React from "react";
import { IoAddOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";
import { GiAlgeria } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const SkillLangues = () => {
  return (
    <div className="w-full justify-center items-center px-5 py-4">
      <div className="text-xl font-normal text-gray-500 flex gap-3 justify-start items-center">
        <IoAddOutline /> Contacts
      </div>
      <div className="w-full px-9 mt-3">
        <ul>
          <li>
            <a href="/" target="_blank">
              <div className="px-6 py-2  hover:bg-gray-100 transition-all rounded-lg flex justify-start gap-5 items-center">
                <MdEmail size={15} />
                <div className="text-sm">rafikbn666@gmail.com</div>
              </div>
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <div className="px-6 py-2  hover:bg-gray-100 transition-all rounded-lg flex justify-start gap-5 items-center">
                <FaPhone size={15} />
                <div className="w-full text-sm">+213 698190468</div>
              </div>
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <div className="px-6 py-2  hover:bg-gray-100 transition-all rounded-lg flex justify-start gap-5 items-center">
                <MdPlace size={15} />
                <div className="w-full text-center flex  items-center gap-5 text-sm">
                  El Taref, Algeria <GiAlgeria className="text-red-500" />
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <div className="px-6 py-2  hover:bg-gray-100 transition-all rounded-lg flex justify-start gap-5 items-center">
                <FaLinkedin size={15} />
                <div className="w-full text-center flex  items-center gap-5 text-sm">
                  LinkedIn
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-[1px] bg-black/10 mt-4"></div>
    </div>
  );
};

export default SkillLangues;
