import { PropsWithChildren, createContext, useState } from "react";

const defaultValue = {
  darkMode: false,
  toggleDarkMode: () => undefined,
};

const DarkModeContext = createContext(defaultValue);

const DarkModeProvider = ({ children }: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleDarkMode: () => undefined = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <div className={`${darkMode ? "dark" : ""} `}>{children}</div>
      </DarkModeContext.Provider>
    </>
  );
};

export { DarkModeContext, DarkModeProvider };
