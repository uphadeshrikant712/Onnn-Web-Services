import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitch,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Icons = ({ className }) => {
  const iconsArray = [
    {
      id: 1,
      icon: <FaFacebook size={25} />,
      bgcolor: "shadow-red-500",
    },
    {
      id: 2,
      icon: <FaTwitter size={25} />,
      bgcolor: "shadow-yellow-400",
    },
    {
      id: 3,
      icon: <FaLinkedinIn size={25} />,
      bgcolor: "shadow-blue-600",
    },
    {
      id: 4,
      icon: <FaTwitch size={25} />,
      bgcolor: "shadow-green-600",
    },
  ];
  return (
    <div className="icons grid grid-cols-2  mx-auto w-4/5 gap-10">
      {iconsArray.map(({ id, icon, bgcolor }) => (
        <div
          key={id}
          className={
            " flex items-center hover:scale-105 duration-300 ease-in justify-center p-3 cursor-pointer rounded-md shadow-md " +
            "" +
            bgcolor
          }
        >
          {icon}
        </div>
      ))}

      {/* <div className="flex items-center justify-center shadow-md shadow-purple-500 cursor-pointer p-3 rounded-md">
        <FaTwitter size={25} />
      </div>
      <div className="flex items-center justify-center shadow-md shadow-yellow-300 cursor-pointer p-3 rounded-md">
        <FaLinkedinIn size={25} />
      </div>
      <div className="flex items-center justify-center shadow-md shadow-pink-700 cursor-pointer p-3 rounded-md">
        <FaTwitch size={25} />
      </div> */}
    </div>
  );
};

export default Icons;
