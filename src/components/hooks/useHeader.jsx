import { useEffect } from "react";
import { useState } from "react";
import { useMotionValueEvent, useScroll} from "motion/react";
import { useLocation } from "react-router-dom";

const useHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

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
    setMobileMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { mobileMenu, hidden, toggleMobileMenu };
};
export default useHeader;
