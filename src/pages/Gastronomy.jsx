import React from "react";
import gastronomy1 from "../assets/food.png";

const Gastronomy = () => {
  return (
    <div className="flex items-center gap-16 bg-dark px-[9rem] text-light text-xl relative">
      <img src={gastronomy1} alt="People in our restaurant" />
      <div className="flex flex-col gap-2 w-[60%]">
        <div>
          <h4 className="text-5xl font-bold text-center">
            Savor the Mountain's Bounty
          </h4>
          <p className="pt-2 text-center text-accLight">
            Crafted with care, our dishes feature locally sourced ingredients
            prepared to perfection
          </p>
        </div>
        <div className="mt-16">
          <h5 className="font-semibold text-center">Signature Dishes</h5>
          <div className="flex items-center justify-between mt-8">
            <div className="flex flex-col items-center gap-2">
              <img src="" alt="" />
              <p>XD</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="" alt="" />
              <p>XD</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="" alt="" />
              <p>XD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gastronomy;
