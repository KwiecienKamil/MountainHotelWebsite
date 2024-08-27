import React from "react";
import { imagesArray } from "../utils/Helpers";
import { imagesArray2 } from "../utils/Helpers";

const Gallery = () => {
  return (
    <div className="bg-dark py-12" id="gallery">
      <h6 className="text-center text-3xl screen5:text-5xl font-bold text-light pb-12">
        Gallery
      </h6>
      <div className="overflow-hidden">
        <div className="flex items-center gap-4 animate-carousel  whitespace-nowrap hover:animation">
          {imagesArray.map((image) => (
            <img
              src={image.src}
              alt={image.altText}
              className="h-[100px] screen5:h-[200px]"
            ></img>
          ))}
        </div>
      </div>
      <div className="overflow-hidden mt-8">
        <div className="flex items-center gap-4 animate-carouselBackwards whitespace-nowrap hover:animation translate-x-[-100%]">
          {imagesArray2.map((image) => (
            <img
              src={image.src}
              alt={image.altText}
              className="h-[100px] screen5:h-[200px]"
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
