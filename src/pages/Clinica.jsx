import CarouselScroll from "../components/Carousel";
import bgClinica from "../assets/background_clinica.png";
import { useScroll, useTransform, motion } from "framer-motion";

const listImg = [];
// loop para adicionar as imagens que estão em public a lista de imagens
for (let i = 1; i <= 9; i++) {
  listImg.push({
    id: `${i}_V2`,
    url: `/clinic_img/imagem${i}.jpg`,
    alt: `Imagem ${i}`,
  });
}
function Clinica() {
  const { scrollY } = useScroll();
  const yContainerImg = useTransform(scrollY, [0, 300], [0, 150]);
  const yText = useTransform(scrollY, [0, 300], [0, 150]);
  return (
    <div>
      <section className="relative p-10 mx-auto mt-20 h-[90vh] shadow-[0px_0px_30px_50px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden">
        <motion.h1
          className="relative z-10 text-center md:px-5 text-3xl font-bold text-shadow-lg/30 md:text-6xl text-white drop-shadow-2xl tracking-wider"
          style={{ y: yText }}
        >
          Clínica Dr. Maurício de Maio
        </motion.h1>
        <motion.div
          className="absolute w-screen md:w-[90%] mx-auto inset-0 shadow-[inset_0_2px_60px_50px_rgba(0,0,0,0.3)] md:shadow-[inset_0_5px_80px_40px_rgba(0,0,0,1)] brightness-50"
          style={{
            y: yContainerImg,
            backgroundImage: `url(${bgClinica})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* 3. Conteúdo (Acima da imagem e sem filtro) */}
      </section>
      <section className="bg-black h-full py-20 md:py-10 relative z-8 shadow-[0px_10px_20px_30px_rgba(0,0,0,0.8)]">
        <div className="flex h-[30vh] justify-center items-center ">
          <p className="h-full py-0 md:py-20 px-5 text-center text-2xl md:text-4xl font-light mb-7">
            Inovação, tecnologia e sofisticação. Estamos localizados na Faria
            Lima, em São Paulo (Grande SP), um eixo estratégico da cidade.
            Unidade preparada para soluções de alto nível. Conheça a clínica!
          </p>
        </div>

        <div className="flex justify-center items-center ">
          <CarouselScroll listImg={listImg} />
        </div>
      </section>
    </div>
  );
}

export default Clinica;
