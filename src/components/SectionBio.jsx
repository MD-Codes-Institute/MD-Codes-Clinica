import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import amwcPhoto from "../../public/amwc_photo.jpg";

function SectionBio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const variants = {
    hidden: {
      opacity: 0,
      filter: "blur(30px)",
      y: 100,
    },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8 } },
  };
  const rotateY = useTransform(scrollYProgress, [0, 0.5], [-30, 0]);
  return (
    <div className="w-[90vw] h-[60vh] flex flex-col xl:flex-row xl:items-center 2xl:items-start shadow-[0px_15px_40px_50px_rgba(0,0,0,1)] bg-black">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center min-h-full w-[50%] gap-10 bg-black shadow-[30px_0px_25px_20px_#000] relative z-50 px-10"
      >
        <h3 className="sm:text-2xl font-medium text-white text-start text-4xl relative z-50 w-full">
          Métodologia
          <span className="pl-2 bg-linear-to-b tracking-wide from-[#d18c00] to-[#ffe7b7] bg-clip-text text-transparent font-bold">
            <span>MD Codes</span>
          </span>
        </h3>
        <p>
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
      </motion.div>
      <motion.div className="w-[50%] h-full" ref={containerRef} style={{ perspective: "1000px" }}>
        <motion.img style={{ rotateY }} className="rounded-2xl" src={amwcPhoto} />
      </motion.div>
    </div>
  );
}

export default SectionBio;
