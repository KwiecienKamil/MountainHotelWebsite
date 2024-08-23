import React from "react";

const Gallery = () => {
  return (
    <div className="bg-dark pt-12">
      <h6 className="text-center text-3xl screen5:text-5xl font-bold text-light pb-12">
        Gallery
      </h6>
      <div className="flex animate-carouselMobile screen6:animate-carousel w-[2000px]">
        <div className="flex items-center gap-8 overflow-hidden">
          <div>
            <img
              src="https://images.pexels.com/photos/25713462/pexels-photo-25713462/free-photo-of-krajobraz-gory-hotel-las.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mountain Hideaway"
              className="max-w-[300px] hover:scale-115 duration-300"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mountain Hideaway"
              className="max-w-[300px] hover:scale-105 duration-300"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Mountain Hideaway"
              className="max-w-[300px] hover:scale-105 duration-300"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Mountain Hideaway"
              className="max-w-[300px] hover:scale-105 duration-300"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Mountain Hideaway"
              className="max-w-[300px]"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Mountain Hideaway"
              className="max-w-[300px] hover:scale-105 duration-300"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Mountain Hideaway"
              className="max-w-[300px] hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
      {/* Same carousel backwards*/}
      <div className="flex mt-16 pb-8 animate-carouselBackwards screen6:animate-carouselBackwards -translate-x-[160px] w-[2000px]">
        <div className="flex items-center gap-8 overflow-hidden">
          <div>
            <img
              src="https://images.pexels.com/photos/1076081/pexels-photo-1076081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mountain Hideaway"
              className="max-w-[300px] hover:scale-115 duration-300"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1292006/pexels-photo-1292006.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Mountain Hideaway"
              className="max-w-[300px] hover:scale-105 duration-300"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/6474588/pexels-photo-6474588.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Mountain Hideaway"
              className="max-w-[300px] hover:scale-105 duration-300"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mountain Hideaway"
              className="max-w-[300px] hover:scale-105 duration-300"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mountain Hideaway"
              className="max-w-[300px]"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mountain Hideaway"
              className="max-w-[300px] hover:scale-105 duration-300"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mountain Hideaway"
              className="w-[300px] h-[200px] hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
