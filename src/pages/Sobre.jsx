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
        <h1 className="flex md:hidden p-5 bg-linear-to-b tracking-wide from-[#ffaa00] text-3xl to-[#ffd684] bg-clip-text text-transparent font-bold ">
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
            className="xl:px-20 min-w-[60%] text-center md:text-justify text-[18px] xl:py-0 xl:text-xl h-full bg-black flex items-center justify-start shadow-[20px_30px_50px_90px_rgba(0,0,0,1)]"
            initial={{ opacity: 0.5, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, saepe
            iste. Perferendis temporibus, dolorem incidunt, harum consequatur
            asperiores laborum tempora voluptate quidem libero expedita
            deleniti, error atque tenetur eius repellat. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Est, saepe iste. Perferendis
            temporibus, dolorem incidunt, harum consequatur asperiores laborum
            tempora voluptate quidem libero expedita deleniti, error atque
            tenetur eius repellat.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Est, saepe iste. Perferendis temporibus, dolorem
            incidunt, harum consequatur asperiores laborum tempora voluptate
            quidem libero expedita deleniti, error atque tenetur eius
            repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Est, saepe iste. Perferendis temporibus, dolorem incidunt, harum
            consequatur asperiores laborum tempora voluptate quidem libero
            expedita deleniti, error atque tenetur eius repellat.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Est, saepe iste.
            Perferendis temporibus, dolorem incidunt, harum consequatur
            asperiores laborum tempora voluptate quidem libero expedita
            deleniti, error atque tenetur eius repellat.
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
