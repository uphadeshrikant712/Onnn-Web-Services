import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import GreenBtn from "./GreenBtn";
import PriceCard from "./PriceCard";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full h-fit text-white bg-gray-900">
      <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto  px-3 py-12  ">
        <div className="heading px-4 py-12 text-center">
          <h3 className="text-5xl capitalize font-bold">pricing</h3>
          <p className="text-xl text-gray-500 py-8">
            "Transparent Pricing. Affordable Plans. Your Success, Priced Right ! "
          </p>
        </div>
        <div className="priceCardStructure grid md:grid-cols-3">
          <PriceCard
            title="hobby"
            description="Perfect for personal projects or small ventures, enjoy essential features to kickstart your online presence affordably."
            price="55"
            features={[
              {
                id: 1,
                title: "feature one",
              },
              {
                id: 2,
                title: "feature two",
              },
              {
                id: 3,
                title: "feature three",
              },
              {
                id: 4,
                title: "feature four",
              },
              {
                id: 5,
                title: "feature five",
              },
            ]}
          />
          <PriceCard
            title="growth"
            description="Ideal for expanding ventures, unlock advanced features to scale your online presence and drive business growth effectively."
            price="69"
            features={[
              {
                id: 1,
                title: "feature one",
              },
              {
                id: 2,
                title: "feature two",
              },
              {
                id: 3,
                title: "feature three",
              },
              {
                id: 4,
                title: "feature four",
              },
              {
                id: 5,
                title: "feature five",
              },
            ]}
          />
          <PriceCard
            title="Explorer"
            description="Our Explorer Plan at $95/month offers advanced features for ambitious projects. Unleash your online potential today."
            price="95"
            features={[
              {
                id: 1,
                title: "feature one",
              },
              {
                id: 2,
                title: "feature two",
              },
              {
                id: 3,
                title: "feature three",
              },
              {
                id: 4,
                title: "feature four",
              },
              {
                id: 5,
                title: "feature five",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
