import LogoMDCodes from "../assets/MdCodes_Half.png";
import { Link, useLocation } from "react-router-dom";
import "./styles/Header.css";
import { navigationLinks } from "../data/content";
import whats from "../assets/icon-whatsapp.png";
import email from "../assets/icon-email.png";
import insta from "../assets/icon-instagram.png";
import { message, phoneNumber, sentEmail, subject } from "../data/content";
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
  const location = useLocation();
  return (
    <footer className="w-[95%] mx-auto mb-15 relative z-50">
      <hr className="line-header" />
      <section className="flex flex-col xl:flex-row xl:justify-between items-center">
        <div className="xl:h-96 flex flex-col md:justify-between p-10">
          <img src={LogoMDCodes} alt="Imagem MD Codes" className="w-70 h-10" />
          <p className="hidden xl:flex mt-12 md:mt-0">
            ©2026 MDMaio Incorp Edu Ltda.
          </p>
        </div>

        <div className="flex flex-col h-86 justify-between items-center xl:items-start p-5 text-[20px]">
          {/* container de navegacao */}
          {navigationLinks.map((v, i) => (
            <Link
              key={i}
              to={v.href}
              className={`text-lg font-semibold text-white ${
                v.href === location.pathname
                  ? `text-shadow-2xs text-shadow-amber-300`
                  : `text-shadow-none`
              } transition-transform duration-200 hover:scale-115 hover:text-[#ffe585] hover:cursor-pointer`}
            >
              {v.name}
            </Link>
          ))}
        </div>
        {/* containe icones redes */}
        <div className="flex xl:flex-col pb-15 md:py-7 gap-5 xl:h-96 ">
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
            target="_blank"
            rel="nooper noreffer"
            className="w-7 h-7"
          >
            <img
              src={whats}
              alt="Icone do whatsapp"
              className="hover:scale-115 hover:transition-transform"
            />
          </a>
          {/* link para o instagram */}
          <a
            href="https://www.instagram.com/mauriciodemaio/"
            target="_blank"
            className="w-7 h-7"
          >
            <img
              src={insta}
              alt="icone do instagram"
              className="hover:scale-115 hover:transition-transform"
            />
          </a>
          {/* link para o e-mail */}
          <a
            href={`mailto:${sentEmail}?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(message)}`}
            className="w-7 h-7"
          >
            <img
              src={email}
              alt="Icone do email"
              className="hover:scale-115 hover:transition-transform"
            />
          </a>
        </div>
        <Mapa />
        <p className="flex mt-5 p-10 xl:hidden">
          ©2025 MDMaio Incorp Edu Ltda.
        </p>
      </section>
    </footer>
  );
}

export default Footer;
