import { motion } from "motion/react";
import SlideImg from "../components/SlideImg";
import "./styles/procedimentos.css";
import { procedimentos } from "../data/content";

function Procedimentos() {
  const list = procedimentos.find((v) => v.key == "procedimentosPage");

  const containerVariants = {
    hidden: { opacity: 0.3 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        ease: "easeOut",
        duration: 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };
  return (
    <section className="flex w-auto justify-center xl:items-center flex-col mt-20 h-full">
      <h1 className="sr-only">Procedimentos estéticos - Clínica Dr. Maurício de Maio</h1>
      <motion.div
        variants={containerVariants}
        className="w-full"
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* container pai */}
        {list.conteudo.map((v, i) => (
          // container do card
          <motion.div
            key={i}
            className="h-full mx-auto w-[90%] flex flex-row justify-center items-center my-7 border border-[#ffcc6648] shadow-[0px_0px_10px_rgba(255,204,102,0.8)] rounded-[40px] relative z-1 overflow-hidden"
            variants={itemVariants}
          >
            <div
              className={`bg-linear-to-r flex flex-col ${
                i % 2 == 0 ? "xl:flex-row-reverse" : "xl:flex-row"
              } items-center justify-center bg-[#00092]/10 backdrop-blur-lg min-h-full rounded-[40px]`}
            >
              <div className="flex flex-col items-center justify-center">
                <h4 className="metodo-h4">{v.metodo}</h4>
                <h3 className="text-[15px] md:text-[20px] px-10">{v.title}</h3>
                <p className=" w-full relative z-10 text-center mt-5 px-10">{v.text}</p>
              </div>
              <div className="flex flex-col w-full justify-center xl:w-[50%] xl:h-full container-shadow">
                <SlideImg img1={v.urlImg1} img2={v.urlImg2} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Procedimentos;
