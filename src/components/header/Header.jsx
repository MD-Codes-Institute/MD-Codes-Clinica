import LogoMDCodes from "../../assets/MdCodes_Half.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../../App.css";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import HeaderMobile from "./HeaderMobile";
import useHeader from "../hooks/useHeader";

function Header() {
  const {toggleMobileMenu, hidden, mobileMenu} = useHeader()
  useEffect(() => {
    const target = document.documentElement;
    if (mobileMenu) {
      target.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      target.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [mobileMenu]);
  return (
    <div className="bg-transparent">
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="fixed inset-x-0 top-0 z-100 w-full px-4 md:px-10"
      >
        {/* Menu desktop */}
        <nav aria-label="Global" className="flex justify-between items-center w-full p-6 lg:px-8">
          {/* logo da empresa */}
          <div className="flex lg:flex-1">
            <span className="sr-only">MD codes</span>
            <AnimatePresence>
              {!mobileMenu && (
                <motion.img
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  src={LogoMDCodes}
                  alt="Logo MD Codes"
                  className="h-8 w-auto hover:cursor-pointer"
                />
              )}
            </AnimatePresence>
          </div>
          {/* Links para navegação */}
          <NavLinks variant="desktop" />
          {/* Container icones redes */}
          <SocialLinks variant="desktop" />
          {/* btn para abrir o menu mobile */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="flex xl:hidden  text-white hover:cursor-pointer absolute top-6 right-15"
          >
            <Bars3Icon aria-hidden="true" className="size-10" />
          </button>
          {/* Fim header desktop */}
        </nav>
        {/* fim menu desktop */}
        {/*menu mobile - open*/}
        <AnimatePresence>
          {mobileMenu && (
            <HeaderMobile toggleMobileMenu={toggleMobileMenu} mobileMenu={mobileMenu} />
          )}
        </AnimatePresence>
        {!mobileMenu && <hr className="line-header" />}
      </motion.header>
    </div>
  );
}

export default Header;
