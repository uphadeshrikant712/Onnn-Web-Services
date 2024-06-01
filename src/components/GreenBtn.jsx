import React from "react";

const GreenBtn = ({ title, className, onClick }) => {
  return (
    <button className={"border bg-lightColor text-darkColor border-lightColor hover:bg-transparent hover:text-lightColor rounded-md duration-300 ease-out " + "" + className } onClick={onClick}>
      {title}
    </button>
  );
};

export default GreenBtn;
