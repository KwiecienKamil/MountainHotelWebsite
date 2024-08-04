import React from "react";
import hotelBackgroundVideo from "../assets/hero_video.mp4";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="relative h-[800px] overflow-hidden">
          <video autoPlay loop muted className="brightness-50">
            <source src={hotelBackgroundVideo} type="video/mp4" />
          </video>
        </div>
        <div className="absolute left-36 top-48 ">
          <p className="text-lg text-accLight font-semibold">It's Time For</p>
          <h1 className="text-[70px] font-bold text-white">
            Your Mountain<br></br>Escape
          </h1>
          <p className="text-sm text-white">
            Explore nearby hiking trails, enjoy seasonal outdoor activities, or
            simply unwind<br></br> by the fireplace in our cozy lounge. Our
            on-site restaurant serves delicious,<br></br> locally-sourced
            cuisine, perfect for savoring after a day of exploration.
          </p>
        </div>
        <div className="absolute w-full h-[100px] bottom-40 left-0 flex items-center justify-center gap-4 z-10">
          <div className="flex items-center justify-center gap-12 bg-white rounded-xl px-8 py-4">
            <div className="flex items-center gap-8">
              <h2 className="text-black font-semibold">
                Book Now<br></br>
                Your Ideal<br></br>
                <span className="underline">stay</span>
              </h2>
              <button className="">Check-In Date</button>
              <button>Check-Out Date</button>
            </div>
          </div>
          <button>Check Availability</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
