import React from "react";

const ButtonLight = ({ title }) => {
  return (
    <button className="font-semibold px-4 py-2 bg-white text-black mt-1 rounded-xl hover:brightness-90 duration-300">
      {title}
    </button>
  );
};

export default ButtonLight;
