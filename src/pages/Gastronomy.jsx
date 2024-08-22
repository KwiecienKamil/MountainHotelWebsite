import React from "react";
import gastronomy1 from "../assets/food.png";
import signatureDish1 from "../assets/signatureDish1.png";
import signatureDish2 from "../assets/signatureDish2.png";
import signatureDish3 from "../assets/signatureDish3.png";

const Gastronomy = () => {
  return (
    <div className="screen7:flex-row flex-col flex items-center gap-8 screen5:gap-16 bg-dark px-[2rem] screen3:px-[5rem] screen6:px-[9rem] text-light text-xl relative">
      <img
        src={gastronomy1}
        alt="People in our restaurant"
        className="w-[60%] screen7:w-[80%]"
      />
      <div className="flex flex-col gap-2  screen7:w-[60%]">
        <div>
          <h4 className="text-lg screen2:text-xl screen5:text-3xl screen7:text-5xl font-bold text-center">
            Savor the Mountain's Bounty
          </h4>
          <p className="pt-2 text-center text-accLight  text-xs px-4 screen3:px-0 screen3:text-sm screen7:text-md">
            Crafted with care, our dishes feature locally sourced ingredients
            prepared to perfection
          </p>
        </div>
        <div className="mt-4">
          <h5 className="font-semibold text-center text-sm screen4:text-md">
            Signature Dishes
          </h5>
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
