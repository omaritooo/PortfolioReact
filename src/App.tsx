import "./App.css";
import { TheHeader } from "./Components/TheHeader";
import { Loader } from "./Components/Loader";
import { DarkModeContext, DarkModeProvider } from "./context/darkModeContext";
import { useContext } from "react";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <DarkModeProvider>
        <div
          className={`relative ${
            darkMode ? "dark" : ""
          } bg-white dark:bg-black transition-colors duration-200 ease-in-out `}
        >
          <TheHeader />
          <div className="h-screen w-screen"></div>
          {/* <Loader /> */}
        </div>
      </DarkModeProvider>
    </>
  );
}

export default App;
