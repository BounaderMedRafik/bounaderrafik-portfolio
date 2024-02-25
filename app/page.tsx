"use client";
import MyHeroSection from "./components/HeroSection/MyHeroSection";
import LoadingpPage from "./components/LoadingpPage";

export default function Home() {
  return (
    <>
      <LoadingpPage />
      <main className="hidden md:block">
        <div>
          <MyHeroSection />
        </div>
      </main>
    </>
  );
}
