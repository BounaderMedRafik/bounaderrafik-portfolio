"use client";

import React, { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";

const LoadingpPage = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    showLoader && (
      <div className="fixed top-0 right-0 w-[80%] h-full flex justify-center items-center gap-5 bg-white/50 backdrop-blur-md  z-[999]">
        <FiLoader size={50} className="text-blue-500 animate-spin" />
        <div className="text-xs text-blue-500 font-bold">Loading...</div>
      </div>
    )
  );
};

export default LoadingpPage;
