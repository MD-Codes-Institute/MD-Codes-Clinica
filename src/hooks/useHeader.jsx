import { useEffect } from "react";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

const useHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lenis = useLenis();
  const location = useLocation();

  useEffect(() => {
    if (mobileMenu) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [mobileMenu, lenis]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenu(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => removeEventListener("keydown", handleKeyDown);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setHidden(true);
    } else if (latest < 100) {
      setHidden(false);
    }
  });
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  useEffect(() => {
    requestAnimationFrame(() => setMobileMenu(false));
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setMobileMenu(false);
      }
    };
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 500);
    };
    handleResize();
    window.addEventListener("resize", debouncedResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return { mobileMenu, hidden, toggleMobileMenu };
};
export default useHeader;
