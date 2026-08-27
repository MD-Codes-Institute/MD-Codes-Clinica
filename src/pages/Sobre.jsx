import { motion } from "motion/react";
import { aboutClinicContent, aboutContent } from "../data/content";
import { useMemo, useState } from "react";
import CarouselScroll from "../components/Carousel";
import SplitText from "../../@/components/SplitText";
import assinaturaDr from "../assets/Assinatura Dr GOLDEN.png";
import imgDr from "../assets/about-dr-02.jpg";
import lineImg from "/line.png";
import recepcaoImg from "../../public/recepção.jpg";
import Modal from "../components/Modal";

function Sobre() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [
    { title: titleDr, texts: descriptionDr },
    { title: titleClinic, texts: descriptionClinic },
  ] = aboutContent;

  const [clinicImgs] = useMemo(() => {
    const clinic = [];
    for (let i = 1; i <= 9; i++) {
      clinic.push({
        id: i,
        url: new URL(`../assets/clinic_img/imagem${i}.jpg`, import.meta.url).href,
        alt: `Imagem Dr.${i}`,
      });
    }
    return [clinic];
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleOpenModalImage = (image) => {
    setIsModalOpen(true);
    setSelectedImage(image);
  };

  return (
    <section className="mt-30 flex flex-col justify-center gap-5 items-center py-10 overflow-hidden w-full bg-[#000000d3]">
      <section
        id="dr"
        className="flex flex-col-reverse items-center justify-center lg:flex-row lg:justify-start w-[90%] h-auto lg:h-[80vh]"
      >
        <div className="w-[80%] flex flex-col gap-2 items-center justify-center lg:justify-start mt-10 lg:w-[50vw] relative z-10 lg:px-10 shadow-[0px_-80px_50px_#000] lg:shadow-none">
          <motion.h1
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="text-md md:text-lg lg:text-xl whitespace-nowrap text-center font-bold bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent"
          >
            {titleDr}
          </motion.h1>
          <SplitText
            text="Dr. Maurício de Maio"
            className="text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap text-center"
            textAlign="center"
            from={{ opacity: 0, y: 10 }}
          />
          <span>Cirurgião plástico</span>
          <span>Doutor em Ciências pela FMUSP</span>
          <span>Mestre em Medicina pela FMUSP</span>
          <div className="flex flex-row gap-3">
            <span>CRM: 69 331 e RQE: 14 478</span>
          </div>
          <motion.img
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
            src={lineImg}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="text-center font-normal text-md md:text-lg lg:text-xl w-full whitespace-pre-line"
          >
            {descriptionDr}
          </motion.p>
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="w-60 lg:w-70 mt-5"
            src={assinaturaDr}
            alt="Assinatura do Dr. Maurício de Maio"
            loading="lazy"
          />
        </div>
        <img
          className="xl:absolute xl:right-20 2xl:right-50 w-[80vw] md:w-[60vw] lg:w-[40vw] brightness-85 rounded-2xl"
          src={imgDr}
          alt="Dr. Maurício de Maio"
          loading="lazy"
        />
      </section>

      <motion.section
        id="clinica"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
        viewport={{ once: true }}
        className="w-full flex flex-col xl:flex-row items-start justify-center my-10 mt-30 max-w-410 px-5 xl:px-0"
      >
        <div className="flex-1 flex flex-col items-start justify-center gap-5 w-full mb-10 xl:px-10">
          <h2 className="text-md md:text-lg lg:text-xl whitespace-nowrap text-start w-full font-medium bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent">
            {titleClinic}
          </h2>
          <h3 className="text-white text-start w-full text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl whitespace-nowrap">
            Excelencia que você <br />
            <span className="bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent">
              vê em cada detalhe
            </span>
          </h3>
          <img src="/line.png" className="w-100" alt="" aria-hidden="true" loading="lazy" />
          <p className="text-justify w-full font-normal text-md md:text-lg lg:text-xl whitespace-pre-line">
            {descriptionClinic}
          </p>
        </div>
        <div className="flex flex-col flex-2 w-full xl:max-w-180 2xl:max-w-215">
          <button
            onClick={() => handleOpenModalImage(recepcaoImg)}
            className="w-full cursor-pointer"
          >
            <img
              src={recepcaoImg}
              alt="Imagem da recepção da cliníca"
              className="rounded-xl w-full h-100 object-cover"
              loading="lazy"
            />
          </button>
          {isModalOpen && (
            <Modal closeModal={handleCloseModal}>
              <img className="rounded-2xl" src={selectedImage} loading="lazy" />
            </Modal>
          )}
          <CarouselScroll listImg={clinicImgs} />
        </div>
      </motion.section>

      <div className="flex flex-wrap justify-center items-center gap-10 xl:gap-20 2xl:border 2xl:border-[#ffcc66] w-[90%] 2xl:w-full min-h-40 rounded-2xl max-w-410 py-5">
        {aboutClinicContent.map((item) => (
          <div key={item.id} className="max-w-80 flex flex-row items-center justify-start gap-3 h-35">
            <img
              src={item.img}
              alt={item.title}
              className="w-auto h-20 object-cover"
              loading="lazy"
            />
            <div className="flex flex-col">
              <h2 className="bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent font-normal">
                {item.title}
              </h2>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sobre;
