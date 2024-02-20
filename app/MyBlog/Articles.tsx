"use client";
import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import MyLikeBtn from "./Likes/MyLikeBtn";
import PostCat from "./PostCat";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import TailwindThumb from "@/public/articles/TailwindThumb.jpg";
import ClerkThumb from "@/public/articles/clerkThumb.png";
const Articles = () => {
  return (
    <>
      <div className="w-[60%] mx-auto p-5 border rounded-md ">
        <div>
          <div className="w-full">
            <div className=" w-full flex justify-between items-center   border-b py-3">
              <a href="" target="_blank">
                <div className="flex hover:opacity-80 items-center gap-3 px-4 py-2 rounded-md ">
                  <div className=" rounded-full">
                    <BsPersonCircle size={32} />
                  </div>
                  <div className="text-sm font-semibold ">@Name</div>
                </div>
              </a>
              <div>
                <MyLikeBtn />
              </div>
            </div>
            <div className="flex border-b  w-full py-2">
              <div className="flex gap-0.5">
                <PostCat category="tailwind" />
                <PostCat category="nextJS" />
              </div>
            </div>
            <div className="my-5">
              <div className="text-5xl font-bold font-postHead">
                What is The Relationship Between Tailwind and nextJS?
              </div>
              <div className="flex justify-center items-center mt-2">
                <Image
                  className="w-full rounded-md shadow-xl h-52 object-cover"
                  src={TailwindThumb}
                  alt="TailwindThumb"
                />
              </div>
              <div>
                <article className="text-sm mt-5">
                  Tailwind CSS and Next.js are two popular tools used in web
                  development. Here is the relationship between the two:
                  <div id="parg" className="mt-2">
                    <div
                      id="head"
                      className="text-xl flex items-center gap-1 font-bold "
                    >
                      <FaStarOfLife size={12} /> Tailwind CSS:
                    </div>
                    <div className="text-sm">
                      {" "}
                      <span className="text-blue-500">Tailwind CSS</span> is a
                      utility-first CSS framework that provides a set of
                      pre-defined utility classes to style web components. It
                      allows developers to rapidly build custom user interfaces
                      by applying these utility classes directly in the HTML
                      markup. Tailwind CSS is highly{" "}
                      <span className="underline">customizable</span> and{" "}
                      <span className="underline">optimized</span>, as it prunes
                      unused CSS classes at build time, reducing the final
                      bundle size.
                    </div>
                  </div>
                  <div id="parg" className="mt-2">
                    <div
                      id="head"
                      className="text-xl flex items-center gap-1 font-bold "
                    >
                      <FaStarOfLife size={12} /> Next.js:
                    </div>
                    <div className="text-sm">
                      {" "}
                      <span className="text-blue-500">Next.js</span> is a React
                      framework for building{" "}
                      <span className="underline">
                        server-side rendered (SSR)
                      </span>{" "}
                      and static websites. It provides features like automatic
                      code splitting, server-side rendering, and static site
                      generation. Next.js simplifies the development process by
                      providing a streamlined workflow and built-in
                      optimizations for performance.
                    </div>
                    <div className="mt-4">
                      The relationship between Tailwind CSS and Next.js is that
                      they can be used together to create responsive and
                      customizable user interfaces in Next.js applications.
                      Next.js provides a convenient environment for integrating
                      Tailwind CSS into a project. By following the appropriate
                      setup steps, developers can easily install and configure
                      Tailwind CSS in a Next.js project
                    </div>
                    <div className="mt-4">
                      To summarize, Tailwind CSS and Next.js complement each
                      other, with Tailwind CSS providing a powerful CSS
                      framework and Next.js offering a robust React framework
                      for building web applications
                    </div>
                  </div>
                  <div id="links" className="mt-7 flex gap-2">
                    <a href="" target="_blank">
                      <button className="px-5 hover:bg-green-100 hover:-translate-y-0.5 transition-all py-1 text-xs border rounded-full flex items-center gap-1 w-auto bg-green-50 text-green-500">
                        <IoIosLink /> tailwindcss
                      </button>
                    </a>
                    <a href="" target="_blank">
                      <button className="px-5 hover:bg-green-100 hover:-translate-y-0.5 transition-all py-1 text-xs border rounded-full flex items-center gap-1 w-auto bg-green-50 text-green-500">
                        <IoIosLink /> nextJS
                      </button>
                    </a>
                    <a href="" target="_blank">
                      <button className="px-5 hover:bg-green-100 hover:-translate-y-0.5 transition-all py-1 text-xs border rounded-full flex items-center gap-1 w-auto bg-green-50 text-green-500">
                        <IoIosLink /> FreeCodeCamp
                      </button>
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[60%] my-3 mx-auto h-0.5 bg-gray-100 rounded-full">
        {" "}
      </div>

      <div className="w-[60%] mx-auto p-5 border rounded-md ">
        <div>
          <div className="w-full">
            <div className=" w-full flex justify-between items-center   border-b py-3">
              <a href="" target="_blank">
                <div className="flex hover:opacity-80 items-center gap-3 px-4 py-2 rounded-md ">
                  <div className=" rounded-full">
                    <BsPersonCircle size={32} />
                  </div>
                  <div className="text-sm font-semibold ">@Name</div>
                </div>
              </a>
              <div>
                <MyLikeBtn />
              </div>
            </div>
            <div className="flex border-b  w-full py-2">
              <div className="flex gap-0.5">
                <PostCat category="tailwind" />
                <PostCat category="nextJS" />
              </div>
            </div>
            <div className="my-5">
              <div className="text-5xl font-bold font-postHead">
                Clerk and nextJS
              </div>
              <div className="flex justify-center items-center mt-2">
                <Image
                  className="w-full rounded-md shadow-xl h-52 object-cover"
                  src={ClerkThumb}
                  alt="ClerkThumb"
                />
              </div>
              <div>
                <article className="text-sm mt-5">
                  Clerk is an authentication and user management platform that
                  helps developers easily add user authentication and
                  authorization features to their applications. It provides a
                  secure and scalable solution for managing user accounts,
                  authentication, and authorization processes, allowing
                  developers to focus more on building their application's core
                  functionality.
                  <div id="parg" className="mt-2">
                    <div
                      id="head"
                      className="text-xl flex items-center gap-1 font-bold "
                    >
                      <FaStarOfLife size={12} /> Authentication :
                    </div>
                    <div className="text-sm">
                      {" "}
                      Clerk provides a comprehensive{" "}
                      <span className="underline">authentication</span> system
                      that supports various authentication methods, including
                      email/password, social logins (such as Google, Facebook,
                      GitHub), and Single Sign-On (SSO) with providers like
                      Auth0 and Okta.
                    </div>
                  </div>
                  <div id="parg" className="mt-2">
                    <div
                      id="head"
                      className="text-xl flex items-center gap-1 font-bold "
                    >
                      <FaStarOfLife size={12} /> Next.js:
                    </div>
                    <div className="text-sm">
                      {" "}
                      <span className="text-blue-500">Next.js</span> is a React
                      framework for building{" "}
                      <span className="underline">
                        server-side rendered (SSR)
                      </span>{" "}
                      and static websites. It provides features like automatic
                      code splitting, server-side rendering, and static site
                      generation. Next.js simplifies the development process by
                      providing a streamlined workflow and built-in
                      optimizations for performance.
                    </div>
                    <div className="mt-4">
                      The relationship between Tailwind CSS and Next.js is that
                      they can be used together to create responsive and
                      customizable user interfaces in Next.js applications.
                      Next.js provides a convenient environment for integrating
                      Tailwind CSS into a project. By following the appropriate
                      setup steps, developers can easily install and configure
                      Tailwind CSS in a Next.js project
                    </div>
                    <div className="mt-4">
                      To summarize, Tailwind CSS and Next.js complement each
                      other, with Tailwind CSS providing a powerful CSS
                      framework and Next.js offering a robust React framework
                      for building web applications
                    </div>
                  </div>
                  <div id="links" className="mt-7 flex gap-2">
                    <a href="" target="_blank">
                      <button className="px-5 hover:bg-green-100 hover:-translate-y-0.5 transition-all py-1 text-xs border rounded-full flex items-center gap-1 w-auto bg-green-50 text-green-500">
                        <IoIosLink /> tailwindcss
                      </button>
                    </a>
                    <a href="" target="_blank">
                      <button className="px-5 hover:bg-green-100 hover:-translate-y-0.5 transition-all py-1 text-xs border rounded-full flex items-center gap-1 w-auto bg-green-50 text-green-500">
                        <IoIosLink /> nextJS
                      </button>
                    </a>
                    <a href="" target="_blank">
                      <button className="px-5 hover:bg-green-100 hover:-translate-y-0.5 transition-all py-1 text-xs border rounded-full flex items-center gap-1 w-auto bg-green-50 text-green-500">
                        <IoIosLink /> FreeCodeCamp
                      </button>
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
