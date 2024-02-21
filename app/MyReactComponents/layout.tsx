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
      <div className="w-full h-screen flex justify-center items-center text-xs">
        Pretty soon :3
      </div>
    </>
  );
}
