"use client";

import React from "react";
import { useState, useEffect } from "react";

const MyLoading = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return showLoading ? (
    <div className="fixed inset-0 bg-blue-500 z-[10000] flex flex-1 items-center justify-center">
      Loading
    </div>
  ) : null;
};

export default MyLoading;
