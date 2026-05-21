import { useTransform, useScroll, motion } from "motion/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { procedimentos } from "../data/content";

function SectionCards() {
  const list = procedimentos.find((v) => v.key == "homePage");
  const navigate = useNavigate();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      className="w-full bg-transparent max-w-full xl:overflow-x-hidden h-[90vh] flex items-center justify-center flex-col"
    >
      <h2
        className="text-4xl mb-10 text-white bg-clip-text text-center font-bold scale-100"
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
        xl:overflow-x-hidden
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
            className="flex-none w-80 h-auto pb-5  md:flex md:p-5 snap-center items-center flex-col md:w-80 xl:w-87.5  2xl:w-96"
          >
            <h4 className="text-center font-semibold  bg-(image:--font-gradient) bg-clip-text text-transparent">
              {v.metodo}
            </h4>
            <h3 className="text-center md:text-xl mb-5 text-white font-light whitespace-nowrap">{v.title}</h3>
            <div className="flex items-center mx-3 shadow-[0_0px_10px_2px_rgba(255,204,102,.7)] md:shadow-[0_0px_15px_2px_rgba(255,204,102,1)] rounded-2xl">
              <img
                src={v.urlImg}
                onClick={() => navigate("/procedimentos")}
                alt="Imagem do procedimento"
                className="h-96 w-auto object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="text-[20px] mt-10 border-b-2 border-[#FFCC66]"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, cursor: "pointer" }}
        whileTap={{scale: 0.9}}
      >
        <Link to="/procedimentos">Veja mais</Link>
      </motion.div>
    </motion.div>
  );
}

export default SectionCards;
