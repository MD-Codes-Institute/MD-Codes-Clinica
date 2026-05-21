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
    <div className="w-screen xl:w-[90vw] h-auto md:min-h-[90vh] xl:h-[60vh] flex flex-col xl:flex-row-reverse xl:items-center 2xl:items-start py-10 bg-[#00092]/10 backdrop-blur-lg rounded-2xl">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center min-h-full w-full xl:w-[70%] relative z-50 md:px-10"
      >
        <h3 className="text-xl md:text-3xl pl-2 bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent font-bold">
          MD Codes
        </h3>
        <h4 className="font-garamond text-[45px] md:text-[85px] whitespace-nowrap text-center tracking-wider">
          CIÊNCIA E ARTE
        </h4>
        <img src={lineImg} alt="Imagem de uma linha" />
        {/* Imagem que so aparece em navegação mobile*/}
        <motion.img
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex xl:hidden rounded-[40px] h-120 lg:h-140 mb-10"
          src={imgDr}
        />
        {/* fim da imagem mobile */}
        <p className="text-white text-center text-[16px] md:text-[20px] font-light px-5 md:px-0">
          MD Codes™ é uma metodologia avançada de avaliação e tratamento facial criada pelo Dr.
          Maurício de Maio, referência mundial em injetáveis.
          <br />
          <br />
          Baseado em uma linguagem precisa de pontos anatômicos, o método permite compreender o
          rosto de forma global, identificando suas necessidades estruturais, emocionais e
          funcionais.
          <br />
          <br />
          Mais do que tratar sinais isolados, o MD Codes™ guia o profissional na construção de
          planos individualizados, com resultados naturais, estratégicos e alinhados à verdadeira
          expressão de cada paciente.
        </p>

        <div className="pt-20 flex flex-row gap-10 md:gap-30 w-full md:w-[70%]">
          <div className="flex flex-col gap-2">
            <NavigateButton route="/sobre#clinica" buttonName="Clinica" />
            <img src={lineImg} alt="Imagem de uma linha" />
          </div>
          <div className="flex flex-col gap-2">
            <NavigateButton route="/sobre#dr" buttonName="Dr. Maurício de Maio" />
            <img src={lineImg} alt="Imagem de uma linha" />
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
          src={imgDr}
        />
      </motion.div>
    </div>
  );
}

export default SectionBio;
