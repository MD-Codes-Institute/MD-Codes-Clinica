import CarouselScroll from "../components/Carousel";
import imgDr from "/dr_img/imagem11.jpg";
import assinaturaDr from "../assets/Assinatura Dr GOLDEN.png";
import { motion } from "motion/react";

function Sobre() {
  const listImg = [];

  for (let i = 1; i <= 17; i++) {
    listImg.push({
      id: i,
      url: `/dr_img/imagem${i}.jpg`,
      alt: `Imagem Dr.${i}`,
    });
  }

  return (
    <section className="mt-20 flex flex-col justify-center items-center bg-black pb-10 overflow-hidden">
      <h1 className="hidden md:flex bg-linear-to-b tracking-wide from-[#ffaa00] to-[#ffd684] pt-15 bg-clip-text text-transparent px-10 text-5xl font-bold relative z-10">
        Dr. <span className="text-white ">Maurício de Maio</span>
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center h-full w-[90%]">
        <h1 className="flex justify-center items-center gap-1 md:hidden py-5 bg-linear-to-b tracking-wide from-[#ffaa00] text-3xl to-[#ffd684] bg-clip-text text-transparent font-bold ">
          Dr. <span className="text-white ">Maurício de Maio</span>
        </h1>
        <motion.img
          src={imgDr}
          alt="Imagem Dr. Bio"
          className="md:min-w-[40%] min-w-full min-h-[50vh] md:min-h-[80vh] object-cover rounded-4xl shadow-[-1px_0px_15px_1px_rgba(255,204,102,1)]"
          initial={{ opacity: 0.5, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "InOut" }}
        />
        <div className="md:h-screen">
          <motion.p
            className="xl:px-20 min-w-[50vw] text-center md:text-justify text-[18px] xl:py-0 xl:text-xl h-full bg-black flex items-center justify-start shadow-[20px_30px_50px_90px_rgba(0,0,0,1)]"
            initial={{ opacity: 0.5, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Dr. Mauricio de Maio é um cirurgião plástico brasileiro reconhecido internacionalmente
            por sua contribuição à medicina estética e ao desenvolvimento de técnicas avançadas com
            injetáveis. Ao longo de sua carreira, tornou-se uma das principais referências mundiais
            no ensino da avaliação facial, planejamento de tratamento e aplicação estratégica de
            preenchedores.
            <br />
            <br />
            Ele é o criador dos MD Codes™, uma metodologia que transformou a forma como os
            profissionais analisam e tratam a face. Mais do que pontos de aplicação, os MD Codes™
            propõem uma linguagem estruturada para compreender as necessidades de cada paciente,
            respeitando anatomia, proporções, expressões e mensagens emocionais transmitidas pelo
            rosto.
            <br />
            <br />
            Com uma abordagem precisa, didática e altamente estratégica, Dr. de Maio impactou
            milhares de médicos ao redor do mundo, ajudando a elevar o padrão dos tratamentos
            estéticos com resultados mais naturais, seguros e individualizados.
          </motion.p>
        </div>
      </div>

      <img
        src={assinaturaDr}
        alt="Imagem da Assinatura do Dr."
        className="md:w-[30%] w-90  py-25 object-cover"
      />
      <CarouselScroll listImg={listImg} />
    </section>
  );
}

export default Sobre;
