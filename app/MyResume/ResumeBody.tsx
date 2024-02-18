import React from "react";
import { FaNoteSticky } from "react-icons/fa6";
import { FaStarOfLife } from "react-icons/fa";

const ResumeBody = () => {
  return (
    <div className="w-full p-7">
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
    </div>
  );
};

export default ResumeBody;
