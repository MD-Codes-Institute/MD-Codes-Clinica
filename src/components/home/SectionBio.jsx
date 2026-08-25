import { motion } from "framer-motion";
import { useRef } from "react";
import imgDr from "/metodologia.jpg";
import NavigateButton from "../global/NavigationButton";
import lineImg from "/line.png";
function SectionBio() {
  const containerRef = useRef(null);
  const variants = {
    hidden: {
      opacity: 0,
      filter: "blur(30px)",
      y: 100,
    },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="w-screen xl:w-[90vw] flex flex-col xl:flex-row-reverse xl:items-center 2xl:items-start py-10 bg-[#00092]/10 backdrop-blur-lg rounded-2xl">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center min-h-full w-full xl:w-[70%] relative z-50 md:px-10"
      >
        <h2 className="text-xl md:text-3xl pl-2 bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent font-bold">
          MD Codes™
        </h2>
        <h3 className="font-garamond text-[45px] md:text-[85px] whitespace-nowrap text-center tracking-wider">
          CIÊNCIA E ARTE
        </h3>
        <img src={lineImg} alt="" aria-hidden="true" loading="lazy" />
        {/* Imagem que so aparece em navegação mobile*/}
        <motion.img
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          alt="Imagem do Dr. Maurício de Maio"
          className="flex xl:hidden rounded-[40px] h-120 lg:h-140 mb-10"
          src={imgDr}
        />
        {/* fim da imagem mobile */}
        <p className="text-white text-center text-[16px] md:text-[20px] font-light px-5 md:px-0">
          MD Codes™ é uma metodologia de tratamento facial criada pelo Dr. Maurício de Maio,
          referência mundial em injetáveis, que transformou a forma de avaliar, compreender e tratar
          o rosto.
          <br />
          <br />
          Porque cada rosto é único, cada tratamento também deve ser.
          <br />
          <br />
          Mais do que corrigir linhas ou tratar áreas isoladas, o MD Codes™ permite uma avaliação
          global da face, identificando o que pode ser valorizado, equilibrado ou restaurado de
          acordo com as características e necessidades de cada paciente.
          <br />
          <br />O resultado é um tratamento verdadeiramente personalizado: estratégico, preciso e
          pensado para realçar sua beleza com naturalidade, preservar sua identidade e respeitar
          tudo aquilo que torna o seu rosto único.
        </p>

        <div className="pt-20 flex flex-row gap-10 md:gap-30 w-full md:w-[70%]">
          <div className="flex flex-col gap-2">
            <NavigateButton route="/sobre#clinica" buttonName="Clínica" />
            <img src={lineImg} alt="" aria-hidden="true" loading="lazy" />
          </div>
          <div className="flex flex-col gap-2">
            <NavigateButton route="/sobre#dr" buttonName="Dr. Maurício de Maio" />
            <img src={lineImg} alt="" aria-hidden="true" loading="lazy" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full hidden xl:w-[50%] xl:flex justify-center items-center h-full -mr-40"
        ref={containerRef}
        style={{ perspective: "1000px" }}
      >
        <motion.img
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-[40px] h-180 shadow-[0px_0px_90px_100px_#000]"
          loading="lazy"
          src={imgDr}
          alt="Imagem do Dr. Maurício de Maio"
        />
      </motion.div>
    </div>
  );
}

export default SectionBio;
