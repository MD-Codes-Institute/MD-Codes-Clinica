import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import WhatsAppBtn from "./components/WhatsAppBtn";
import BtnTopOrBottom from "./components/BtnTopOrBottom";
import SplashCursor from "../@/components/SplashCursor";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <WhatsAppBtn />
      <SplashCursor
        DENSITY_DISSIPATION={10}
        VELOCITY_DISSIPATION={0.99}
        PRESSURE={0.01}
        CURL={0.3}
        SPLAT_RADIUS={0.01}
        SPLAT_FORCE={8000}
        COLOR_UPDATE_SPEED={0.5}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#ffcc66"
        zIndex={-1}
      />
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
