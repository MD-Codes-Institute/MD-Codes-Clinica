import { motion, useScroll, useTransform } from "framer-motion";

import SectionCards from "../components/SectionCards";
import SectionBio from "../components/SectionBio";
function Home() {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 800], [0, 150]);
  const yText = useTransform(scrollY, [0, 800], [0, -150]);
  return (
    <div>
      <div className="relative flex items-center flex-col overflow-hidden">
        <div className="relative flex justify-center items-end pb-30 md:items-center md:justify-center h-screen w-full overflow-hidden">
          {/* section principal com mensagem de boas-vindas */}
          <div>
            {/* Imagem de fundo DR. */}
            <motion.img
              style={{ y: yImage }}
              src="/MD Codes 10_Photo.jpeg"
              alt="Imagem do Dr. da Clinica"
              className="w-full absolute z-10 brightness-70 sm:brightness-70 md:brightness-100 md:w-1/3 left-0 top-25 h-screen object-cover shadow-[0px_10px_70px_150px_rgba(0,0,0,1)]"
            />
            {/* Mensagem de boas vindas */}
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ y: yText }}
              className="sm:text-5xl font-semibold bg-linear-to-b tracking-wide from-[#d18c00] to-[#ffe7b7] bg-clip-text text-transparent text-center text-4xl relative z-50 mt-30"
            >
              Bem-vindos
              <span className="text-white font-light">
                <span></span> a Clínica <br />
                Dr. Maurício de Maio
              </span>
            </motion.h1>
          </div>

          {/* fim da section com os cards de procedimentos */}
        </div>

        <SectionCards />
        <div className="px-10">
          <SectionBio bioKey={"bioDrHome"} />
        </div>
      </div>
    </div>
  );
}

export default Home;
