import { motion, useMotionValue } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { useLenis } from "lenis/react";
import Modal from "./Modal";

const SPRING_OPTIONS = {
  type: "spring",
  stiffness: 70,
  damping: 15,
  mass: 1,
};

function CarouselScroll({ listImg }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imgWidth, setImgWidth] = useState(40);
  const [imgIndex, setImgIndex] = useState(Math.floor(listImg.length / 2));

  const dragX = useMotionValue(0);
  const dragStartX = useRef(0);
  const lenis = useLenis();
  const DRAGG_REQUIRED = 10;

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImgWidth(80);
      } else if (window.innerWidth < 1024) {
        setImgWidth(60);
      } else {
        setImgWidth(40);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      lenis?.start();
    };
  }, [lenis]);

  const centerOffset = (100 - imgWidth) / 2;

  const onDragStart = () => {
    lenis?.stop();
    dragStartX.current = dragX.get();
  };

  const onDragEnd = (e) => {
    e.stopPropagation()
    lenis?.start();
    const x = dragX.get();

    if (imgIndex < listImg.length - 1 && x <= -DRAGG_REQUIRED) {
      setImgIndex((v) => v + 1);
    } else if (imgIndex > 0 && x > DRAGG_REQUIRED) {
      setImgIndex((v) => v - 1);
    }
  };

  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        onDragStart={onDragStart}
        onDragEnd={(e) => onDragEnd(e)}
        onPointerUp={() => lenis?.start()}
        onPointerCancel={() => lenis?.start()}
        style={{ x: dragX }}
        className="flex cursor-grab active:cursor-grabbing h-full"
        animate={{
          translateX: `${centerOffset - imgIndex * imgWidth}%`,
        }}
        transition={SPRING_OPTIONS}
      >
        <ImgContainer
          listImg={listImg}
          imgIndex={imgIndex}
          setImgIndex={setImgIndex}
          handleOpenModal={handleOpenModal}
          imgWidth={imgWidth}
        />
      </motion.div>
      {isModalOpen && (
        <Modal closeModal={handleCloseModal}>
          <img className="rounded-2xl" src={selectedImage} loading="lazy"/>
        </Modal>
      )}
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} listImg={listImg} />
    </div>
  );
}

function ImgContainer({ imgIndex, listImg, imgWidth, handleOpenModal }) {
  const handleImageClick = (e, url) => {
    e.stopPropagation();
    handleOpenModal(url);
  };

  return (
    <>
      {listImg.map((v, i) => (
        <motion.div
          key={i}
          onClick={(e) => handleImageClick(e, v.url)}
          className={`min-h-60 md:min-h-50 aspect-video shrink-0 rounded-xl bg-neutral-800 object-cover mt-10 cursor-drag`}
          style={{
            width: `${imgWidth}%`,
            backgroundImage: `url(${v.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{ scale: imgIndex === i ? 1 : 0.9 }}
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
