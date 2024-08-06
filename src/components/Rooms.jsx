import React from "react";
import roomsGallery from "../assets/roomsGallery.png";

const Rooms = () => {
  return (
    <div className="relative -top-24 w-full px-[9rem] bg-dark pt-24 flex flex-col items-center text-light pb-8">
      <div className="w-full flex items-center justify-between">
        <h2 className="py-16 font-bold text-4xl">
          Enjoy an unforgettable stay<br></br> with the best charm
        </h2>
        <div className="w-[40%] mt-4">
          <p className="text-md">
            Enjoy our serene spa treatments, stay active in our fully equipped
            fitness center, or take a refreshing dip in the pool. For the
            adventurers, we organize guided local tours, nature hikes, and
            exciting water sports.
          </p>
          <button className="mt-2 px-4 py-2 text-light bg-accLight hover:brightness-90 duration-300">
            See more
          </button>
        </div>
      </div>
      <img src={roomsGallery} alt="Rooms Gallery" />
    </div>
  );
};

export default Rooms;
