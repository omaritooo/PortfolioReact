import { motion } from 'framer-motion';
import { BaseRow } from '../Base/BaseRow';
import { BaseTitle } from '../Base/BaseTitle';

export const BlockTechStack = () => {
  const prefStack = [
    {
      name: 'Nuxt',
      src: 'icons/nuxt.svg'
    },
    {
      name: 'Vue',
      src: 'icons/vue.svg'
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
  const Stack1 = [
    {
      name: 'React',
      src: 'icons/react.svg'
    },
    {
      name: 'React Native',
      src: 'icons/react-native.svg'
    },
    {
      name: 'React Query',
      src: 'icons/query.svg'
    },
    { name: 'Redux', src: 'icons/redux.svg' },
    {
      name: 'Next',
      src: 'icons/nextjs.svg'
    }
  ];
  const cssStack = [
    {
      name: 'Bootstrap',
      src: 'icons/bootstrap2.svg'
    },
    {
      name: 'GSAP',
      src: 'icons/gsap.svg'
    },
    { name: 'Vuetify', src: 'icons/vuetify.svg' },
    { name: 'CSS', src: 'icons/css.svg' },
    {
      name: 'Material UI',
      src: 'icons/material-ui.svg'
    },
    {
      name: 'Framer Motion',
      src: 'icons/fm.svg'
    }
  ];
  const utilStack = [
    {
      name: 'Storybook',
      src: 'icons/storybook.svg'
    },
    {
      name: 'Three.js',
      src: 'icons/threejs.svg'
    },
    {
      name: 'Jest',
      src: 'icons/jest.svg'
    }
  ];

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
    <section
      id="tech-stack"
      className="container flex flex-col flex-wrap justify-between mt-20 lg:mt-40 font-raleway gap-y-10">
      <BaseTitle index="02" title="Tech Stack" />
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
          features, animations, and coding interactive layouts.
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
      <div className="flex flex-col justify-between gap-y-4">
        <BaseRow
          data={cssStack}
          title="Other technologies I'm proficient in:"
          variants={variants}
        />
        <BaseRow data={Stack1} variants={variants} />
        <BaseRow data={utilStack} variants={variants} />
      </div>
    </section>
  );
};
