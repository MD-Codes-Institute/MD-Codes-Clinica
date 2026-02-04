import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Procedimentos from "./pages/Procedimentos";
import Clinica from "./pages/Clinica";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReactLenis from "lenis/react";
import BtnTopOrBottom from "./components/BtnTopOrBottom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-full">
      <ReactLenis root>
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
        <BtnTopOrBottom />
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/procedimentos" element={<Procedimentos />} />
            <Route path="/clinica" element={<Clinica />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ReactLenis>
    </div>
  );
}

export default App;
