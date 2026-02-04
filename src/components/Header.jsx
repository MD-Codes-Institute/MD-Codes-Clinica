import LogoMDCodes from "../assets/MdCodes_Half.png";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import whats from "../assets/icon-whatsapp.png";
import email from "../assets/icon-email.png";
import insta from "../assets/icon-instagram.png";
import { message, phoneNumber, sentEmail, subject } from "../data/content";
import { navigationLinks } from "../data/content";
import "../App.css";
import "./styles/Header.css";

const MotionDialogPanel = motion(DialogPanel);

function Header() {
  const [MobileMenu, setMobileMenu] = useState(false);
  const logoVisible = !MobileMenu;
  const lineVisible = !MobileMenu;
  const [Hidden, setHidden] = useState(false);

  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setHidden(true);
    }

    if (latest < 100) {
      setHidden(false);
    }
  });

  return (
    <div className="bg-transparent">
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={Hidden ? "hidden" : "visible"}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="fixed inset-x-0 top-0 z-100 w-full px-4 md:px-10"
      >
        {/* Menu desktop */}
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          {/* logo da empresa */}
          <div className="flex lg:flex-1">
            <span className="sr-only">MD codes</span>
            {logoVisible && (
              <img
                src={LogoMDCodes}
                alt="Logo MD Codes"
                className="h-8 w-auto hover:cursor-pointer"
              />
            )}
          </div>

          <div className="flex xl:hidden">
            {/* btn para abrir o menu mobile */}
            <button
              type="button"
              onClick={() => setMobileMenu(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-b-md p-2.5 text-white hover:cursor-pointer"
            >
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Links para navegação */}
          <div className="hidden xl:flex lg:gap-x-12">
            {navigationLinks.map((v) => (
              <Link
                key={v.name}
                to={v.href}
                className={`text-lg font-semibold ${
                  v.href === location.pathname
                    ? `text-shadow-2xs text-shadow-amber-300`
                    : `text-shadow-none`
                } text-white   transition-transform duration-200 hover:scale-115 hover:text-[#ffe585] hover:cursor-pointer`}
              >
                {v.name}
              </Link>
            ))}
          </div>

          {/* Container icones redes */}
          <div className="hidden items-center xl:flex lg:flex-1 lg:justify-end gap-5">
            {/* Link para o whats */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                message
              )}`}
              target="_blank"
              rel="nooper noreffer"
              className="w-7 h-7"
            >
              <img
                src={whats}
                alt="Icone do whatsapp"
                className="hover:scale-115 hover:transition-transform"
              />
            </a>
            {/* link para o instagram */}
            <a
              href="https://www.instagram.com/mauriciodemaio/"
              target="_blank"
              className="w-7 h-7"
            >
              <img
                src={insta}
                alt="icone do instagram"
                className="hover:scale-115 hover:transition-transform"
              />
            </a>
            {/* link para o e-mail */}
            <a
              href={`mailto:${sentEmail}?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(message)}`}
              className="w-7 h-7"
            >
              <img
                src={email}
                alt="Icone do email"
                className="hover:scale-115 hover:transition-transform"
              />
            </a>
          </div>
          {/* Fim header desktop */}
        </nav>
        {/* fim menu desktop */}

        {/*menu mobile - open*/}
        <Dialog open={MobileMenu} onClose={setMobileMenu} className="xl:hidden">
          <div className="fixed inset-0 z-999 flex justify-end">
            <AnimatePresence>
              {MobileMenu && (
                <MotionDialogPanel
                  static
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="w-full  overflow-y-auto bg-gray-900 p-6 shadow-xl sm:max-w-sm sm:ring-1 sm:ring-gray-100/10"
                >
                  <div className="flex items-center justify-between">
                    <a href="#">
                      <img
                        src={LogoMDCodes}
                        alt="Logo MD Codes"
                        className="h-8 w-auto"
                      />
                    </a>
                    <button
                      // btn para fechar o menu mobile
                      type="button"
                      className="-m-2.5 rounded-md p-2.5 text-white hover:cursor-pointer"
                      onClick={() => setMobileMenu(false)}
                    >
                      <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                  </div>

                  {/* links do menu mobile */}
                  <div className="mt-6 flow-root">
                    <div className="space-y-2 py-6 text-center">
                      {navigationLinks.map((v) => (
                        <Link
                          key={v.name}
                          to={v.href}
                          onClick={() => setMobileMenu(false)}
                          className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-800"
                        >
                          {v.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <hr className="bg-black-" />

                  {/* container icones redes */}
                  <div className="rounded-lg text-base/7 py-6 flex justify-center gap-5 font-medium text-white ">
                    <a
                      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                        message
                      )}`}
                      target="_blank"
                      rel="nooper noreffer"
                      className="w-7 h-7"
                    >
                      <img
                        src={whats}
                        alt="Icone do whatsapp"
                        className="hover:scale-115 hover:transition-transform"
                      />
                    </a>
                    {/* link para o instagram */}
                    <a
                      href="https://www.instagram.com/mauriciodemaio/"
                      target="_blank"
                      className="w-7 h-7"
                    >
                      <img
                        src={insta}
                        alt="icone do instagram"
                        className="hover:scale-115 hover:transition-transform"
                      />
                    </a>
                    {/* link para o e-mail */}
                    <a
                      href={`mailto:${sentEmail}?subject=${encodeURIComponent(
                        subject
                      )}&body=${encodeURIComponent(message)}`}
                      className="w-7 h-7"
                    >
                      <img
                        src={email}
                        alt="Icone do email"
                        className="hover:scale-115 hover:transition-transform"
                      />
                    </a>
                  </div>
                </MotionDialogPanel>
              )}
            </AnimatePresence>
          </div>
          {/* fim do menu mobile */}
        </Dialog>
        {logoVisible && <hr className="line-header" />}
      </motion.header>
    </div>
  );
}

export default Header;
