import HTMLFlipBook from "react-pageflip";
import { useRef, useState, useEffect, useCallback } from "react";

export default function CaseFlipBook() {
  const book = useRef(null);
  const [width, setWidth] = useState(700);
  const [height, setHeight] = useState(600);
  const [page, setPage] = useState(0);

  const imgs = () => {
    const globImages = import.meta.glob("/src/assets/galeria_casos/Prancheta *.png", {
      eager: true,
    });

    const loadedImgs = Object.values(globImages)
      .map((module) => module.default)
      .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)[0]);
        const numB = parseInt(b.match(/\d+/)[0]);
        return numA - numB;
      });
  };

  const images = imgs();
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 800) {
        setWidth(320);
        setHeight(280);
      } else if (w < 1100) {
        setWidth(400);
        setHeight(350);
      } else if (w < 1480) {
        setWidth(550);
        setHeight(470);
      } else {
        setWidth(700);
        setHeight(600);
      }
    };
    let t;
    const debounced = () => {
      clearTimeout(t);
      t = setTimeout(handleResize, 30);
    };
    window.addEventListener("resize", debounced);
    handleResize();
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", debounced);
    };
  }, []);
  const onFlip = useCallback((e) => {
    setPage(e.data);
  }, []);
  return (
    <section>
      <HTMLFlipBook
        key={`${width}-${height}`}
        width={width}
        height={height}
        className="overflow-x-hidden overflow-y-hidden flex flex-col"
        usePortrait={width <= 390 ? true : false}
        onFlip={onFlip}
        useMouseEvents={true}
        ref={book}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Imagem de casos clínicos feitos pelo Dr. Maurício de Maio"
            loading="lazy"
          />
        ))}
      </HTMLFlipBook>
      <div className="flex flex-row gap-5 mb-10 mt-10 items-center justify-center">
        <button
          className="text-white font-bold h-8 bg-gray-950 px-5 rounded-4xl shadow-[0px_0px_10px_#ffcc66] hover:cursor-pointer hover:bg-[#9e7f41] transition-colors duration-500 border border-[#ffcc66]"
          onClick={() => {
            book.current.pageFlip().flipPrev();
          }}
        >
          Anterior
        </button>
        <p className="text-white">
          Página: {width <= 390 ? page : Math.floor(page / 2) + 1} de{" "}
          {width <= 390 ? images.length - 1 : Math.ceil(images.length / 2)}
        </p>
        <button
          className="text-white font-bold h-8 bg-gray-950 px-5 rounded-4xl shadow-[0px_0px_10px_#ffcc66] hover:cursor-pointer hover:bg-[#9e7f41] transition-colors duration-500 border border-[#ffcc66]"
          onClick={() => {
            book.current.pageFlip().flipNext();
          }}
        >
          Próximo
        </button>
      </div>
    </section>
  );
}
