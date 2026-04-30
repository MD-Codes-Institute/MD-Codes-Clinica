import { bios } from "../data/content";
function SectionBio({ bioKey }) {
  const bioDr = bios.find((v) => v.key == bioKey);
  const { text, title, urlImg } = bioDr;
  const parts = text.split("\n");

  return (
    <section className="w-full 2xl:h-full flex flex-col xl:flex-row xl:items-start 2xl:items-start shadow-[0px_15px_40px_50px_rgba(0,0,0,1)] bg-black p-10">
      <div className="flex flex-col justify-center items-center w-full">
        <h3 className="flex xl:hidden 2xl:hidden w-full justify-center text-3xl sm:text-4xl md:text-5xl mb-7 font-semibold ">
          <span className="bg-linear-to-b tracking-wide from-[#d18c00] to-[#ffe7b7] bg-clip-text text-transparent px-1">
            Dr.
          </span>
          {title}
        </h3>
        <img
          src={urlImg}
          alt="Imagem da bio"
          className="max-w-[90vw] md:max-w-[80%] xl:min-w-full min-h-[50vh] md:min-h-[60vh] xl:min-h-[80vh] object-cover rounded-4xl shadow-[-1px_0px_15px_1px_rgba(255,204,102,1)]"
        />
      </div>
      <div className="md:flex xl:min-w-[60%] xl:max-w-[60%] 2xl:min-w-[60%] md:flex-col md:items-center bg-black shadow-[-10px_60px_200px_150px_rgba(0,0,0,1)] h-full">
        <h3 className="hidden xl:flex 2xl:flex mb-5 text-5xl font-semibold md:w-full  text-justify">
          <span className="bg-linear-to-b tracking-wide from-[#d18c00] to-[#ffe7b7] bg-clip-text text-transparent px-1">
            Dr.
          </span>
          {title}
        </h3>
        {parts.map((v, i) => (
          <p
            className="w-full md:w-[70%] xl:w-full md:h-full px-2 pb-1 text-center xl:text-justify text-[20px] md:text-[23px] bg-black shadow-[0px_-5px_30px_70px_rgba(0,0,0,1)] md:shadow-none md:bg-none"
            key={i}
          >
            {v}
          </p>
        ))}
      </div>
    </section>
  );
}

export default SectionBio;
