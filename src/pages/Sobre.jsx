import CarouselScroll from "../components/Carousel";
import { motion } from "motion/react";
import { aboutContent } from "../data/content";
import { useEffect } from "react";
import SplitText from "../../@/components/SplitText";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import imgDr from "../assets/about-dr.png";
import assinaturaDr from "../assets/Assinatura Dr GOLDEN.png";
import lineImg from "/line.png";

function Sobre() {
  const { hash } = useLocation();
  const [
    { title: titleDr, texts: descriptionDr },
    { title: titleClinic, texts: descriptionClinic },
  ] = aboutContent;

  useEffect(() => {
    if (!hash) return;
    setTimeout(() => {
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  }, [hash]);

  const [clinicImgs] = useMemo(() => {
    const clinic = [];
    for (let i = 1; i <= 9; i++) {
      clinic.push({
        id: i,
        url: new URL(`../assets/clinic_img/imagem${i}.jpg`, import.meta.url).href,
        alt: `Imagem Dr.${i}`,
      });
    }
    return [clinic];
  }, []);

  return (
    <section className="mt-30 flex flex-col justify-center gap-5 items-center py-10 overflow-hidden w-full bg-[#000000d3]">
      <SplitText
        text="Quem somos"
        className="text-3xl lg:text-4xl pb-5 font-semibold text-center relative z-40"
        delay={80}
        duration={0.7}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 30 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="100px"
        textAlign="center"
        showCallback
      />
      <motion.section id="dr" className="flex flex-col-reverse items-center justify-center lg:flex-row lg:justify-start w-[90%] h-auto lg:h-[80vh]">
        <div className="w-[80%] flex flex-col gap-5 items-center justify-center lg:justify-start mt-10 lg:w-[50vw] relative z-10 lg:px-10 shadow-[0px_-80px_50px_#000] lg:shadow-none">
          <motion.h1
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="text-md md:text-lg lg:text-xl whitespace-nowrap text-center font-bold bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent"
          >
            {titleDr}
          </motion.h1>
          <motion.h2
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap text-center"
          >
            Dr. Maurício de Maio
          </motion.h2>
          <motion.img
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
            src={lineImg}
            alt="Imagem de uma linha"
          />
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="text-center font-normal text-md md:text-lg lg:text-xl w-full"
          >
            {descriptionDr}
          </motion.p>
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="w-60 lg:w-70"
            src={assinaturaDr}
          />
        </div>
        <img className="lg:absolute lg:right-10 w-[70vw] brightness-85" src={imgDr} />
      </motion.section>

      <motion.section
      id="clinica"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
        viewport={{ once: true }}
        className="w-full flex flex-col items-center justify-center gap-5 h-auto lg:h-[80vh] mt-20"
      >
        <h1 className="text-md md:text-lg lg:text-xl whitespace-nowrap text-center font-bold bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent">
          {titleClinic}
        </h1>
        <CarouselScroll listImg={clinicImgs} />
        <p className="w-[80%] mt-7 text-center font-normal text-md md:text-lg lg:text-xl">
          {descriptionClinic}
        </p>
      </motion.section>
    </section>
  );
}

export default Sobre;
