import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import WhatsAppBtn from "./components/WhatsAppBtn";
import BtnTopOrBottom from "./components/BtnTopOrBottom";

export default function RootLayout() {
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
