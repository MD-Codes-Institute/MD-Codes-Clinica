import { motion } from "motion/react";
import whatsImg from "../assets/Whatsapp Simbolo.png";
import { useRef, useEffect } from "react";
export default function WhatsAppBtn() {
  const ref = useRef(null);
  const message = "Olá, gostária de mais informações!";
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        ref.current?.classList.remove("container-btn-whats");
      } else {
        ref.current?.classList.add("container-btn-whats");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigateToWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };
  return (
    <motion.div
      ref={ref}
      whileTap={{ scale: 0.9 }}
      onClick={navigateToWhatsApp}
      className="flex flex-row fixed top-8/9 right-5 md:top-1/2 z-200 md:-right-1 hover:shadow-[0px_0px_10px_#ffcc66] transition-shadow duration-500 items-center justify-center gap-2 rounded-2xl bg-black px-2 py-1 cursor-pointer container-btn-whats"
    >
      <img className="w-8 md:w-7" src={whatsImg} />
      <span className="hidden md:flex text-sm">Entre em contato</span>
    </motion.div>
  );
}
