// src/context/ThemeContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ThemeContext = createContext({ theme: "light" });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [theme, setTheme] = useState("light"); // default theme is light

  // Define routes that should have a dark theme
  const darkRoutes = ["/videoplayer"];

  // Update the theme based on the current route
  useEffect(() => {
    if (darkRoutes.includes(location.pathname)) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [location]);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
