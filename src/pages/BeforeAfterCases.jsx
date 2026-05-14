import CaseFlipBook from "../components/CaseFlipBook";

export default function BeforeAfterCases() {
  return (
    <section className="flex flex-col justify-center items-center gap-5 w-full my-40 overflow-hidden">
      <div className="w-[90%] md:w-[80%] py-3 flex flex-col items-center justify-center gap-4">
        <h1 className="text-white font-bold text-3xl">Estudos de casos</h1>
        <p className="text-justify">
          Explore uma seleção de estudos de casos que demonstram, na prática, como a avaliação, o
          planejamento e a aplicação dos MD Codes™ podem transformar diferentes necessidades
          clínicas em resultados mais estratégicos, naturais e individualizados. <br />
          <br />
          Cada caso apresenta uma abordagem completa, permitindo compreender a lógica por trás das
          decisões clínicas e a importância de um tratamento conduzido com precisão, segurança e
          excelência.
        </p>
      </div>
      <CaseFlipBook />
    </section>
  );
}
