import React from "react";

const Location = () => {
  return (
    <div className="flex items-center justify-center flex-col screen7:flex-row gap-8 screen7:gap-16 py-8">
      <div>
        <h6 className="text-lg screen4:text-2xl screen6:text-5xl text-accLight font-bold">
          Where To Find Us?
        </h6>
        <p className="font-semibold text-gray-400 pt-2 text-xs screen4:text-sm screen6:text-md">
          Ciągłówka 7b/7c, 34-500 Zakopane
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5202.383155436764!2d19.959225122175763!3d49.310655487601785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715f31c276653db%3A0x51cb94c1015164c1!2sApartamenty%20Forma%20Tatrica!5e0!3m2!1sen!2spl!4v1723394359046!5m2!1sen!2spl"
        className="rounded-xl w-[85%] mr-2 screen3:pr-0 screen2:w-[70%] screen7:w-[600px] screen5:h-[450px] h-[350px]"
      ></iframe>
    </div>
  );
};

export default Location;
