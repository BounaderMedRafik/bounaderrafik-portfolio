import React from "react";
import { Tweet } from "react-tweet";
import { ScrollShadow } from "@nextui-org/react";
const EmbedTwitterPlaceholder = () => {
  return (
    <>
      <ScrollShadow
        hideScrollBar
        className="w-full relative  no-scrollbar drop-shadow-xl  h-[500px]  rounded-md"
      >
        <Tweet id="1759618403059552699" />
        <Tweet id="1759618403059552699" />
        <Tweet id="1759618403059552699" />
        <Tweet id="1759618403059552699" />
        <Tweet id="1759618403059552699" />
        <Tweet id="1759618403059552699" />
      </ScrollShadow>
      <div className="w-full hidden flex-col backdrop-blur-sm h-[250px] bg-gray-200/20 border rounded-md justify-center items-center">
        <div className="text-sm font-semibold ">No Testimonials for now</div>
        <div className="hide">
          <iframe
            src="https://giphy.com/embed/ISOckXUybVfQ4"
            width="480"
            frameBorder="0"
            className="giphy-embed pointer-events-none"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default EmbedTwitterPlaceholder;
