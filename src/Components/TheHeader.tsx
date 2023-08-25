import { useContext, useEffect, useState } from "react";
import { BaseToggle } from "./Base/BaseToggle";
import { DarkModeContext } from "../context/darkModeContext";
import { motion, AnimatePresence } from "framer-motion";
import { MenuButton } from "./Base/BaseHamburger";
import { useMenuScope } from "../Hooks/useMenuScope";

export const TheHeader = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { darkMode } = useContext(DarkModeContext);
  const scope = useMenuScope(!toggle);

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
    open: { opacity: 1, x: 0, display: "block" },
    closed: { opacity: 0, x: "-100%", display: "none" },
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.getElementById("header")?.classList.remove("navbar");
        document.getElementById("header")?.classList.add("navbar-scrolled");
      } else {
        document.getElementById("header")?.classList.add("navbar");
        document.getElementById("header")?.classList.remove("navbar-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header id="header" className=" container">
        <nav className="w-full container text-black py-4 dark:text-white transition-colors duration-200">
          <div className="flex items-center justify-between w-full mx-auto">
            <div className="flex items-center justify-between w-full h-fit">
              <div className="flex items-center flex-shrink-0 gap-x-2">
                <a
                  href="#"
                  className="flex items-center text-xl group font-bold text-white"
                >
                  <AnimatePresence>
                    {darkMode ? (
                      <motion.img
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        src="/logo.png"
                        width="50"
                        className="group-hover:rotate-180"
                        height="50"
                        alt=""
                      />
                    ) : (
                      <motion.img
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        src="/logo_black.png"
                        width="50"
                        className="group-hover:rotate-180"
                        height="50"
                        alt=""
                      />
                    )}
                  </AnimatePresence>
                </a>
              </div>
              <div className="hidden h-full align-middle lg:flex md:rtl:mr-10 lg:rtl:mr-14 md:ltr:ml-10 lg:ltr:ml-14">
                <div className="flex items-center h-full font-light align-middle gap-x-8 md:text-sm lg:text-base">
                  {headerTags.map((el, index) => {
                    return (
                      <a
                        id={el.link}
                        href={el.link}
                        className="nav-link [&>*:first-child]:nav-link-active"
                        key={index}
                      >
                        {el.name}
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
            variants={variants}
            id="mobile-menu"
            ref={scope}
          >
            <ul
              style={{
                clipPath: "inset(10% 50% 90% 50% round 10px)",
              }}
              className="flex flex-col items-start mt-5 mr-5 text-3xl  text-black  dark:text-white font-light gap-y-1 md:text-lg"
            >
              {headerTags.map((el, index) => {
                return (
                  <li className="my-5 " key={index}>
                    <a id={el.link} href={el.link}>
                      {el.name}
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
