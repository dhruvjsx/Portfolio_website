import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ lenis }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenis.current) {
        lenis.current.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;
