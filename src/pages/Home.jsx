import { motion, useScroll, useTransform } from "framer-motion";
import SectionCards from "../components/SectionCards";
import SectionBio from "../components/home/SectionBio";
import AnimatedCounter from "../components/global/AnimatedCounter";
import { counterItems } from "../data/content";

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
              initial={{ filter: "blur(10px)", translateY: -10, opacity: 0 }}
              animate={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ y: yText }}
              className="sm:text-5xl font-semibold bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent text-center text-3xl relative z-50 mt-30"
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
        {/* Section com os cards dos procedimentos*/}
        <SectionCards />
        {/* Section com o contador*/}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row w-full justify-center items-center gap-7 h-100 bg-[#0000007d] shadow-[0px_0px_100px_#000]"
        >
          {counterItems.map((value) => (
            <div
              className="flex flex-col items-center justify-center xl:items-end xl:justify-end"
              key={value.id}
            >
              <div
                className={`whitespace-nowrap flex flex-row ${
                  value.id === "Seringas" ? "grow" : "lg:min-w-75"
                } gap-1 lg:gap-2 items-center xl:justify-end`}
              >
                <p className="bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent text-3xl xl:text-5xl 2xl:text-6xl">
                  +
                </p>
                <div className="w-10 md:w-16 shrink-0 text-right">
                  <AnimatedCounter limit={value.limit} duration={value.duration} />
                </div>
                <p className="font-extrabold text-2xl xl:text-3xl 2xl:text-4xl bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent">
                  {value.qtd}
                </p>
                <p className="font-bold text-xl xl:text-2xl 2xl:text-4xl">{value.title}</p>
              </div>
              <p className="text-lg xl:text-xl 2xl:text-2xl">{value.phrase}</p>
            </div>
          ))}
        </motion.section>

        <section className="px-10 mb-20">
          <SectionBio />
        </section>
      </div>
    </div>
  );
}

export default Home;
