import CarouselScroll from "../components/Carousel";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { aboutContent } from "../data/content";
import { useEffect } from "react";
import SplitText from "../../@/components/SplitText";
import { useMemo } from "react";

function Sobre() {
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef(null);

  const [drImgs, clinicImgs] = useMemo(() => {
    const dr = [];
    const clinic = [];
    for (let i = 1; i <= 9; i++) {
      dr.push({
        id: i,
        url: new URL(`../assets/dr_img/imagem${i}.jpg`, import.meta.url).href,
        alt: `Imagem Dr.${i}`,
      });
      clinic.push({
        id: i,
        url: new URL(`../assets/clinic_img/imagem${i}.jpg`, import.meta.url).href,
        alt: `Imagem Dr.${i}`,
      });
    }
    return [dr, clinic];
  }, []);

  useEffect(() => {
    const resizeScreen = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    const debounced = () => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(resizeScreen, 30);
    };
    window.addEventListener("resize", debounced);
    resizeScreen();
    return () => {
      window.removeEventListener("resize", debounced);
      clearTimeout(timerRef.current);
    };
  }, [isMobile]);
  return (
    <section className="mt-20 flex flex-col justify-center items-center gap-10 bg-black py-10 overflow-hidden h-auto lg:min-h-[90vh] ">
      <SplitText
        text="Conheça quem somos"
        className="text-3xl lg:text-4xl lg:pb-5 font-semibold text-center"
        delay={50}
        duration={0.7}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 30 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        showCallback
      />
      {aboutContent.map((item) => (
        <motion.aside
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.4 } }}
          className={`flex flex-col ${!isMobile && "flex-row"} w-full justify-center items-center`}
        >
          {(isMobile || item.id === "about clinic") && (
            <div className="w-full relative z-1 flex flex-col h-full items-center justify-center px-10 lg:px-20 gap-5 shadow-[50px_0px_35px_#000]">
              <h2 className="text-white mt-5 font-medium text-xl lg:text-3xl w-full">
                {item.title}
              </h2>
              <p className="text-white text-justify font-light">{item.texts}</p>
            </div>
          )}
          <div className="w-full lg:w-[50%]">
            <CarouselScroll listImg={item.id === "about dr" ? drImgs : clinicImgs} />
          </div>
          {!isMobile && item.id === "about dr" && (
            <div className="w-full relative z-1 flex flex-col h-full items-center justify-center px-10 lg:px-20 gap-5 shadow-[-50px_0px_50px_#000]">
              <h2 className="text-white mt-5 font-medium text-xl lg:text-3xl w-full">
                {item.title}
              </h2>
              <p className="text-white text-justify font-light">{item.texts}</p>
            </div>
          )}
        </motion.aside>
      ))}
    </section>
  );
}

export default Sobre;
