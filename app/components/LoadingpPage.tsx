import React, { useEffect, useState } from "react";

const LoadingpPage = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    showLoader && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-70 z-[999]">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-0 rounded-full animate-spin"></div>
      </div>
    )
  );
};

export default LoadingpPage;
