import { motion } from "framer-motion";
import { counterItems } from "../data/content";
import iconWhats from "../assets/Whatsapp Simbolo.png";
import SectionCards from "../components/SectionCards";
import SectionBio from "../components/home/SectionBio";
import AnimatedCounter from "../components/global/AnimatedCounter";

function Home() {
  return (
    <div className="overflow-x-hidden flex flex-col items-center justify-center gap-20">
      <section className="min-h-screen flex flex-col items-center justify-end gap-5 xl:flex-row xl:items-center xl:justify-start bg-black w-full xl:bg-transparent! mt-25">
        <img
          src="/MD Codes 10_Photo.jpeg"
          alt="Imagem do Dr. Maurício de Maio"
          className="img-dr"
          loading="lazy"
        />
        <motion.div
          initial={{ filter: "blur(10px)", translateY: -10, opacity: 0 }}
          animate={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-1 z-50 flex-2 min-w-100 max-w-200 px-5 md:ml-20 md:px-0 -mt-70 xl:mt-0 bg-[#000000] shadow-[0px_0px_50px_50px_#000]"
        >
          <h1 className="text-3xl sm:text-5xl text-start font-semibold flex flex-col z-50">
            A ciência por trás da
            <span className="bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent">
              Beleza natural
            </span>
          </h1>
          <p className="text-white text-xl pt-5">
            Descubra o que acontece quando experiência, precisão e sensibilidade estética se unem em
            um tratamento verdadeiramente personalizado.
            <br />
            <br />
            Na Clínica Dr. Maurício de Maio, cada detalhe é cuidadosamente planejado para valorizar
            suas características, respeitar sua identidade e alcançar resultados naturais, elegantes
            e sofisticados.
            <br />
            <br />
            Porque a verdadeira excelência está em transformar com sutileza, realçando o que há de
            melhor em você sem revelar exatamente o que mudou.
          </p>
          <div className="flex flex-col gap-5 w-full items-start justify-center pt-5">
            <div className="flex flex-row gap-5 w-full">
              {/* Botoes de navegação */}
              <a
                className="w-full cursor-pointer max-w-50 md:max-w-70 flex items-center justify-center rounded-md h-10 md:h-12 bg-linear-to-b tracking-wide from-[#AF761B] to-[#b38c3f] hover:scale-95 transition-all duration-300 text-[12px] md:text-[18px] gap-5 text-center text-white font-bold"
                href={`https://wa.me/${5511989464298}?text=${encodeURIComponent(
                  "Olá, gostária de mais informações..."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iconWhats} className="h-6" alt="" aria-hidden="true" loading="lazy" />
                Entre em contato
              </a>
              <button
                className="w-full cursor-pointer max-w-70 whitespace-nowrap text-[12px] md:text-[18px] font-bold h-10 md:h-12 border border-[#ffcc66] rounded-md hover:scale-95 hover:shadow-[0px_0px_10px_#ffcc66] transition-all duration-250"
                onClick={() => {
                  const element = document.querySelector("#procedimentos");
                  element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Conheça os procedimentos
              </button>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Section com os cards dos procedimentos*/}
      <SectionCards />
      {/* Section com o contador*/}
      <h2 className="text-[25px] md:text-[30px] font-bold gap-3 flex flex-col xl:flex-row items-center text-center relative z-50">
        <img src="/line.png" className="hidden xl:flex md:max-w-60 h-2" alt="" aria-hidden="true" loading="lazy" />
        <span className="bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent whitespace-nowrap">
          MD Codes,{" "}
        </span>
        confiança que se constrói com resultados
        <img src="/line.png" className="hidden xl:flex md:max-w-60 h-2" alt="" aria-hidden="true" loading="lazy" />
      </h2>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-5 md:gap-10 w-full md:w-[90%] bg-[#00000077] shadow-[0px_0px_100px_#000] mb-20 place-items-center"
      >
        {counterItems.map((value) => (
          <article
            key={value.id}
            className="flex flex-row gap-2 items-center justify-center min-h-50"
          >
            <img src={value.imgUrl} className="h-12.5 md:h-full" alt={value.id} loading="lazy" />
            <div className="flex flex-col justify-center items-start min-h-25">
              <div className="whitespace-nowrap flex flex-row justify-center items-center gap-1 md:gap-2 text-[25px] xl:text-[30px] font-bold bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent">
                {value.id === "Países" && (
                  <span className="text-[1.2rem] xl:text-[30px]">MD Codes presente em </span>
                )}
                {value.limit && (
                  <span className="min-w-10 md:min-w-15 text-center text-[25px] xl:text-[30px]">
                    +
                    <AnimatedCounter limit={value.limit} duration={value.duration} />
                  </span>
                )}
                <span className="text-[25px] xl:text-[30px]">{value.qtd ?? "países"}</span>
                <h3 className="text-[25px] xl:text-[30px]">{value.title ?? ""}</h3>
              </div>
              <h4 className="text-[1.2rem] xl:text-[20px]">{value.phrase}</h4>
            </div>
          </article>
        ))}
      </motion.section>

      <section className="px-10 mb-20">
        <SectionBio />
      </section>
    </div>
  );
}
export default Home;
