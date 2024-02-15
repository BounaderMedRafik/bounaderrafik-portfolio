import Image from "next/image";
import MySideBar from "./components/SideBar/MySideBar";
import MyHeroSection from "./components/HeroSection/MyHeroSection";

export default function Home() {
  return (
    <>
      <main className="hidden md:block">
        <MySideBar />
        <div className="ml-[20%]">
          <MyHeroSection />
        </div>
      </main>
      <div className=" md:hidden h-screen w-full flex justify-center items-center">
        No Mobile Support
      </div>
    </>
  );
}
