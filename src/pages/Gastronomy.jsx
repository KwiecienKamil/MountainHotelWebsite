import React from "react";
import gastronomy1 from "../assets/food.png";
import signatureDish1 from "../assets/signatureDish1.png";
import signatureDish2 from "../assets/signatureDish2.png";
import signatureDish3 from "../assets/signatureDish3.png";

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
        <div className="mt-4">
          <h5 className="font-semibold text-center">Signature Dishes</h5>
          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-col items-center gap-2">
              <img src={signatureDish1} alt="Eggs on avocado" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={signatureDish2} alt="Burger with fries" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={signatureDish3} alt="Beef with rice" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gastronomy;
