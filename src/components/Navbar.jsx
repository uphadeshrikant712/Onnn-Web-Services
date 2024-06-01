import React, { useState } from "react";
import GreenBtn from "./GreenBtn";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitch,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Icons from "./Icons";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "service",
    },
    {
      id: 3,
      link: "about",
    },
    {
      id: 4,
      link: "support",
    },
    {
      id: 5,
      link: "pricing",
    },
  ];

  return (
    <div className=" w-screen h-20 z-20 fixed bg-gray-900 text-white  ">
      <div className="px-3 flex items-center justify-between w-full h-full ">
        <div className="flex items-center">
          <h1 className=" text-4xl font-bold capitalize">onnn</h1>
        </div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="capitalize cursor-pointer p-4 hover:text-lightColor duration-300 "
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="signIn hidden md:flex ">
          <GreenBtn title="sign in" className={"px-9 py-3"} />
        </div>

        {/*------------------------ three dots button---------------------- */}
        <div className="md:hidden">
          <div
            onClick={() => setNavigation(true)}
            className="p-3 cursor-pointer"
          >
            <FaBars size={30} />
          </div>
        </div>
      </div>
     
      {/* ----------------Mobile menu ---------------------------------- */}
     
      <div
        className={
          navigation
            ? "w-full md:hidden h-full fixed left-0 top-0  bg-gray-900/70 backdrop-blur"
            : ""
        }
      >
        {/* ------------------------Mobile Menu Inner Part-------------------------------- */}
        <div
          className={
            navigation
              ? "w-4/5 h-full bg-gray-900 fixed left-0 top-0 p-10 text-white ease-in duration-500 "
              : "fixed top-0 left-[-100%] h-full p-10 duration-300"
          }
        >
          <div className="flex items-center justify-between">
            <h2
              onClick={() => setNavigation(false)}
              className="text-3xl font-bold capitalize cursor-pointer"
            >
              onnn
            </h2>
            <div
              onClick={() => setNavigation(false)}
              className="x-icon p-3 cursor-pointer "
            >
              <FaTimes size={30} />
            </div>
          </div>
          {/* Sign in button and other things  */}

          <div className="flex flex-col mt-12 h-fit gap-4">
            <GreenBtn className=" px-9 py-3 capitalize" title="sign in" />
            <ul className="capitalize ">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="cursor-pointer py-2 tracking-wider text-2xl"
                >
                  <Link onClick={() => setNavigation(false)} to={link} smooth duration={500}
                  offset={-75}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <Icons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
