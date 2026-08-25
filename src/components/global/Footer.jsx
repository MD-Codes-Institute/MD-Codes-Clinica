import { useNavigation } from "../../context/NavigateContext";
import { Link } from "react-router-dom";

export const Mapa = () => {
  const urlMapa =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2421956067737!2d-46.67912039999999!3d-23.595645399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5751c0403d6b%3A0x6e967701961e1de6!2sMD%20Codes%20Institute!5e0!3m2!1spt-BR!2sbr!4v1769097950395!5m2!1spt-BR!2sbr";
  return (
    <div>
      <iframe
        title="Localização da clínica"
        src={urlMapa}
        className="w-[90vw] h-auto md:h-55"
        style={{
          border: 1,
          borderRadius: 10,
          boxShadow: "0px 0px 10px 1px #FFCC66",
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

function Footer() {
  const { goTo } = useNavigation();
  return (
    <footer className="w-[95%] mx-auto relative z-3 overflow-x-hidden pb-15">
      <hr className="line-header" />
      <section className="flex flex-col gap-5 items-center justify-center mt-10">
        <article className="flex flex-wrap items-center justify-center py-5 gap-10 text-white uppercase font-medium">
          <Link to="/" className="cursor-pointer font-semibold text-lg">
            Início
          </Link>
          <Link to="/procedimentos" className="cursor-pointer font-semibold text-lg">
            Procedimentos
          </Link>
          <button
            onClick={() => goTo("/sobre", "#clinica")}
            className="cursor-pointer font-semibold text-lg"
          >
            Clínica
          </button>
          <button
            onClick={() => goTo("/sobre", "#dr")}
            className="cursor-pointer font-semibold text-lg"
          >
            Dr. Maurício de Maio
          </button>
          <Link to="/contato" className="cursor-pointer font-semibold text-lg">
            Contato
          </Link>
        </article>
        <Mapa />
        <p className="text-white font-bold text-sm mt-4">
          ©2026 MDMaio Incorp Edu Ltda. Todos os direitos reservados.
        </p>
      </section>
    </footer>
  );
}

export default Footer;
