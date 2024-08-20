import React from "react";

const HeroHeading = () => {
  return (
    <div className="absolute left-[2rem] screen1:left-[5rem] top-[4rem] screen1:top-[5rem]  screen3:top-[8rem] screen4:top-32 screen7:left-36 screen5:top-40 text-light">
      <p className="text-xs screen6:text-lg text-accLight font-semibold ">
        It's Time For
      </p>
      <h1 className="text-[1rem] screen4:text-[2rem] screen7:text-[4rem] font-bold">
        Your Mountain<br></br>Escape
      </h1>
      <p className="text-[10px] screen4:text-sm hidden screen2:block">
        Explore nearby hiking trails, enjoy seasonal outdoor activities, or
        simply unwind<br></br> by the fireplace in our cozy lounge. Our on-site
        restaurant serves delicious,<br></br> locally-sourced cuisine, perfect
        for savoring after a day of exploration.
      </p>
    </div>
  );
};

export default HeroHeading;
