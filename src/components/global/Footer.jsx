import "../App.css";
import LogoMDCodes from "../assets/MdCodes_Half.png";
import NavLinks from "../header/NavLinks";
import SocialLinks from "../header/SocialLinks";

export const Mapa = () => {
  const urlMapa =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2421956067737!2d-46.67912039999999!3d-23.595645399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5751c0403d6b%3A0x6e967701961e1de6!2sMD%20Codes%20Institute!5e0!3m2!1spt-BR!2sbr!4v1769097950395!5m2!1spt-BR!2sbr";
  return (
    <div>
      <iframe
        src={urlMapa}
        className="w-full md:w-100 h-60"
        style={{
          border: 1,
          borderRadius: 10,
          boxShadow: "0px 0px 20px 1px #FFCC66",
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

function Footer() {
  return (
    <footer className="w-[95%] mx-auto relative z-3 overflow-x-hidden">
      <hr className="line-header" />
      <section className="flex flex-col justify-center items-center xl:flex-row xl:justify-between xl:items-start h-full px-5 mb-20">
        <div className="flex flex-col md:justify-between p-10 xl:min-h-130">
          <img src={LogoMDCodes} alt="Imagem MD Codes" className="w-70 h-10" />
          <p className="hidden xl:flex mt-12 md:mt-0">©2026 MDMaio Incorp Edu Ltda.</p>
        </div>
        <div className="flex flex-col justify-between gap-5 my-10 text-[17px]">
          <NavLinks variant="mobile" />
          <SocialLinks variant="mobile" />
        </div>
        <div className="flex flex-col pb-15 gap-5 xl:h-96 items-center justify-center mt-4 mb-20 xl:mt-0">
          <Mapa />
          <p className="flex xl:hidden">©2026 MDMaio Incorp Edu Ltda.</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
