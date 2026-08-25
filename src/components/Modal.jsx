import { useEffect } from "react";
import { useLenis } from "lenis/react";

const Modal = ({ children, closeModal }) => {
  const lenis = useLenis();
  useEffect(() => {
    lenis?.stop();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
      lenis?.start();
    };
  }, [closeModal, lenis]);

  return (
    <>
      <div onClick={closeModal} className="fixed inset-0 bg-black/50 z-50" aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Visualizar imagem"
        className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center justify-center rounded-3xl bg-[#000000cd] shadow-[0px_0px_5px_#ffcc66] min-w-[60vw] h-auto"
      >
        <button
          onClick={() => closeModal()}
          className="flex justify-end text-[25px] px-5 py-3 w-full cursor-pointer text-white"
          aria-label="Fechar modal"
        >
          X
        </button>
        <div className="w-[90%] md:max-w-[80%] p-5 flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
