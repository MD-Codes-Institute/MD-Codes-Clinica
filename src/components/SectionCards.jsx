import { useTransform, useScroll, motion } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { procedimentos } from "../data/content";

function SectionCards() {
  const list = procedimentos.find((v) => v.key == "homePage");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      id="procedimentos"
      ref={ref}
      className="w-full bg-transparent max-w-full overflow-y-hidden xl:overflow-x-hidden mt-20 flex items-center h-auto justify-center flex-col"
    >
      <h2
        className="text-3xl md:text-4xl mb-10 text-white text-center font-bold scale-100"
        style={{ textShadow: "0px 2px 5px rgba(255,204,102,1)" }}
      >
        Procedimentos
      </h2>
      <div
        className="flex 
        overflow-x-auto 
        snap-x 
        snap-mandatory 
        w-full 
        justify-between
        /* Configuração para Telas Grandes (XL para cima) */
        xl:overflow-x-auto
        2xl:overflow-x-hidden 
        xl:snap-none 
        xl:justify-center 
        xl:px-0
        xl:w-full
        items-end"
      >
        {list.conteudo.map((v) => (
          <motion.div
            style={{ scale: scrollProgress }}
            key={v.title}
            className="flex-none w-80 pb-5 md:flex md:p-5 snap-center items-center flex-col md:w-80 xl:w-82.5 2xl:w-90"
          >
            <h4 className="text-center text-[1em] font-semibold bg-(image:--font-gradient) bg-clip-text text-transparent">
              {v.metodo}
            </h4>
            <h3 className="text-center md:text-xl mb-5 text-white font-light whitespace-nowrap">
              {v.title}
            </h3>
            <div className="flex items-center mx-3 shadow-[0_0px_10px_2px_rgba(255,204,102,.7)] md:shadow-[0_0px_15px_2px_rgba(255,204,102,1)] rounded-2xl">
              <Link to="/procedimentos" aria-label={`Ver procedimento: ${v.title}`}>
                <img
                  src={v.urlImg}
                  alt={v.title}
                  className="h-96 w-auto object-cover rounded-2xl"
                  loading="lazy"
                />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="text-[20px] mt-10"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, cursor: "pointer" }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/procedimentos">Veja mais</Link>
      </motion.div>
    </motion.div>
  );
}

export default SectionCards;
