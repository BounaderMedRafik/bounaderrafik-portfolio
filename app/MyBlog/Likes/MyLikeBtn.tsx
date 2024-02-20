import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

const MyLikeBtn = ({ starter }: any) => {
  parseInt(starter);
  console.log(typeof starter);
  const [isClicked, setIsClicked] = useState(false);
  const [counter, setCounter] = useState(starter);
  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
    }

    const newLikeState = !isClicked;
    setIsClicked(newLikeState);
    localStorage.setItem("likeState", JSON.stringify(newLikeState));
  };

  useEffect(() => {
    // Check if the like button state exists in Local Storage
    const storedLikeState = localStorage.getItem("likeState");
    if (storedLikeState) {
      setIsClicked(JSON.parse(storedLikeState));
    }
  }, []);

  return (
    <button
      disabled={isClicked}
      onClick={handleClick}
      className={`p-2 items-center justify-center flex gap-1 border rounded-full cursor-pointer hover:opacity-75 hover:-translate-y-0.5 transition-all  ${
        isClicked ? "bg-red-100 text-red-500" : ""
      }`}
    >
      <FaHeart />
      <div className="text-xs">Like</div>
    </button>
  );
};

export default MyLikeBtn;
