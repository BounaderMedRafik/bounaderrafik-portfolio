"use client";
import MyHeroSection from "./components/HeroSection/MyHeroSection";

export default function Home() {
  return (
    <>
      <main className="hidden md:block">
        <div>
          <MyHeroSection />
        </div>
      </main>
    </>
  );
}
