import React from "react";

const PostCat = ({ category }: any) => {
  return (
    <>
      {category == "tailwind" ? (
        <div className="px-2 text-xs border rounded-full py-0.5 bg-cyan-50 text-cyan-500">
          Tailwind
        </div>
      ) : category == "nextJS" ? (
        <div className="px-2 text-xs border rounded-full py-0.5 bg-gray-50 text-gray-500">
          NextJS
        </div>
      ) : null}
    </>
  );
};

export default PostCat;
