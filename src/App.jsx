import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Procedimentos from "./pages/Procedimentos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import { ReactLenis } from "lenis/react";
import BeforeAfterCases from "./pages/BeforeAfterCases";
import { useEffect, useRef } from "react";
import { cancelFrame, frame } from "framer-motion";
import RootLayout from "./RootLayout";
import { NavigateProvider } from "./context/NavigateContext";

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    function update(data) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);
  return (
    <div className="min-h-full">
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
        <BrowserRouter>
          <NavigateProvider>
            <Routes>
              <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="/procedimentos" element={<Procedimentos />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/estudo-de-caso" element={<BeforeAfterCases />} />
              </Route>
            </Routes>
          </NavigateProvider>
        </BrowserRouter>
      </ReactLenis>
    </div>
  );
}

export default App;
