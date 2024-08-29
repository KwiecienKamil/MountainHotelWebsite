import React from "react";

import hotelBackgroundVideo from "../../assets/hero_video.mp4";

const HeroBackgroundVideo = () => {
  return (
    <div className="relative -top-[45px] screen1:-top-[52px]   screen2:-top-[66px]  screen3:-top-[80px] screen4:-top-[87px] screen5:-top-[110px] screen6:-top-36">
      <video autoPlay loop muted className="brightness-50 aspect-video">
        <source src={hotelBackgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroBackgroundVideo;
