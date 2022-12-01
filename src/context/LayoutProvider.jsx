import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return <LayoutContext.Provider value={{isMobile}}>{children}</LayoutContext.Provider>;
};

export default LayoutProvider;
