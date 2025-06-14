import { useState, createContext, useContext } from "react";

const colorContext = createContext();

export const useColor = () => {
  return useContext(colorContext);
};
const ThemeProvider = ({ children }) => {
  const [color, setColor] = useState("light");
  const colorToggler = () => {
    setColor((pre) => (pre === "light" ? "dark" : "light"));
  };

  return (
    <colorContext.Provider value={{ color, colorToggler }}>
      {children}
    </colorContext.Provider>
  );
};
export default ThemeProvider;
