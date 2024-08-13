import React from "react";

import hotelBackgroundVideo from "../../assets/hero_video.mp4";
import Booking from "../../pages/Booking";

const HeroBackgroundVideo = () => {
  return (
    <div className="relative overflow-hidden">
      <video autoPlay loop muted className="brightness-50">
        <source src={hotelBackgroundVideo} type="video/mp4" />
      </video>
      <Booking />
    </div>
  );
};

export default HeroBackgroundVideo;
