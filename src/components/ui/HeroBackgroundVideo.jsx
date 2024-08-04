import React from "react";

import hotelBackgroundVideo from "../../assets/hero_video.mp4";

const HeroBackgroundVideo = () => {
  return (
    <div className="relative h-[800px] overflow-hidden">
      <video autoPlay loop muted className="brightness-50">
        <source src={hotelBackgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroBackgroundVideo;
