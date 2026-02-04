import { useState } from "react";

import arrow from "../assets/icon-arrow.png";
function SlideImg({ img1, img2 }) {
  const [slider, setSlider] = useState(50);

  const handleSliderChange = (e) => {
    setSlider(e.target.value);
  };

  return (
    <div className="h-100 xl:h-112.5 flex items-center justify-center min-w-full px-10">
      <div className="md:min-w-100 xl:min-w-100 overflow-hidden min-w-full h-full flex items-center justify-center relative z-50">
        <img
          src={img2}
          className="absolute md:min-w-99 top-1.5 h-full object-cover rounded-2xl"
        />
        <input
          type="range"
          min="0"
          max="100"
          value={slider}
          onChange={handleSliderChange}
          className="min-w-full relative h-full opacity-0 cursor-ew-resize z-50"
        />
        <div
          style={{ width: `${slider}%` }}
          className="absolute inset-y-0 left-0 overflow-hidden h-full"
        >
          <img
            src={img1}
            alt=""
            className="absolute w-75 sm:w-105 md:w-105 h-full inset-y-0 left-0 max-w-none object-cover rounded-2xl"
          />
        </div>
        <div
          className="absolute top-0 bottom-0 z-10 w-1 bg-white pointer-events-none"
          style={{ left: `calc(${slider}% - 2px)` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
            <img
              src={arrow}
              alt="Icone de flecha para o slider"
              className="p-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideImg;
