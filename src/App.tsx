import './App.css';
import { TheHeader } from './Components/TheHeader';
import { Loader } from './Components/Loader';
import { DarkModeContext, DarkModeProvider } from './context/darkModeContext';
import { useContext } from 'react';
import { BlockHyperlinks } from './Components/Block/BlockHyperlinks';
import { BlockHero } from './Components/Block/BlockHero';
import { BlockExperience } from './Components/Block/BlockExperience';
import { BlockGetInTouch } from './Components/Block/BlockGetInTouch';
import { BlockProjects } from './Components/Block/BlockProjects';
import { BlockTechStack } from './Components/Block/BlockTechStack';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <DarkModeProvider>
        <div
          className={`relative ${
            darkMode ? 'dark' : ''
          } bg-white dark:bg-[#3c096c] transition-colors duration-200 ease-in-out `}>
          <TheHeader />
          <BlockHyperlinks />
          <BlockHero />
          <BlockTechStack />
          <BlockExperience />
          <BlockProjects />
          <BlockGetInTouch />
          {/* <Loader /> */}
        </div>
      </DarkModeProvider>
    </>
  );
}

export default App;
