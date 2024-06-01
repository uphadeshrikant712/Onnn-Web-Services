import React from "react";
import GreenBtn from "./GreenBtn";
import hero from "../images/hero.jpg";

const Hero = () => {
  return (
    <>
      <div name='home' className="main flex flex-col justify-between w-full h-screen bg-gray-900 text-white text-center md:text-left">
        <div className="inner grid md:grid-cols-2 max-w-screen-xl m-auto px-[5vw]">
          <div className="left-div  flex flex-col md:items-start justify-center w-full px-[.5vw] py-[7vw]">
            <p className="md:text-2xl text-xl pt-[4vw] text-gray-500 capitalize">
              cheapest hosting on planet earth
            </p>
            <h1 className="pt-[.5vw] pb-[1vw] text-3xl md:text-7xl font-bold capitalize">
              <span className="text-lightColor ">onnn</span> web services
            </h1>
            <p className="text-base font-light text-gray-500 md:w-[70%]">
            "Crafting bespoke websites for your goals, we prioritize user experience and innovation. From design to launch, we ensure your online presence captivates and performs."
            </p>
            <GreenBtn
              title="sign up"
              className=" capitalize py-[.5vw] px-[2.5vw] my-[2vw] "
            />
          </div>
          <div className="image-div flex justify-center items-center md:w-3/4  ">
            <img src={hero} alt="" className="w-3/4 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
