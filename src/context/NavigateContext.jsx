/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLenis } from "lenis/react";

const NavigateContext = createContext();
export const NavigateProvider = ({ children }) => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const lenis = useLenis();

  const goTo = (path, hashTarget) => {
    if (pathname === path) {
      if (hashTarget) {
        lenis?.scrollTo(hashTarget, { offset: -100, duration: 0.5 });
      } else {
        lenis?.scrollTo(0, { duration: 1 });
      }
    } else {
      navigate(`${path}${hashTarget || ""}`);
    }
  };

  useEffect(() => {
    if (hash && lenis) {
      const timeoutId = setTimeout(() => {
        lenis.scrollTo(hash, { offset: -100, duration: 0.5 });
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [hash, lenis]);

  return <NavigateContext.Provider value={{ goTo }}>{children}</NavigateContext.Provider>;
};

export const useNavigation = () => {
  return useContext(NavigateContext);
};
