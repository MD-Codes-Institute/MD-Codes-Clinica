import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/global/Footer";
import WhatsAppBtn from "./components/global/WhatsAppBtn";
import BtnTopOrBottom from "./components/global/BtnTopOrBottom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

export default function RootLayout() {
  const location = useLocation();
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    lenis?.start();
    lenis?.scrollTo(0, { duration: 0.5, easing: (t) => 1 - Math.cos((t * Math.PI) / 2) });
  }, [location.pathname, lenis]);
  return (
    <div>
      <Header />
      <WhatsAppBtn />
      <main>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="brightness-60 object-cover "
          style={{
            position: "fixed",
            zIndex: -10,
            right: 0,
            bottom: 0,
            minHeight: "100dvh",
            minWidth: "100vw",
          }}
        >
          <source src="/abstract-gold.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        <Outlet />
      </main>
      <BtnTopOrBottom />
      <Footer />
    </div>
  );
}
