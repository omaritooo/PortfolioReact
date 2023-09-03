import { motion } from 'framer-motion';
import { BaseSvg } from '../Base/BaseSvg';
import { BaseRow } from '../Base/BaseRow';

export const BlockTechStack = () => {
  // const prefStack = ['icons/ts.svg', 'icons/nuxt.svg', 'icons/tailwind.svg', 'icons/sass.svg'];
  const prefStack = [
    {
      name: 'Nuxt',
      src: 'icons/nuxt.svg'
    },
    {
      name: 'Typescript',
      src: 'icons/ts.svg'
    },
    { name: 'Tailwind', src: 'icons/tailwind.svg' },
    {
      name: 'Sass',
      src: 'icons/sass.svg'
    }
  ];

  const list2 = ['icons/css.svg', 'icons/nuxt.svg', 'icons/tailwind.svg'];
  const variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      x: 50,
      opacity: 0,
      transition: {
        staggerChildren: 0.5,
        y: { stiffness: 1000 }
      }
    }
  };
  return (
    <>
      <section className="container flex flex-col flex-wrap justify-between my-40 font-raleway gap-y-10">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            offscreen: {
              y: 100,
              opacity: 0
            },
            onscreen: {
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                duration: 0.8
              }
            }
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="flex flex-col items-center w-full lg:w-3/4 lg:mx-auto md:flex-row gap-x-2 md:gap-x-10">
          <h1 className="text-3xl text-left text-white font-firacode ">
            <span className="dark:text-[#6717b2]">02</span>. Tech Stack
          </h1>
          <div className="flex-1 w-full bg-[#7B2CBF] h-[1px]"></div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            offscreen: {
              y: 100,
              opacity: 0
            },
            onscreen: {
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                duration: 0.8
              }
            }
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="md:max-w-[500px] text-justify flex flex-col gap-y-4  dark:text-white font-raleway mx-auto">
          <motion.p>
            The main area of expertise is front end development (client side of the web). HTML, CSS,
            JS, building small and medium web applications with Vue or React, custom plugins,
            features, animations, and coding interactive layouts. I have also full-stack developer
            experience with one of the most popular open source CMS on the web - WordPress
          </motion.p>
          <motion.h2 className="text-center">
            Visit my{' '}
            <a
              className="font-medium text-[#7B2CBF]"
              href="https://www.linkedin.com/in/omarashraf27/"
              target="_blank"
              rel="noopener noreferrer">
              Linkedin
            </a>{' '}
            for more details.
          </motion.h2>
        </motion.div>

        <BaseRow data={prefStack} variants={variants} title="Preferred Tech Stack" />
      </section>
    </>
  );
};
