import React from "react";

import hotelBackgroundVideo from "../../assets/hero_video.mp4";
import Booking from "../../pages/Booking";

const HeroBackgroundVideo = () => {
  return (
    <div className="relative -top-16 sm:-top-24 lg:-top-40">
      <video autoPlay loop muted className="brightness-50 aspect-video">
        <source src={hotelBackgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroBackgroundVideo;
