import React from "react";
import Articles from "./Articles";
import { MdArticle } from "react-icons/md";

const page = () => {
  return (
    <>
      <div className="w-full relative h-[20vh] bg-[url('/articles/articlesHeadBG.jpg')] bg-cover bg-center">
        <div className=" text-gray-500 text-xs absolute top-1 left-1">
          Background by : @realitydesigners
        </div>
      </div>
      <div className="w-full bg-[url('/articles/ArticlesPageBanner.jpg')] bg-cover bg-center bg-fixed p-5">
        <div className=" text-5xl my-5 font-black w-full ">
          <div className="flex gap-2 items-center">
            <MdArticle />
            Articles
          </div>
          <div className="text-xs w-64 font-normal">
            In this section i showcase most important articles about all topics
          </div>
        </div>
        <div>
          <Articles />
        </div>
      </div>
    </>
  );
};

export default page;
