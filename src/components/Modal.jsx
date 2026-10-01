import { useEffect } from 'react';
import { useLenis } from 'lenis/react';

const Modal = ({ children, closeModal }) => {
  const lenis = useLenis();
  useEffect(() => {
    lenis?.stop();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.body.style.overflow = "hidden"
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      lenis?.start();
    };
  }, [closeModal, lenis]);

  return (
    <div
      onClick={closeModal}
      className="bg-black/75 fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center h-screen w-screen z-999"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Visualizar imagem"
        className=" flex flex-col items-center justify-center rounded-3xl min-w-[60vw] h-auto"
      >
        <button
          onClick={() => closeModal()}
          className="absolute top-10 right-10 text-[25px] font-bold cursor-pointer text-white"
          aria-label="Fechar modal"
        >
          X
        </button>
        <div className="w-[90%] p-5 flex flex-col items-center justify-center">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
