import MyReactCompsSideBar from "./MyReactCompsSideBar";

export default function Layout({ children }: any) {
  return (
    <>
      <main className="hidden ">
        <div className="flex">
          <MyReactCompsSideBar />
          {children}
        </div>
      </main>
      <div className="w-full bg-[url('/ComingSoonReactComps.jpg')] bg-cover bg-center h-screen flex justify-center items-center text-xs"></div>
    </>
  );
}
