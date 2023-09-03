import { IProject } from '../../repositories/projects';
import { motion, Variants } from 'framer-motion';
const cardVariants: Variants = {
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
};
export const BaseProject = ({ toggle, content }: { toggle?: boolean; content: IProject }) => {
  return (
    <motion.article
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.8 }}
      className="w-full items-center flex flex-col lg:flex-row justify-center lg:container lg:h-[400px] lg:max-h-[400px] relative">
      <div
        className={`${
          toggle ? 'lg:-translate-x-48' : 'lg:translate-x-48'
        } rounded-lg h-fit relative group`}>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#3C096C] w-0 via-[#9D4EDD] to-[#C77DFF] opacity-0  group-hover:w-full h-full group-hover:opacity-50 transition duration-500 ease-in-out"></div>
        <img className="lg:w-[550px] h-auto  rounded-lg " src={content.thumbnail} alt="" />
      </div>
      <div
        className={`lg:h-fit -translate-y-4  p-4 md:w-[450px] bg-opacity-75 backdrop-blur-lg rounded-lg shadow-lg ${
          toggle ? 'lg:left-1/2' : 'lg:right-1/2'
        } lg:absolute text-white bg-purple-500 flex flex-col gap-y-5 justify-center py-4`}>
        <h1 className="text-2xl font-bold text-white font-firacode">{content.name}</h1>
        <p className="text-base font-light text-white font-raleway">{content.description}</p>
        <div className="flex flex-wrap gap-x-4">
          {content.stack.map((el: string, index: number) => {
            return (
              <span className="font-light" key={index}>
                {el}
              </span>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
};
