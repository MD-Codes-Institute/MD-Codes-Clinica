import FormEmail from "../components/FormEmail";

function Contato() {
  return (
    <section className="mt-30 mb-10 flex flex-col gap-8 xl:flex-row justify-center items-center bg-black shadow-[0px_0px__15px_10px_#000] w-full">
      <article className="flex flex-col gap-5 w-[70%] xl:w-[35%] justify-center items-center xl:mx-10 mt-5">
        <h1 className="text-white font-extrabold text-xl md:text-2xl w-full text-center md:text-start">
          Fale conosco. Conte-nos como podemos ajudar.
        </h1>
        <p className="text-white w-full text-center md:text-start">
          Preencha os campos para que possamos entender sua necessidade e agilizar o atendimento.
        </p>
      </article>
      <FormEmail />
    </section>
  );
}

export default Contato;
