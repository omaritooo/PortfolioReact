import { motion, AnimatePresence } from 'framer-motion';
import AnimatedTextCharacter from '../Animations/AnimatedText';

export const BlockHero = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 0.1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };
  return (
    <section
      id="header"
      className="my-20 md:my-0 min-h-screen w-screen bg-[#2ec4b6] overflow-hidden dark:bg-[#7b2cbf] relative flex items-center relatve z-40">
      <div className="w-screen h-[200px] md:h-auto z-20 absolute bottom-0 left-0">
        <svg
          className="text-[#38a3a5] dark:text-[#5a189a] h-full  duration-200 transition"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320">
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,160L80,181.3C160,203,320,245,480,234.7C640,224,800,160,960,149.3C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <div className="w-screen z-20 h-[200px]  md:h-auto absolute bottom-0 left-0">
        <svg
          className="text-white dark:text-[#3c096c] h-full duration-200 transition"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 230">
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,160L80,181.3C160,203,320,245,480,234.7C640,224,800,160,960,149.3C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <div className="container relative z-40 flex flex-col text-5xl text-white md:text-7xl gap-y-5 lg:px-24">
        <article className="flex flex-col mt-5 gap-y-3">
          <span className="text-lg md:text-xl text-[#cbf3f0] dark:text-[#3c096c] font-light">
            Hello, my name is
          </span>{' '}
          <span className="relative font-bold w-fit">
            <AnimatedTextCharacter text="Omar Ashraf" />
            {/* Omar Ashraf */}
            <AnimatePresence>
              <motion.svg
                className="absolute -bottom-4 left-0 text-[#38A3A5] dark:text-[#3c096c]"
                width="150"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                height="17"
                viewBox="0 0 112 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  variants={draw}
                  custom={1}
                  d="M1 1C30.183 4.80725 108.032 -0.721088 110.936 6.19274C113.734 12.8554 24.0966 1.90809 29.3834 10"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
              </motion.svg>
            </AnimatePresence>
          </span>
          <span className="w-fit relative text-[#38a3a5] dark:text-[#3c096c] font-bold flex lg:hidden">
            I build things for the web.
          </span>
          <span className="w-fit relative text-[#38a3a5] dark:text-[#3c096c] font-bold hidden lg:flex">
            <AnimatedTextCharacter delay={20} text="I build things for the web. " />
          </span>
        </article>
        <p className="text-base lg:text-lg ml-1 max-w-[500px] ">
          I&apos;m a software engineer specializing in building exceptional digital experiences.
          Currently, I’m focused on building accessible, responsive and modern web applications
          using the latest technologies.
        </p>
        <motion.button
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.4 }
          }}
          className="px-4 py-2 text-lg text-white bg-transparent border-2 border-white rounded-lg w-fit">
          Download my resume
        </motion.button>
      </div>
    </section>
  );
};
