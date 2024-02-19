import React from "react";
import MyForm from "./MyForm";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[100vh] border-b flex justify-center items-center">
        <div className="h-full bg-cover bg-center bg-[url('/MyAboutMeSecBg.jpg')] w-1/2 flex justify-center items-center">
          <MyForm />
        </div>
        <div className="w-1/2 h-full bg-[url('/PortfolioWebBG.jpg')] bg-cover bg-center"></div>
      </div>
    </div>
  );
};

export default page;
