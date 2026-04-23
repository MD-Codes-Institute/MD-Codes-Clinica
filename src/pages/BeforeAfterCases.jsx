import CaseFlipBook from "../components/CaseFlipBook";

export default function BeforeAfterCases() {
  return (
    <section className="flex flex-col justify-center items-center gap-5 w-full my-40 overflow-hidden">
      <div className="w-[90%] md:w-[80%] py-3 flex flex-col items-center justify-center gap-4">
        <h1 className="text-white font-bold text-3xl">Estudos de casos</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque minus cumque, illo
          numquam veritatis, perferendis reiciendis perspiciatis quaerat eligendi repudiandae
          reprehenderit deserunt molestiae fuga corporis nihil saepe pariatur sunt?
        </p>
      </div>
      <CaseFlipBook />
    </section>
  );
}
