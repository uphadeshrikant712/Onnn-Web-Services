import React from "react";
import Icons from "./Icons";
import GreenBtn from "./GreenBtn";

const Footer = () => {
  return (
    <div className="w-full h-fit bg-gray-900 text-gray-400 px-2 py-8 border-t-[1px] border-slate-500 ">
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto h-full px-3 py-12 justify-center items-center">
        <div className="w-3/4 md:w-1/2 ">
          <Icons />
        </div>
        <div className="w-3/4 md:w-1/2 ">
          <div className="w-full pt-8 md:pt-2">
            <p className="uppercase font-bold mb-8  text-lg text-center text-lightColor md:text-left">
              subscribe to our newsletter
            </p>
            <form action="https://getform.io/f/zaxdwmla" method="POST" className="flex flex-col sm:flex-row">
              <input
                type="text"
                name="email"
                placeholder="Daily newsletter..."
                className="md:w-3/4 w-full font-bold rounded-md p-2 text-gray-900 mr-4 mb-4 "
              />
              <GreenBtn title="Subscribe" className="p-2 mb-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
