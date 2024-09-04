import React from "react";

const HeroHeading = () => {
  return (
    <div className="absolute left-[2rem] screen1:left-[5rem] top-[3rem] screen1:top-[5rem] screen2:top-[4rem]  screen3:top-[8rem] screen4:top-[7rem] screen5:top-[7.5rem] screen7:top-[10rem] screen7:left-36 text-light">
      <p className="text-[.5rem] screen2:text-[.8rem] screen6:text-lg text-accLight font-semibold ">
        It's Time For
      </p>
      <h1 className="text-[.8rem] screen1:text-[1.5rem] screen4:text-[2rem] screen7:text-[4rem] font-bold">
        Your Mountain<br></br>Escape
      </h1>
      <p className="text-[.7rem] screen4:text-sm hidden screen2:block">
        Explore nearby hiking trails, enjoy seasonal outdoor activities, or
        simply unwind<br></br> by the fireplace in our cozy lounge. Our on-site
        restaurant serves delicious,<br></br> locally-sourced cuisine, perfect
        for savoring after a day of exploration.
      </p>
    </div>
  );
};

export default HeroHeading;
