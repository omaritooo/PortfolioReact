import { useContext, useEffect, useState } from "react";
import { BaseToggle } from "./Base/BaseToggle";
import { DarkModeContext } from "../context/darkModeContext";
import { motion, AnimatePresence } from "framer-motion";
import { MenuButton } from "./Base/BaseHamburger";
import { useMenuScope } from "../Hooks/useMenuScope";

export const TheHeader = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const { darkMode } = useContext(DarkModeContext);
  const scope = useMenuScope(!toggle);
  const [display, setDisplay] = useState<string>();
  const headerTags = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About me",
      link: "/",
    },
    {
      name: "Experience",
      link: "/",
    },
    {
      name: "Projects",
      link: "/",
    },
    {
      name: "Contact Me",
      link: "/",
    },
  ];

  const toggleNavbar = () => {
    if (window.innerWidth < 1024) {
      setToggle(!toggle);
    }
  };
  const variants = {
    open: {
      opacity: 1,
      x: 0,
      display: display,
    },
    closed: { opacity: 0, x: "-100%", display: "none" },
  };

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setDisplay("block");
    } else {
      setDisplay("none");
      document.body.classList.remove("overflow-hidden");
      document.body.classList.remove("h-screen");
    }
  }, [window.innerWidth]);
  useEffect(() => {
    if (!toggle) {
      document.body.classList.add("overflow-hidden");
      document.body.classList.add("h-screen");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.classList.remove("h-screen");
    }
  }, [toggle]);
  return (
    <>
      {!toggle ? (
        <div className="bg-[#34a0a4] bg-opacity-90 dark:bg-black z-50 w-screen h-screen fixed top-0 left-0 transition-colors duration-200"></div>
      ) : null}
      <header
        id="header"
        className={`md:container z-50  fixed  top-0 lg:top-6 bg-[#34a0a4] dark:bg-[#7209b7] ${
          toggle ? "shadow-xl" : ""
        }  left-0 right-0  md:rounded-lg`}
      >
        <nav className="w-full text-white py-4 container lg:container-0 relative z-50 dark:text-white transition-colors duration-200">
          <div className="flex items-center justify-between w-full mx-auto">
            <div className="flex items-center justify-between w-full h-fit">
              <div className="flex items-center flex-shrink-0">
                <AnimatePresence>
                  {!darkMode ? (
                    <motion.img
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      whileHover={{
                        scale: 1.2,
                        rotate: "180deg",
                        transition: { duration: 1 },
                      }}
                      src="/logo.png"
                      width="50"
                      className="hover:rotate-180"
                      height="50"
                      alt=""
                    />
                  ) : (
                    <motion.img
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      whileHover={{
                        scale: 1.2,
                        rotate: "180deg",
                        transition: { duration: 1 },
                      }}
                      exit={{ x: -300, opacity: 0 }}
                      src="/logo_black.png"
                      width="50"
                      className="hover:rotate-45"
                      height="50"
                      alt=""
                    />
                  )}
                </AnimatePresence>
              </div>
              <div className="hidden h-full align-middle lg:flex md:rtl:mr-10 lg:rtl:mr-14 md:ltr:ml-10 lg:ltr:ml-14">
                <div className="flex items-center h-full  font-light align-middle gap-x-8 md:text-sm lg:text-sm">
                  {headerTags.map((el, index) => {
                    return (
                      <a id={el.link} href={el.link} className="" key={index}>
                        0{index + 1}. {el.name}
                      </a>
                    );
                  })}
                  <BaseToggle />
                </div>
              </div>
              <div className="flex mr-2 lg:hidden">
                <button
                  id="toggler"
                  type="button"
                  onClick={toggleNavbar}
                  className="inline-flex  rounded-xl items-center justify-center  text-gray-400"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <MenuButton
                    isOpen={toggle}
                    strokeWidth="2"
                    color={darkMode ? "#fff" : "#000"}
                    transition={{ ease: "easeOut", duration: 0.2 }}
                    width="30"
                    height="20"
                  />
                </button>
              </div>
            </div>
          </div>
          <motion.div
            animate={!toggle ? "open" : "closed"}
            className="flex   lg:hidden"
            variants={variants}
            id="mobile-menu"
            ref={scope}
          >
            <ul className="flex flex-col items-start mt-5 mr-5 text-3xl h-fit py-4 px-4 rounded-lg dark:bg-gray-800 text-white  dark:text-white font-light gap-y-1 md:text-lg">
              {headerTags.map((el, index) => {
                return (
                  <li className="my-5 " key={index}>
                    <a id={el.link} href={el.link}>
                      0{index + 1}. {el.name}
                    </a>
                  </li>
                );
              })}
              <BaseToggle />
            </ul>
          </motion.div>
        </nav>
      </header>
    </>
  );
};
