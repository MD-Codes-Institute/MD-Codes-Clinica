import CaseFlipBook from "../components/CaseFlipBook";

export default function BeforeAfterCases() {
  return (
    <section className="flex flex-col justify-center items-center gap-5 w-full my-40 overflow-hidden">
      <div className="w-[90%] md:w-[80%] py-3 flex flex-col items-center justify-center gap-4">
        <h1 className="text-white font-bold text-3xl">Estudos de casos</h1>
        <p className="text-justify">
          Explore uma seleção de estudos de caso que mostram, na prática, como uma avaliação clínica
          criteriosa e a escolha estratégica dos MD Codes™ podem orientar tratamentos personalizados
          para diferentes necessidades faciais.
          <br />
          <br />
          Cada caso revela o raciocínio por trás das decisões clínicas e demonstra como uma
          abordagem precisa e individualizada pode conduzir a resultados naturais, equilibrados e em
          harmonia com as características únicas de cada paciente.
        </p>
      </div>
      <CaseFlipBook />
    </section>
  );
}
