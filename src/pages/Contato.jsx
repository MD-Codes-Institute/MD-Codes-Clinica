import FormEmail from "../components/FormEmail";
import recepcaoImg from "/recepção.jpg";

function Contato() {
  return (
    <section className="mt-30 mb-10 flex flex-col gap-8 xl:flex-row justify-center items-center bg-[#00092]/10 backdrop-blur-lg shadow-[0px_0px__15px_10px_#000] w-full">
      <article className="flex flex-col gap-5 w-[90%] xl:w-[35%] justify-center items-center">
        <img
          src={recepcaoImg}
          alt="Imagem da recepção da clínica"
          className="w-100 rounded-2xl"
          loading="lazy"
        />
        <h1 className="text-white font-extrabold text-xl md:text-2xl w-full text-center xl:text-start">
          Fale conosco.
        </h1>
        <p className="text-white w-full text-center xl:text-start">
          Preencha seus dados e compartilhe conosco o que você procura. Assim, nossa equipe poderá
          compreender suas necessidades e oferecer um atendimento mais ágil e personalizado.
        </p>
      </article>
      <FormEmail />
    </section>
  );
}

export default Contato;
