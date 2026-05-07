import { motion } from "framer-motion";
import whatsImg from "../assets/Whatsapp Simbolo.png";
import { useRef, useEffect } from "react";
import { useState } from "react";

export default function WhatsAppBtn() {
  const [isVisible, setIsVisible] = useState(false);
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

  const variants = {
    hidden: {
      opacity: 0,
      x: 30,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      whileTap={{ scale: 0.9 }}
      onClick={navigateToWhatsApp}
      onHoverStart={() => setIsVisible(true)}
      onHoverEnd={() => setIsVisible(false)}
      className="flex flex-row fixed top-8/9 right-5 md:top-1/2 z-9 md:-right-1 hover:shadow-[0px_0px_10px_#ffcc66] transition-shadow duration-500 items-center justify-center gap-2 rounded-2xl bg-black px-2 py-1 cursor-pointer container-btn-whats"
    >
      <img className="w-8 md:w-7" src={whatsImg} />
      {isVisible && (
        <motion.span
          variants={variants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex text-sm"
        >
          Entre em contato
        </motion.span>
      )}
    </motion.div>
  );
}
