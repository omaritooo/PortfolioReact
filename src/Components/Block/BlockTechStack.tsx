import { motion } from 'framer-motion';
import { BaseRow } from '../Base/BaseRow';
import { BaseTitle } from '../Base/BaseTitle';
import { onScrollVariant } from '../../repositories/variants';
import { stacks } from '../../repositories/content';

export const BlockTechStack = () => {
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
        variants={onScrollVariant}
        viewport={{ once: true, amount: 0.8 }}
        className="md:max-w-[500px] text-justify flex flex-col gap-y-4 text-[#3AAFA9]  dark:text-white font-raleway mx-auto">
        <motion.p>
          The main area of expertise is front end development (client side of the web). HTML, CSS,
          JS, building small and medium web applications with Vue or React, custom plugins,
          features, animations, and coding interactive layouts.
        </motion.p>
        <motion.h2 className="flex items-center justify-center text-center gap-x-1">
          Visit my
          <motion.a
            className="text-xl font-medium h-fit font-raleway dark:text-dark-main"
            href="https://www.linkedin.com/in/omarashraf27/"
            target="_blank"
            rel="noopener noreferrer">
            Linkedin
          </motion.a>{' '}
          for more details.
        </motion.h2>
      </motion.div>

      <BaseRow data={stacks.prefStack} variants={variants} title="Preferred Tech Stack" />
      <div className="flex flex-col justify-between gap-y-4">
        <BaseRow
          data={stacks.cssStack}
          title="Other technologies I'm proficient in:"
          variants={variants}
        />
        <BaseRow data={stacks.reactStack} variants={variants} />
        <BaseRow data={stacks.utilStack} variants={variants} />
      </div>
    </section>
  );
};
