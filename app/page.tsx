import Image from "next/image";
import MySideBar from "./components/SideBar/MySideBar";
import MyHeroSection from "./components/HeroSection/MyHeroSection";

export default function Home() {
  return (
    <main>
      <MySideBar />
      <div className="ml-[20%]">
        <MyHeroSection />
      </div>
    </main>
  );
}
