import React from "react";
import roomsGallery from "../assets/roomsGallery.png";

const Rooms = () => {
  return (
    <div className="relative -top-24 w-full px-[5em] screen7:px-[9rem] bg-dark flex flex-col items-center text-light">
      <div className="w-full flex items-center justify-between flex-col screen6:flex-row">
        <h2 className="py-8 font-bold text-lg screen2:text-2xl screen7:text-4xl">
          Enjoy an unforgettable stay<br></br> with the best charm
        </h2>
        <div className="w-full px-[1rem] screen3:px-[3rem] screen6:w-[40%]">
          <p className="text-[10px] screen2:text-xs screen5:text-sm screen7:text-md">
            Enjoy our serene spa treatments, stay active in our fully equipped
            fitness center, or take a refreshing dip in the pool. For the
            adventurers, we organize guided local tours, nature hikes, and
            exciting water sports.
          </p>
          <div className="mb-4 flex justify-center screen6:block">
            <button className="mt-2 px-3 py-1 screen6:px-4 screen7:py-2 text-light bg-accLight text-xs screen7:text-[15px] hover:brightness-90 duration-300">
              See more
            </button>
          </div>
        </div>
      </div>
      <img src={roomsGallery} alt="Rooms Gallery" />
    </div>
  );
};

export default Rooms;
