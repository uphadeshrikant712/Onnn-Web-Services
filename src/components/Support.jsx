import React from "react";
import {
  MdOutlineComputer,
  MdOutlineSupportAgent,
  MdPerson,
} from "react-icons/md";
import GreenBtn from "./GreenBtn";

const Support = () => {
  const supportLinks = [
    {
      id: 1,
      title: "technical",
      subtitle: `Our highly skilled team is available around the clock to provide comprehensive assistance, ensuring smooth operation of your web services and timely resolution of any technical issues that arise.
     `,
      icon: <MdOutlineComputer size={25} />,
      class: "bg-red-200",
    },
    {
      id: 2,
      title: "sales",
      subtitle: `Our team offers customized strategies and comprehensive support to boost your sales initiatives. From market analysis to customer engagement, we're dedicated to maximizing the sales potential of your web services.
     `,
      class: "bg-yellow-200",
      icon: <MdOutlineSupportAgent size={25} />,
    },
    {
      id: 3,
      title: "general",
      subtitle: ` Offering design, development, hosting, and maintenance services tailored to your needs. We optimize your online presence for success, delivering comprehensive solutions to elevate your business in the digital landscape.
     `,
      class: "bg-green-200",
      icon: <MdPerson size={25} />,
    },
  ];
  return (
    <div name="support" className="mainDiv w-full h-fit bg-slate-300">
      <div className="flex flex-col max-w-screen-xl mx-auto px-3 py-12 items-center justify-center">
        <div className="px-4 py-12">
          <h2 className="capitalize text-5xl font-bold text-center">support</h2>
          <p className="text-xl py-8 text-gray-600 text-center">
            " Expert assistance whenever you need it, ensuring smooth operations
            and peace of mind for your web services."
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-12 sm:pt-2  text-black">
          {supportLinks.map(({ id, title, subtitle, icon }) => (
            <div
              key={id}
              className="bg-gray-900 text-white rounded-xl shadow-md shadow-lightColor hover:shadow-red-600 "
            >
              <div className="p-8">
                <div className="flex justify-center items-center w-16 h-16 p-4 bg-lightColor hover:bg-green-500 text-darkColor rounded-full mt-[-4rem]">
                  {icon}
                </div>
                <h3 className="text-2xl capitalize font-bold my-6">{title}</h3>
                <p className=" text-gray-300 text-base pb-12">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="btn flex justify-center items-center w-full ">
          <GreenBtn
            title="contact us"
            className=" capitalize px-6 py-3 w-1/2 my-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
