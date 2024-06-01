import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import GreenBtn from "./GreenBtn";

const PriceCard = ({ title, price, features,description}) => {
  return (
    <div className="priceCard bg-white text-slate-900 m-4 rounded-xl overflow-hidden shadow-md hover:shadow-blue-600  hover:scale-105 duration-300 shadow-red-400">
      <div className="text-center bg-darkColor text-white py-4 uppercase">
        <p>{title}</p>
      </div>
      <div className="p-2">
        <p className="text-5xl font-bold py-2 px-2 flex ">
          ${price}
          <span className="text-xl text-darkColor flex flex-col  justify-end">
            /mo
          </span>
        </p>
      </div>
      <p className="px-4 py-2 leading-none text-slate-500 text-xl">
      {description}
      </p>
      <div className="text-2xl">
        <div className="px-4 py-4">
          {features.map(({ id, title }) => (
            <p
              key={id}
              className="flex items-center capitalize font-sans py-0 text-lg"
            >
              <FaPlusCircle className="w-5 mr-4 text-lightColor" /> {title}
            </p>
          ))}

          {/* <p className="flex items-center py-1 text-lg">
            <FaPlusCircle className="w-5 mr-4 text-lightColor" /> Feature One
          </p>
          <p className="flex items-center py-1 text-lg">
            <FaPlusCircle className="w-5 mr-4 text-lightColor" /> Feature One
          </p>
          <p className="flex items-center py-1 text-lg">
            <FaPlusCircle className="w-5 mr-4 text-lightColor" /> Feature One
          </p>
          <p className="flex items-center py-1 text-lg">
            <FaPlusCircle className="w-5 mr-4 text-lightColor" /> Feature One
          </p> */}
        </div>
        <div>
          <GreenBtn
            title="get started"
            className="w-full capitalize p-2 hover:border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
