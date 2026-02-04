import { useState } from "react";
import arrow from "../assets/arrow.png"
import { useScroll, useMotionValueEvent, useTransform, motion} from "motion/react";

function BtnTopOrBottom() {
  const [Bottom, setBottom] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // function que observa quando há scroll na pagina para mudar a direção
    latest < 300 ? setBottom(true) : setBottom(false);
  });
  const ScrollTopOrBottom = () => {
    // function que navega entra o topo ou o footer da página
    if (Bottom) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  const rotate = useTransform(scrollY, [300, 500], [0, 180]);
  return (
    <div>
      {/* btn para scroll top or bottom*/}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 25 }}
        exit={{ y: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ rotate }}
        className="fixed z-100 bottom-5 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-black text-sm font-medium mb-2 sr-only">
          Role para baixo
        </span>
        <button onClick={() => ScrollTopOrBottom()}>
          <img src={arrow} alt="" className="w-12 hover:cursor-pointer" />
        </button>
      </motion.div>
    </div>
  );
}

export default BtnTopOrBottom;
