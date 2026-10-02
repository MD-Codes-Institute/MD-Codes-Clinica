import { motion } from 'framer-motion';
import { counterItems } from '../data/content';
import iconWhats from '../assets/Whatsapp Simbolo.png';
import SectionCards from '../components/SectionCards';
import SectionBio from '../components/home/SectionBio';
import AnimatedCounter from '../components/global/AnimatedCounter';

function Home() {
  return (
    <div className="overflow-x-hidden flex flex-col items-center justify-center gap-20">
      <section className="min-h-screen flex flex-col items-center justify-end gap-5 xl:flex-row xl:items-start xl:justify-start bg-black w-full xl:bg-transparent! mt-25">
        <img
          src="/MD Codes 10_Photo.jpeg"
          alt="Imagem do Dr. Maurício de Maio"
          className="img-dr"
          loading="lazy"
        />
        <motion.div
          initial={{ filter: 'blur(10px)', translateY: -10, opacity: 0 }}
          animate={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-1 z-50 flex-2 min-w-100 xl:max-w-200 px-5 md:ml-20 md:px-0 -mt-70 xl:mt-0 bg-[#000000] shadow-[0px_0px_50px_50px_#000] h-full xl:pt-30"
        >
          <h1 className="text-3xl sm:text-[48px] uppercase text-start font-medium flex flex-col z-50 font-be-vietnam">
            A ciência por trás da
            <span className="bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent">
              Beleza natural
            </span>
          </h1>
          <p className="text-white text-start text-[16px] font-light pt-5">
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
              <button
                className="w-full cursor-pointer max-w-70 whitespace-nowrap text-[11px] md:text-[16px] font-light text-[#ffcc66] h-10 md:h-13.75 spacing-[8%] border border-[#ffcc66] hover:scale-98 hover:shadow-[0px_0px_10px_#ffcc66] transition-all duration-250 rounded-[5px]"
                onClick={() => {
                  const element = document.querySelector('#procedimentos');
                  element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Conheça os procedimentos
              </button>
              <a
                className="w-full cursor-pointer max-w-50 md:max-w-70 flex items-center justify-center h-10 md:h-13.75 spacing-[8%] hover:scale-98 transition-all duration-300 text-[11px] md:text-[16px] gap-5 text-center text-white font-light border rounded-[5px]"
                href={`https://wa.me/${5511989464298}?text=${encodeURIComponent(
                  'Olá, gostária de mais informações...'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iconWhats} className="h-6" alt="" aria-hidden="true" loading="lazy" />
                Entre em contato
              </a>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Section com os cards dos procedimentos*/}
      <SectionCards />
      {/* Section com o contador*/}
      <h2
        style={{ fontSize: 'clamp(1.2rem, 2vw, 1.875rem)' }}
        className="font-light uppercase gap-3 flex flex-col xl:flex-row items-center text-center relative z-50"
      >
        <span className="bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent whitespace-nowrap">
          MD Codes{' '}
        </span>
        confiança que se constrói com resultados
      </h2>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-5 md:gap-10 w-full md:w-[90%] bg-[#00000077] shadow-[0px_0px_100px_#000] mb-10"
      >
        {counterItems.map((value) => (
          <div key={value.id} className="flex flex-row gap-3 items-center justify-center h-auto">
            <img src={value.imgUrl} className="h-12.5 md:h-15" alt={value.id} loading="lazy" />
            <div className="flex flex-col justify-center items-center md:items-start min-h-25">
              <p
                className="flex gap-1 bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent font-medium"
                style={{ fontSize: 'clamp(1.05rem, 2vw, 1.575rem)' }}
              >
                {value.id === 'Países' && <span>Presente em</span>}
                {''}+{''}
                <AnimatedCounter
                  className={'w-7 md:w-8'}
                  limit={value.limit}
                  duration={value.duration}
                />
                <span>{value.qtd ?? 'Países'}</span>
                <span>{value.title}</span>
              </p>
            </div>
          </div>
        ))}
      </motion.section>

      <section className="px-10 mb-20">
        <SectionBio />
      </section>
    </div>
  );
}
export default Home;
