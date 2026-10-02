import { motion } from 'motion/react';
import { aboutClinicContent, aboutContent } from '../data/content';
import { useMemo, useState } from 'react';
import CarouselScroll from '../components/Carousel';
import SplitText from '../../@/components/SplitText';
import assinaturaDr from '../assets/Assinatura Dr GOLDEN.png';
import imgDr from '../assets/about-dr-02.jpg';
import recepcaoImg from '../../public/recepção.jpg';
import Modal from '../components/Modal';

function Sobre() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [{ texts: descriptionDr }, { texts: descriptionClinic }] = aboutContent;

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
        className="flex flex-col items-start justify-start lg:flex-row lg:justify-start w-[90%] h-auto"
      >
        <img
          className="w-full lg:w-110 xl:w-140 2xl:w-160 brightness-85 rounded-2xl"
          src={imgDr}
          alt="Dr. Maurício de Maio"
          loading="lazy"
        />
        <div className="w-full flex flex-col gap-5 items-start justify-center lg:justify-start lg:w-[50vw] relative z-10 lg:px-10 shadow-[0px_-80px_50px_#000] lg:shadow-none">
          <SplitText
            text="Dr. Maurício de Maio"
            className="text-[1.7rem] md:text-[2rem] 2xl:text-[3rem]  w-full uppercase whitespace-nowrap text-start"
            textAlign="start"
            tag="h1"
            from={{ opacity: 0, x: -10 }}
            to={{ opacity: 1, x: 0 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, ease: 'easeInOut' } }}
            className="flex flex-col gap-5 w-full"
          >
            <div className="flex items-start gap-5">
              <span className="text-[14px] md:text-[16px] font-light">Cirurgião plástico</span>
              <div className="h-6 w-0.5 rounded-2xl bg-[#ffcc66]" />
              <span className="text-[14px] md:text-[16px] font-light">CRM: 69 331 e RQE: 14 478</span>
            </div>
            <div className="flex items-start gap-5">
              <span className="text-[14px] md:text-[16px] font-light">Doutor em Ciências pela FMUSP</span>
              <div className="h-6 w-0.5 rounded-2xl bg-[#ffcc66]" />
              <span className="text-[14px] md:text-[16px] font-light">Mestre em Medicina pela FMUSP</span>
            </div>
          </motion.div>
          <motion.div
            className="bg-[#ffcc66] h-0.5 rounded-2xl w-full"
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          />
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="text-start font-light text-md md:text-lg lg:text-xl w-full whitespace-pre-line"
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
      </section>

      <motion.section
        id="clinica"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
        viewport={{ once: true }}
        className="w-[90%] flex flex-col xl:flex-row items-start justify-center my-0 md:my-20 mt-30 max-w-410  xl:px-0"
      >
        <div className="flex flex-col flex-2 w-full xl:max-w-180 2xl:max-w-215 mb-10 md:mb-0">
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
        <div className="flex-1 flex flex-col items-start justify-center gap-5 w-full xl:px-10">
          <h3 className="text-white text-start font-be-vietnam text-2xl md:text-3xl xl:text-[47px] w-full whitespace-nowrap">
            Excelencia que você <br />
            <span className="uppercase font-medium bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent">
              vê em cada detalhe
            </span>
          </h3>
          <motion.div
            className="bg-[#ffcc66] h-0.5 rounded-2xl w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.2 } }}
            viewport={{ once: true }}
          />
          <p className="text-start text-[16px] xl:text-[20px]  font-light w-full whitespace-pre-line">
            {descriptionClinic}
          </p>
        </div>
      </motion.section>

      <div className="flex flex-wrap justify-center items-center gap-10 xl:gap-20 2xl:border 2xl:border-[#ffcc66] w-full 2xl:w-full min-h-40 rounded-2xl max-w-390 py-5">
        {aboutClinicContent.map((item) => (
          <div
            key={item.id}
            className="max-w-80 flex flex-row items-center justify-start gap-3 h-35"
          >
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
