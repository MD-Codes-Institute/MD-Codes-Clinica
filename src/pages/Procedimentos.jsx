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
    <section className="flex w-auto justify-center xl:items-center flex-col bg-black mt-20 h-full">
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
            className="h-full mx-auto w-[90%] flex flex-row justify-center items-center my-7 border border-[#ffcc66a7] shadow-[0px_0px_10px_rgba(255,204,102,1)] rounded-[40px]  relative z-50 overflow-hidden"
            variants={itemVariants}
          >
            {i % 2 == 0 ? (
              <div className="bg-linear-to-r flex flex-col xl:flex-row items-center justify-center tracking-wide from-[#00000] to-[#464646] min-h-full rounded-[40px]">
                <div className="flex flex-col w-full justify-center xl:w-[50%] xl:h-full container-shadow">
                  <h4 className="metodo-h4">{v.metodo}</h4>
                  <h3 className="titulo-h3 text-[15px] md:text-[20px] px-10">{v.title}</h3>
                  <SlideImg img1={v.urlImg1} img2={v.urlImg2} />
                </div>
                <p className="relative z-50 p-15 w-full text-center">{v.text}</p>
              </div>
            ) : (
              <div className="bg-linear-to-l flex flex-col xl:flex-row items-center tracking-wide from-[#00000] to-[#464646] min-h-full rounded-2xl">
                <p className="hidden xl:flex relative z-50 w-full px-10 text-center">{v.text}</p>
                <div className="flex flex-col h-full container-shadow">
                  <h4 className="metodo-h4 ">{v.metodo}</h4>
                  <h3 className="titulo-h3 text-[15px] md:text-[20px] px-10">{v.title}</h3>
                  <SlideImg img1={v.urlImg1} img2={v.urlImg2} />
                </div>
                <p className="flex xl:hidden relative z-50 w-full p-15 text-center">{v.text}</p>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Procedimentos;
