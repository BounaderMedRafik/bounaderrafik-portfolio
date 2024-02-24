import React from "react";
import { IoAddOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";
import { GiAlgeria } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiAuth0 } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SiAdobephotoshop } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiWebflow } from "react-icons/si";
import { RiEnglishInput } from "react-icons/ri";
import { WiMoonWaxingCrescent1 } from "react-icons/wi";
import { LuCroissant } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa6";

const SkillLangues = () => {
  return (
    <div className="flex flex-col ">
      <div className="w-full justify-center items-center px-5 py-4">
        <div className="text-xl font-normal text-gray-500 flex gap-3 justify-start items-center">
          <IoAddOutline /> Contacts
        </div>
        <div className="w-full px-9 mt-3">
          <ul>
            <li>
              <a
                href="mailto:rafikbn666@gmail.com?subject='WorkWithMe'"
                target="_blank"
              >
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
              <a
                href="https://maps.app.goo.gl/5mcxQxQ33Yh7YjVT6"
                target="_blank"
              >
                <div className="px-6 py-2  hover:bg-gray-100 transition-all rounded-lg flex justify-start gap-5 items-center">
                  <MdPlace size={15} />
                  <div className="w-full text-center flex  items-center gap-5 text-sm">
                    El Taref, Algeria <GiAlgeria className="text-red-500" />
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/bounader-mohamed-rafik-2bb971290/"
                target="_blank"
              >
                <div className="px-6 py-2  hover:bg-gray-100 transition-all rounded-lg flex justify-start gap-5 items-center">
                  <FaLinkedin size={15} />
                  <div className="w-full text-center flex  items-center gap-5 text-sm">
                    LinkedIn Profile
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="https://github.com/BounaderMedRafik" target="_blank">
                <div className="px-6 py-2  hover:bg-gray-100 transition-all rounded-lg flex justify-start gap-5 items-center">
                  <FaGithub size={15} />
                  <div className="w-full text-center flex  items-center gap-5 text-sm">
                    Github Page
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full h-[1px] bg-black/10 mt-4"></div>
      </div>

      <div className="w-full justify-center items-center px-5 py-4">
        <div className="text-xl font-normal text-gray-500 flex gap-3 justify-start items-center">
          <IoAddOutline /> Languages
        </div>
        <div className="w-full px-9 mt-3">
          <ul className=" flex flex-col">
            <li className="my-2">
              <div>
                <div className="text-xs w-full flex justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <FaHtml5 />
                    HTML Language
                  </div>
                  <div className="text-xs">85%</div>
                </div>
                <div className="w-full h-2 bg-gray-50 border mt-1 rounded-full">
                  <div className="h-full w-[85%] bg-green-400 rounded-full"></div>
                </div>
              </div>
            </li>
            <li className="my-2">
              <div>
                <div className="text-xs w-full flex justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <IoLogoCss3 />
                    CSS Language
                  </div>
                  <div className="text-xs">95%</div>
                </div>
                <div className="w-full h-2 bg-gray-50 border mt-1 rounded-full">
                  <div className="h-full w-[95%] bg-green-400 rounded-full"></div>
                </div>
              </div>
            </li>
            <li className="my-2">
              <div>
                <div className="text-xs w-full flex justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <IoLogoJavascript />
                    JavaScript Language
                  </div>
                  <div className="text-xs">75%</div>
                </div>
                <div className="w-full h-2 bg-gray-50 border mt-1 rounded-full">
                  <div className="h-full w-[75%] bg-green-400 rounded-full"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full h-[1px] bg-black/10 mt-4"></div>
      </div>

      <div className="w-full justify-center items-center px-5 py-4">
        <div className="text-xl font-normal text-gray-500 flex gap-3 justify-start items-center">
          <IoAddOutline /> Frameworks
        </div>
        <div className="w-full px-9 mt-3">
          <ul className=" flex flex-col">
            <li className="my-2">
              <div>
                <div className="text-xs w-full flex justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <SiNextdotjs />
                    React/NextJS
                  </div>
                  <div className="text-xs">70%</div>
                </div>
                <div className="w-full h-2 bg-gray-50 border mt-1 rounded-full">
                  <div className="h-full w-[70%] bg-green-400 rounded-full"></div>
                </div>
              </div>
            </li>
            <li className="my-2">
              <div>
                <div className="text-xs w-full flex justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <SiTailwindcss />
                    Tailwind
                  </div>
                  <div className="text-xs">98%</div>
                </div>
                <div className="w-full h-2 bg-gray-50 border mt-1 rounded-full">
                  <div className="h-full w-[98%] bg-green-400 rounded-full"></div>
                </div>
              </div>
            </li>
            <li className="my-2">
              <div>
                <div className="text-xs w-full flex justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <SiPrisma />
                    Prisma
                  </div>
                  <div className="text-xs">65%</div>
                </div>
                <div className="w-full h-2 bg-gray-50 border mt-1 rounded-full">
                  <div className="h-full w-[65%] bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </li>
            <li className="my-2">
              <div>
                <div className="text-xs w-full flex justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <SiAuth0 />
                    Clerk
                  </div>
                  <div className="text-xs">75%</div>
                </div>
                <div className="w-full h-2 bg-gray-50 border mt-1 rounded-full">
                  <div className="h-full w-[75%] bg-green-400 rounded-full"></div>
                </div>
              </div>
            </li>
            <li className="my-2">
              <div>
                <div className="text-xs w-full flex justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <RiSupabaseFill />
                    Supabase
                  </div>
                  <div className="text-xs">77%</div>
                </div>
                <div className="w-full h-2 bg-gray-50 border mt-1 rounded-full">
                  <div className="h-full w-[77%] bg-green-400 rounded-full"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full h-[1px] bg-black/10 mt-4"></div>
      </div>

      <div className="w-full justify-center items-center px-5 py-4">
        <div className="text-xl font-normal text-gray-500 flex gap-3 justify-start items-center">
          <IoAddOutline /> Design/Editing Softwares
        </div>
        <div className="w-full px-9 mt-3">
          <ul className=" flex flex-col">
            <li className="my-2">
              <div>
                <div className="text-xs w-full flex justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <SiAdobephotoshop />
                    Photoshop
                  </div>
                  <div className="text-xs">85%</div>
                </div>
                <div className="w-full h-2 bg-gray-50 border mt-1 rounded-full">
                  <div className="h-full w-[85%] bg-green-400 rounded-full"></div>
                </div>
              </div>
            </li>
            <li className="my-2">
              <div>
                <div className="text-xs w-full flex justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <SiAdobeaftereffects />
                    After Effect
                  </div>
                  <div className="text-xs">73%</div>
                </div>
                <div className="w-full h-2 bg-gray-50 border mt-1 rounded-full">
                  <div className="h-full w-[73%] bg-green-400 rounded-full"></div>
                </div>
              </div>
            </li>
            <li className="my-2">
              <div>
                <div className="text-xs w-full flex justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <SiAdobeillustrator />
                    Illustrator
                  </div>
                  <div className="text-xs">62%</div>
                </div>
                <div className="w-full h-2 bg-gray-50 border mt-1 rounded-full">
                  <div className="h-full w-[62%] bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </li>
            <li className="my-2">
              <div>
                <div className="text-xs w-full flex justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <FaFigma />
                    Figma
                  </div>
                  <div className="text-xs">70%</div>
                </div>
                <div className="w-full h-2 bg-gray-50 border mt-1 rounded-full">
                  <div className="h-full w-[70%] bg-green-400 rounded-full"></div>
                </div>
              </div>
            </li>
            <li className="my-2">
              <div>
                <div className="text-xs w-full flex justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <SiWebflow />
                    Webflow
                  </div>
                  <div className="text-xs">88%</div>
                </div>
                <div className="w-full h-2 bg-gray-50 border mt-1 rounded-full">
                  <div className="h-full w-[88%] bg-green-400 rounded-full"></div>
                </div>
              </div>
            </li>
            <li className="my-2">
              <div>
                <div className="text-xs w-full flex justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <FaRegCircle />
                    Spline
                  </div>
                  <div className="text-xs">53%</div>
                </div>
                <div className="w-full h-2 bg-gray-50 border mt-1 rounded-full">
                  <div className="h-full w-[53%] bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full h-[1px] bg-black/10 mt-4"></div>
      </div>

      <div className="w-full justify-center items-center px-5 py-4">
        <div className="text-xl font-normal text-gray-500 flex gap-3 justify-start items-center">
          <IoAddOutline /> Speakable Languages
        </div>
        <div className="w-full px-9 mt-3">
          <ul className=" flex flex-col">
            <li className="my-2">
              <div>
                <div className="text-xs w-full flex justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <RiEnglishInput />
                    English
                  </div>
                  <div className="text-xs">4/5</div>
                </div>
                <div className="w-full flex justify-start items-center gap-2 mt-2">
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 border-blue-400 border-2 rounded-full"></div>
                </div>
              </div>
            </li>

            <li className="my-2">
              <div>
                <div className="text-xs w-full flex justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <WiMoonWaxingCrescent1 />
                    Arabic
                  </div>
                  <div className="text-xs">5/5</div>
                </div>
                <div className="w-full flex justify-start items-center gap-2 mt-2">
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                </div>
              </div>
            </li>

            <li className="my-2">
              <div>
                <div className="text-xs w-full flex justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <LuCroissant />
                    French
                  </div>
                  <div className="text-xs">3/5</div>
                </div>
                <div className="w-full flex justify-start items-center gap-2 mt-2">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="w-4 h-4 border-yellow-400 border-2 rounded-full"></div>
                  <div className="w-4 h-4 border-yellow-400 border-2 rounded-full"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillLangues;
