import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoMdStarOutline } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { FaUniversity } from "react-icons/fa";
import Image from "next/image";
import ImagePlacholder from "@/public/IMG_20230927_155014.jpg";
import VYSIOPIC from "@/public/Teams/VYSIO.jpg";
const ResumeBody = () => {
  return (
    <div className="w-full p-7  bg-cover bg-top h-full bg-opacity-30">
      <div>
        <div className="border-b pb-3 text-3xl flex gap-4 justify-start items-center text-blue-400 font-extrabold">
          <FaStarOfLife />
          Summary
        </div>
        <div className="px-7">
          <div className="text-sm pt-6 w-2/3">
            • I am a highly talented and trusted professional with a proven
            track record of success. I consistently deliver exceptional results,
            thanks to my strong skills and passion for excellence. My dedication
            and adaptability have earned me a reputation as a reliable and
            skilled individual.
          </div>
          <div className="text-sm pt-3 w-2/3">
            • I am a professional team player who excels in collaborating with
            others. I consistently contribute to project success and create a
            positive work environment. With strong communication skills,
            adaptability, and a supportive attitude, I am a valuable asset to
            any team.
          </div>
          <div className="text-sm pt-3 w-2/3">
            • I am fully prepared and eager to tackle new professional
            challenges. With a strong skill set and a proactive attitude, I am
            ready to contribute to the success of any organization. I am
            dedicated, adaptable, and quick to learn, showcasing my readiness
            for work. I am confident in my abilities and excited to make a
            positive impact in my next role.
          </div>
        </div>
      </div>

      <div className="pt-7">
        <div className="border-b pb-3 text-3xl flex gap-4 justify-start items-center text-blue-400 font-extrabold">
          <RiTeamFill />
          Teams
        </div>

        <div className="px-7">
          <div className="flex items-center my-9">
            <div
              className="pt-6 w-1/2
          "
            >
              <div className="text-gray-900 text-xl font-black flex gap-3 items-center">
                <IoMdStarOutline />{" "}
                <div>
                  <div className="text-[7px] -mb-3 uppercase">2023-now</div>
                  VYSIO SOFTWORKS
                </div>{" "}
                <a
                  href=""
                  className="hover:text-gray-300 flex gap-1 transition-all items-center  rounded-md px-5"
                >
                  <GoArrowUpRight />
                  <div className="text-xs font-light">Check Website</div>
                </a>
              </div>

              <div className="text-xs ">
                <div className="mt-3">
                  VYSIO is a team dedicated to make visual control-able products
                  (Video Games, Ai Products, Navigations systems...) i worked
                  with them as a{" "}
                  <span className="text-green-500 font-bold">
                    ui/ux designer
                  </span>
                  , with some really brilliant team members
                </div>
                <span className="text-blue-500  underline underline-offset-2">
                  <br />◦{" "}
                  <a
                    className=" hover:text-blue-700"
                    target="_blank"
                    href="https://www.linkedin.com/in/lokman-touil-50ab90261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  >
                    Touil Lokman
                  </a>
                  <br />◦{" "}
                  <a className=" hover:text-blue-700" href="">
                    Aymen Melouah
                  </a>
                  <br />◦{" "}
                  <a className=" hover:text-blue-700" href="">
                    Karamane AbdArahman
                  </a>
                  <br />◦{" "}
                  <a
                    className=" hover:text-blue-700"
                    target="_blank"
                    href="https://www.linkedin.com/in/ramzibouhadjar/"
                  >
                    Bouhadjar Ramzi
                  </a>
                </span>
              </div>
            </div>
            <div className="w-1/2">
              <Image
                loading="lazy"
                src={VYSIOPIC}
                alt="VYSIO PICTURE"
                className="h-full rounded-lg shadow-xl object-cover aspect-video object-center "
              />
            </div>
          </div>
          <div className=" w-1/2 mx-auto h-0.5 bg-gray-300 rounded-full"></div>
        </div>

        <div className="px-7">
          <div className="flex items-center my-9">
            <div
              className="pt-6 w-1/2
          "
            >
              <div className="text-gray-900 text-xl font-black flex gap-3 items-center">
                <IoMdStarOutline />{" "}
                <div>
                  <div className="text-[7px] -mb-3 uppercase">2023-now</div>
                  GreenSea inc
                </div>{" "}
              </div>

              <div className="text-xs ">
                <div className="mt-3">
                  GreenSea inc is team that specified to make web/app products
                  to represent fashion ideas, i work as
                  <span className="text-green-500 font-bold">
                    [ui/ux Designer, Web Developper]
                  </span>
                  , with some really ambitious team members
                </div>
                <span className="text-blue-500  underline underline-offset-2">
                  <br />◦{" "}
                  <a
                    target="_blank"
                    className=" hover:text-blue-700"
                    href="https://www.linkedin.com/in/siradj-lamri/"
                  >
                    Siraj Mounir Lamri
                  </a>
                  <br />◦{" "}
                  <a className=" hover:text-blue-700" href="">
                    Aymen Melouah
                  </a>
                </span>
              </div>
            </div>
            <div className="w-1/2">
              <Image
                loading="lazy"
                src={ImagePlacholder}
                alt="PlaceHolder"
                className="h-full rounded-lg shadow-xl object-cover aspect-video object-center "
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border-b pb-3 text-3xl flex gap-4 justify-start items-center text-blue-400 font-extrabold">
          <FaUniversity />
          Education
        </div>
        <div className="px-7 bg-white/10 backdrop-blur-xl">
          <div className="text-sm pt-6 w-2/3">
            • I obtained my university education from Chadli Ben Djedid
            University, where I had the opportunity to learn alongside a
            talented group of friends. We formed a close-knit group and
            collaborated on various projects together.
          </div>
          <div className="text-sm py-6 w-2/3">
            • During my time at Chadli Ben Djedid University, I had the
            privilege of being part of a dynamic club called{" "}
            <span className="text-blue-500">I-TECH</span>. As a member of this
            club, I collaborated with a talented group of friends, engaging in
            various activities and projects related to technology and
            innovation. It was a valuable experience that enhanced my skills and
            fostered a strong sense of teamwork.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBody;
