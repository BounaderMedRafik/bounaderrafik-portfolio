import React from "react";
import Articles from "./Articles";

const page = () => {
  return (
    <div className="w-full p-5">
      <div className=" text-3xl font-black">Articles</div>
      <div>
        <Articles />
      </div>
    </div>
  );
};

export default page;
