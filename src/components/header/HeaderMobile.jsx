import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "motion/react";
import LogoMDCodes from "../../assets/MdCodes_Half.png";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
export default function HeaderMobile({ toggleMobileMenu, mobileMenu }) {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
      exit={{ x: 50, opacity: 0 }}
      className="fixed z-999 bg-gray-950 w-screen sm:w-[70%] md:w-[50%] h-screen top-0 right-0 flex flex-col items-center justify-center"
    >
      <AnimatePresence>
        <motion.button
          key="close-icon"
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.2 } }}
          exit={{ scale: 0, trasition: { duration: 0.2 } }}
          className="absolute top-6 right-15"
          onClick={toggleMobileMenu}
        >
          <XMarkIcon aria-hidden="true" className="size-10" />
        </motion.button>
        {mobileMenu && (
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
            exit={{ x: -50, opacity: 0 }}
            src={LogoMDCodes}
            alt="Logo MD Codes"
            className="h-8 w-auto hover:cursor-pointer absolute top-7 left-7"
          />
        )}
        <div key="menu-mobile" className="flex flex-col gap-5">
          <NavLinks variant="mobile" />
          <SocialLinks variant="mobile" />
        </div>
      </AnimatePresence>
    </motion.div>
  );
}
