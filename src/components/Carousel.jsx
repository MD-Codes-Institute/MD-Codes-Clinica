import { motion, scale, useMotionValue } from "motion/react";
import { useState, useRef } from "react";
import { procedimentos } from "../data/content";

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 300,
  damping: 100,
};

function CarouselScroll({ listImg }) {
  const [imgIndex, setImgIndex] = useState(Math.floor(listImg.length / 2));
  const [drag, setDrag] = useState(false);
  const dragX = useMotionValue(0);
  const testRef = useRef(null)
  const DRAGG_REQUIRED = 10;

  const onDragStart = () => {
    setDrag(true);
  };
  const onDragEnd = () => {
    setDrag(false);
    const x = dragX.get();
    if (imgIndex < listImg.length - 1 && x <= -DRAGG_REQUIRED) {
      setImgIndex((v) => v + 1);
      console.log("advanced");
    } else if (imgIndex > 0 && x > DRAGG_REQUIRED) {
      setImgIndex((v) => v - 1);
      console.log("go back");
    }
  };

  return (
    <div className="relative overflow-hidden border-amber-900 w-full">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        style={{ x: dragX }}
        className="flex cursor-grab active:cursor-grabbing h-full"
        animate={{
          translateX:
            window.innerWidth >= 768
              ? `${30 - imgIndex * 40}%`
              : `${20 - imgIndex * 60}%`,
        }}
      >
        <ImgContainer
          listImg={listImg}
          imgIndex={imgIndex}
          setImgIndex={setImgIndex}
          testRef={testRef}
        />
      </motion.div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} listImg={listImg} />
    </div>
  );
}

function ImgContainer({ imgIndex, setImgIndex, listImg,testRef }) {
  return (
    <>
      {listImg.map((v, i) => (
        <motion.div
        ref={testRef}
          key={i}
          className="md:w-[40%] w-[60%] min-h-60 md:min-h-50 aspect-video shrink-0 rounded-xl bg-neutral-800 object-cover"
          style={{
            backgroundImage: `url(${v.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{ scale: imgIndex === i ? 0.95 : 0.75 }}
          onClick={() => setImgIndex(i)}
          transition={{ ...SPRING_OPTIONS, duration: 0.5 }}
        />
      ))}
    </>
  );
}

function Dots({ imgIndex, setImgIndex, listImg }) {
  return (
    <div className=" mt-4 gap-2 flex justify-center rounded-4xl">
      {listImg.map((_, i) => (
        <button
          key={i}
          onClick={() => setImgIndex(i)}
          className={`h-3 w-3 rounded-full transition-colors hover:cursor-pointer ${
            i === imgIndex ? "bg-neutral-50" : "bg-neutral-400"
          }`}
        />
      ))}
    </div>
  );
}

export default CarouselScroll;
