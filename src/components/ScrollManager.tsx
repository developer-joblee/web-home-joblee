import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // Aguarda a página de destino montar antes de rolar até a âncora
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(hash.replace("#", ""));
      target?.scrollIntoView({ behavior: "smooth" });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};
