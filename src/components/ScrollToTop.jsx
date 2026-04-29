import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    lenis.scrollTo(0, { duration: 0.5, easing: (t) => 1 - Math.cos((t * Math.PI) / 2) });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
