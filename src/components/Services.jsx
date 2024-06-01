import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Hosting",
      subtitle: `Hosting is where your website lives online. We provide secure, reliable, and fast hosting services to ensure your website is always accessible to your visitors.`,
    },
    {
      id: 2,
      title: "Responsive Web Design",
      subtitle:
        "  Crafting websites that adapt seamlessly to various devices and screen sizes, ensuring optimal user experience across desktops, tablets, and smartphones.",
    },
    {
      id: 3,
      title: "Search Engine Optimization (SEO)",
      subtitle:
        "  Implementing strategies to improve your website's visibility and ranking on search engines, driving organic traffic and maximizing online exposure.",
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      subtitle:
        "  Creating powerful e-commerce platforms with product catalogs, secure payments, inventory management, and order tracking for seamless online transactions.",
    },
  ];
  return (
    <div name="service" className="w-full h-fit md:h-screen bg-slate-300">
      <div className="heading flex flex-col items-center justify-center max-w-screen-xl mx-auto px-3 py-8 ">
        <h1 className="text-5xl font-bold text-center">Services</h1>
        <p className="text-xl py-8 text-gray-600 text-center">
          "Expert web development services tailored to you. We build, optimize,
          and maintain websites for your success."
        </p>
        <div className="cards grid md:grid-cols-2 pt-2 gap-4">
          {services.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="innerCard flex items-start bg-gray-900 p-4 text-white rounded-md"
            >
              <div className="upper">
                <FaChevronCircleRight
                  size={20}
                  className="text-lightColor mt-3 mr-4"
                />
              </div>
              <div className="text">
                <h3 className="pt-2 pb-4 font-bold text-lg capitalize text-lightColor">
                  {title}
                </h3>
                <p className="text-lg">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
