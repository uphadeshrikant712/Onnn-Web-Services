import React from "react";

const About = () => {
  const details = [
    {
      id: 1,
      title: "99.99%",
      subtitle: "upwork",
    },
    {
      id: 2,
      title: "24/7",
      subtitle: "customer support",
    },
    {
      id: 3,
      title: "10GB",
      subtitle: "free storage",
    },
    {
      id: 4,
      title: "domain",
      subtitle: "free with storage",
    },
    {
      id: 5,
      title: "Identity",
      subtitle: "Online Identity",
    },
    {
      id: 6,
      title: "Vision",
      subtitle: "Company Goals",
    },
  ];
  return (
    <div
      name="about"
      className="w-full h-fit md:h-screen bg-gray-900 text-white"
    >
      <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            By <span className="text-lightColor"> Developers</span> for{" "}
            <span className=" text-lightColor">Developers</span>
          </h2>
          <p className=" text-xl font-light py-8 text-gray-500 ">
            'Empower your online success. Expert web solutions from design to deployment.'
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 px-2 w-full">
          {details.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="flex items-center justify-center odd:skew-x-12 even:-skew-x-12 hover:skew-x-0 duration-300 "
            >
              <div className="flex flex-col items-center justify-center md:w-[12vw] md:h-[25vh] w-[60vw] h-[35vh] py-8 rounded-full shadow-lg shadow-lightColor capitalize">
                <p className="text-lightColor font-bold md:text-3xl text-5xl ">
                  {title}
                </p>
                <p className="mt-2 text-gray-500 md:text-sm text-lg">
                  {subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
