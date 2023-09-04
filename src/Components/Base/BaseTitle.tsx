import { motion } from 'framer-motion';

export const BaseTitle = ({ index, title }: { index: string; title: string }) => {
  return (
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
        <span className="dark:text-[#6717b2]">{index}</span>. {title}
      </h1>
      <div className="flex-1 w-full bg-[#7B2CBF] h-[1px]"></div>
    </motion.div>
  );
};
