import Image from "next/image";
import MySideBar from "./components/SideBar/MySideBar";
import MyHeroSection from "./components/HeroSection/MyHeroSection";

export default function Home() {
  return (
    <>
      <main className="hidden md:block">
        <div className="relative z-20">
          <MySideBar />
        </div>
        <div className="ml-[20%]">
          <MyHeroSection />
        </div>
      </main>
    </>
  );
}
