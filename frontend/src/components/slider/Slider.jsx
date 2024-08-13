import { useState } from "react";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      setImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    } else {
      setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <div className="relative w-full h-[350px] flex gap-5 sm:h-[280px]">
      {imageIndex !== null && (
        <div className="absolute inset-0 bg-black flex justify-between items-center z-[9999]">
          <div className="flex-1 flex items-center justify-center cursor-pointer" onClick={() => changeSlide("left")}>
            <img src="/arrow.png" className="w-[50px] md:w-[30px] sm:w-[20px]" alt="" />
          </div>
          <div className="flex-10">
            <img src={images[imageIndex]} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="absolute top-0 right-0 text-white text-4xl font-bold p-12 cursor-pointer" onClick={() => setImageIndex(null)}>
            X
          </div>
          <div className="flex-1 flex items-center justify-center cursor-pointer">
            <img src="/arrow.png" className="w-[50px] rotate-180 md:w-[30px] sm:w-[20px]" alt="" />
          </div>
        </div>
      )}
      <div className="flex-3 sm:flex-2">
        <img src={images[0]} className="w-full h-full object-cover rounded-lg cursor-pointer" alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-5 sm:flex-1">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            className="h-[100px] rounded-lg cursor-pointer sm:h-[80px]"
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
